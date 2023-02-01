import { getItemData, getItemGroups, getUser, } from "@esri/arcgis-rest-portal";
import { getAllLayersAndTables, getService, parseServiceUrl, } from "@esri/arcgis-rest-feature-layer";
import { createOperationPipeline } from "../utils";
import OperationStack from "../OperationStack";
// TODO: move these functions here under /items
import { getItemMetadata } from "@esri/arcgis-rest-portal";
import { parse } from "fast-xml-parser";
import { getItemOrgId } from "../content/_internal";
import { fetchOrg } from "../org";
/**
 * Parse metadataxml into json object
 * @param metadataXml
 * @returns
 */
function parseMetadataXml(metadataXml) {
    const opts = {
        // options for fastXmlParser to read tag attrs
        ignoreAttributes: false,
        attributeNamePrefix: "@_",
        textNodeName: "#value",
    };
    return parse(metadataXml, opts);
}
/**
 * Fetch an [item's metadata](https://doc.arcgis.com/en/arcgis-online/manage-data/metadata.htm) from a portal
 * and parse and return it as JSON
 * @param id item id
 * @param requestOptions
 */
function fetchContentMetadata(id, requestOptions) {
    return getItemMetadata(id, requestOptions)
        .then((metadataXml) => parseMetadataXml(metadataXml))
        .catch(() => {
        // many items don't have metadata and the request will 404
        // in these cases we don't want to treat it as an error
        // content.metadata === null signals to consumers that
        // we attempted to fetch the metadata, but it doesn't exist
        // TODO: we should probably still throw the error if it's not a 404
        return null;
    });
}
const enrichGroupIds = (input) => {
    const { data, stack, requestOptions } = input;
    const opId = stack.start("enrichGroupIds");
    return getItemGroups(data.item.id, requestOptions)
        .then((response) => {
        const { admin, member, other } = response;
        const groupIds = [...admin, ...member, ...other].map((group) => group.id);
        stack.finish(opId);
        return {
            data: Object.assign(Object.assign({}, data), { groupIds }),
            stack,
            requestOptions,
        };
    })
        .catch((error) => handleEnrichmentError(error, input, opId));
};
const enrichMetadata = (input) => {
    const { data, stack, requestOptions } = input;
    const opId = stack.start("enrichMetadata");
    return fetchContentMetadata(data.item.id, requestOptions).then((metadata) => {
        stack.finish(opId);
        return {
            data: Object.assign(Object.assign({}, data), { metadata }),
            stack,
            requestOptions,
        };
    });
    // TODO: currently fetchContentMetadata will never throw, but
    // if we update it to throw for non-404 errors, need to uncomment this:
    // .catch((error) => handleEnrichmentError(error, input, opId));
};
const enrichOwnerUser = (input) => {
    const { data, stack, requestOptions } = input;
    const opId = stack.start("enrichOwner");
    // w/o the : any here, I get a compile error about
    // .authentication being incompatible w/ UserSession
    const options = Object.assign({ username: data.item.owner }, requestOptions);
    return getUser(options)
        .then((ownerUser) => {
        stack.finish(opId);
        return {
            data: Object.assign(Object.assign({}, data), { ownerUser }),
            stack,
            requestOptions,
        };
    })
        .catch((error) => handleEnrichmentError(error, input, opId));
};
// Note, this MUST be run after `enrichOwnerUser` to access the correct orgId during processing.
// `item.orgId` is only SOMETIMES returned by Portal, so we need the ownerUser's orgId as a backup.
//
// If an orgId isn't present on either the item or the ownerUser, this operation will be skipped.
const enrichOrg = (input) => {
    const { data, stack, requestOptions } = input;
    const opId = stack.start("enrichOrg");
    const orgId = getItemOrgId(data.item, data.ownerUser);
    // Only fetch the org if an explicit orgId is present
    const orgPromise = orgId
        ? fetchOrg(orgId, requestOptions)
        : Promise.resolve(undefined);
    return orgPromise
        .then((org) => {
        stack.finish(opId);
        return {
            data: Object.assign(Object.assign({}, data), { org }),
            stack,
            requestOptions,
        };
    })
        .catch((error) => handleEnrichmentError(error, input, opId));
};
const enrichData = (input) => {
    const { data, stack, requestOptions } = input;
    const opId = stack.start("enrichData");
    return getItemData(data.item.id, requestOptions)
        .then((itemData) => {
        stack.finish(opId);
        return { data: Object.assign(Object.assign({}, data), { data: itemData }), stack, requestOptions };
    })
        .catch((error) => handleEnrichmentError(error, input, opId));
};
const enrichServer = (input) => {
    const { data, stack, requestOptions } = input;
    const opId = stack.start("enrichServer");
    const url = parseServiceUrl(data.item.url);
    const options = Object.assign(Object.assign({}, requestOptions), { url });
    return getService(options)
        .then((server) => {
        stack.finish(opId);
        return { data: Object.assign(Object.assign({}, data), { server }), stack, requestOptions };
    })
        .catch((error) => handleEnrichmentError(error, input, opId));
};
const enrichLayers = (input) => {
    const { data, stack, requestOptions } = input;
    const opId = stack.start("enrichLayers");
    const url = data.item.url;
    const options = Object.assign(Object.assign({}, requestOptions), { url });
    return (getAllLayersAndTables(options)
        // merge layers and tables into a single array
        // and filter out any group layers
        .then((response) => {
        const merged = [...response.layers, ...response.tables];
        return merged.filter((layer) => layer.type !== "Group Layer");
    })
        .then((layers) => {
        stack.finish(opId);
        return { data: Object.assign(Object.assign({}, data), { layers }), stack, requestOptions };
    })
        .catch((error) => handleEnrichmentError(error, input, opId)));
};
// add the error to the content.errors,
// log current stack operation as finished with an error
// and return output that can be piped into the next operation
const handleEnrichmentError = (error, input, opId) => {
    const { data, stack, requestOptions } = input;
    stack.finish(opId, { error });
    return {
        data: Object.assign(Object.assign({}, data), { errors: getEnrichmentErrors(error, data.errors) }),
        stack,
        requestOptions,
    };
};
const enrichmentOperations = {
    groupIds: enrichGroupIds,
    metadata: enrichMetadata,
    ownerUser: enrichOwnerUser,
    org: enrichOrg,
    data: enrichData,
    server: enrichServer,
    layers: enrichLayers,
};
/**
 * convert an error to an enrichment error info format
 * and optionally append it to an existing array of those
 * @param error
 * @param errors an array of existing enrichment error info
 * @returns a new array of enrichment error info
 * @private
 */
export const getEnrichmentErrors = (error, errors = []) => {
    const message = typeof error === "string"
        ? /* istanbul ignore next our tests only throw Error objects */
            error
        : error.message;
    return [
        ...errors,
        {
            // NOTE: for now we just return the message and type "Other"
            // but we could later introspect for HTTP or AGO errors
            // and/or return the status code if available
            type: "Other",
            message,
        },
    ];
};
/**
 * Fetch enrichments for an item
 * @param item
 * @param enrichments the list of enrichments to fetch
 * @param requestOptions
 * @returns an object with the item and enrichments
 * @private
 */
export const fetchItemEnrichments = (item, enrichments, requestOptions) => {
    // create a pipeline of enrichment operations
    const operations = enrichments.reduce((ops, enrichment) => {
        const operation = enrichmentOperations[enrichment];
        // only include the enrichments that we know how to fetch
        operation && ops.push(operation);
        return ops;
    }, []);
    const pipeline = createOperationPipeline(operations);
    // execute pipeline and return the item and enrichments
    return pipeline({
        data: { item },
        stack: new OperationStack(),
        requestOptions,
    }).then((output) => {
        // TODO: send telemetry so we have info on what enrichments are requested and possible errors
        return output.data;
    });
};
//# sourceMappingURL=_enrichments.js.map