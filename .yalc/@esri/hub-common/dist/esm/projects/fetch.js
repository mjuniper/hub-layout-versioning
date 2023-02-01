import { getItem } from "@esri/arcgis-rest-portal";
// TODO: import these from specific modules
import { getItemThumbnailUrl, unique, mapBy, getProp, getFamily, getItemHomeUrl, } from "../index";
import { getHubRelativeUrl } from "../content/_internal";
import { PropertyMapper } from "../core/_internal/PropertyMapper";
import { getItemBySlug } from "../items/slugs";
import { fetchItemEnrichments } from "../items/_enrichments";
import { fetchModelFromItem } from "../models";
import { parseInclude } from "../search/_internal/parseInclude";
import { isGuid } from "../utils";
import { computeProps } from "./_internal/computeProps";
import { getPropertyMap } from "./_internal/getPropertyMap";
/**
 * @private
 * Get a Hub Project by id or slug
 * @param identifier item id or slug
 * @param requestOptions
 */
export function fetchProject(identifier, requestOptions) {
    let getPrms;
    if (isGuid(identifier)) {
        // get item by id
        getPrms = getItem(identifier, requestOptions);
    }
    else {
        getPrms = getItemBySlug(identifier, requestOptions);
    }
    return getPrms.then((item) => {
        if (!item)
            return null;
        return convertItemToProject(item, requestOptions);
    });
}
/**
 * @private
 * Convert an Hub Project Item into a Hub Project, fetching any additional
 * information that may be required
 * @param item
 * @param auth
 * @returns
 */
export async function convertItemToProject(item, requestOptions) {
    const model = await fetchModelFromItem(item, requestOptions);
    // TODO: In the future we will handle the boundary fetching from resource
    const mapper = new PropertyMapper(getPropertyMap());
    const prj = mapper.modelToObject(model, {});
    return computeProps(model, prj, requestOptions);
}
/**
 * @private
 * Fetch project specific enrichments
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
export async function enrichProjectSearchResult(item, include, requestOptions) {
    // Create the basic structure
    const result = {
        access: item.access,
        id: item.id,
        type: item.type,
        name: item.title,
        owner: item.owner,
        typeKeywords: item.typeKeywords,
        tags: item.tags,
        categories: item.categories,
        summary: item.snippet || item.description,
        createdDate: new Date(item.created),
        createdDateSource: "item.created",
        updatedDate: new Date(item.modified),
        updatedDateSource: "item.modified",
        family: getFamily(item.type),
        links: {
            self: "not-implemented",
            siteRelative: "not-implemented",
            thumbnail: "not-implemented",
        },
    };
    // default includes
    const DEFAULTS = [];
    // merge includes
    include = [...DEFAULTS, ...include].filter(unique);
    // Parse the includes into a valid set of enrichments
    const specs = include.map(parseInclude);
    // Extract out the low-level enrichments needed
    const enrichments = mapBy("enrichment", specs).filter(unique);
    // fetch the enrichments
    let enriched = {};
    if (enrichments.length) {
        // TODO: Look into caching for the requests in fetchItemEnrichments
        enriched = await fetchItemEnrichments(item, enrichments, requestOptions);
    }
    // map the enriched props onto the result
    specs.forEach((spec) => {
        result[spec.prop] = getProp(enriched, spec.path);
    });
    // Handle links
    // TODO: Link handling should be an enrichment
    result.links.thumbnail = getItemThumbnailUrl(item, requestOptions);
    result.links.self = getItemHomeUrl(result.id, requestOptions);
    result.links.siteRelative = getHubRelativeUrl(result.type, result.id, item.typeKeywords);
    return result;
}
//# sourceMappingURL=fetch.js.map