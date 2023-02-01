"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserEnrichments = void 0;
const fetch_org_1 = require("../../org/fetch-org");
const _enrichments_1 = require("../../items/_enrichments");
const OperationStack_1 = require("../../OperationStack");
const urls_1 = require("../../urls");
const utils_1 = require("../../utils");
const enrichUserOrg = (input) => {
    const { data, stack, requestOptions } = input;
    const opId = stack.start("enrichUserOrg");
    const options = Object.assign(Object.assign({}, requestOptions), { 
        // In order to get the correct response, we must pass options.portal
        // as a base portal url (e.g., www.arcgis.com, qaext.arcgis.com, etc)
        // **not** an org portal (i.e. org.maps.arcgis.com).
        portal: `${urls_1.getPortalBaseFromOrgUrl(requestOptions.portal)}/sharing/rest` });
    // TODO: Add Caching
    // Had implemented a simple caching system, but it leads to unstable
    // tests because we can't deterministically clear it
    // if (!orgCache[data.user.orgId]) {
    //   orgCache[data.user.orgId] = fetchOrg(data.user.orgId, options);
    // }
    // return (orgCache[data.user.orgId] as Promise<IPortal>)
    return fetch_org_1.fetchOrg(data.user.orgId, options)
        .then((results) => {
        stack.finish(opId);
        return {
            data: Object.assign(Object.assign({}, data), {
                org: results,
            }),
            stack,
            requestOptions,
        };
    })
        .catch((error) => handleEnrichmentError(error, input, opId));
};
/**
 * Simple cache for user org's. This does not expire
 * but that seems reasonable as Org props rarely change
 */
// This works find at run-time, but it's a problem in tests
// where we are validating calls. Will work with Randy to
// create something that's more robust
// const orgCache: Record<string, any> = {};
// add the error to the content.errors,
// log current stack operation as finished with an error
// and return output that can be piped into the next operation
const handleEnrichmentError = (error, input, opId) => {
    const { data, stack, requestOptions } = input;
    stack.finish(opId, { error });
    return {
        data: Object.assign(Object.assign({}, data), { errors: _enrichments_1.getEnrichmentErrors(error, data.errors) }),
        stack,
        requestOptions,
    };
};
/**
 * Available enrichments for Groups
 */
const groupEnrichementOperations = {
    org: enrichUserOrg,
};
/**
 * Fetch enrichments for Users
 * @param group
 * @param enrichments
 * @param requestOptions
 * @returns
 */
function fetchUserEnrichments(user, enrichments, requestOptions) {
    // create a pipeline of enrichment operations
    const operations = enrichments.reduce((ops, enrichment) => {
        const operation = groupEnrichementOperations[enrichment];
        // only include the enrichments that we know how to fetch
        operation && ops.push(operation);
        return ops;
    }, []);
    const pipeline = utils_1.createOperationPipeline(operations);
    // execute pipeline and return the item and enrichments
    return pipeline({
        data: { user },
        stack: new OperationStack_1.default(),
        requestOptions,
    }).then((output) => {
        // TODO: send telemetry so we have info on what enrichments are requested and possible errors
        return output.data;
    });
}
exports.fetchUserEnrichments = fetchUserEnrichments;
//# sourceMappingURL=enrichments.js.map