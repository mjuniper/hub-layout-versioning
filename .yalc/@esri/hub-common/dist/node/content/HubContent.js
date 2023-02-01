"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrichContentSearchResult = void 0;
const _enrichments_1 = require("../items/_enrichments");
const objects_1 = require("../objects");
const resources_1 = require("../resources");
const parseInclude_1 = require("../search/_internal/parseInclude");
const urls_1 = require("../urls");
const util_1 = require("../util");
const utils_1 = require("../utils");
const get_family_1 = require("./get-family");
const _internal_1 = require("./_internal");
/**
 * Enrich a generic search result
 * @param item
 * @param includes
 * @param requestOptions
 * @returns
 */
async function enrichContentSearchResult(item, include, requestOptions) {
    // Create the basic structure
    const result = {
        access: item.access,
        id: item.id,
        type: item.type,
        name: item.title,
        owner: item.owner,
        tags: item.tags,
        typeKeywords: item.typeKeywords,
        categories: item.categories,
        summary: item.snippet || item.description,
        createdDate: new Date(item.created),
        createdDateSource: "item.created",
        updatedDate: new Date(item.modified),
        updatedDateSource: "item.modified",
        family: get_family_1.getFamily(item.type),
        links: {
            self: "not-implemented",
            siteRelative: "not-implemented",
            thumbnail: "not-implemented",
        },
    };
    // default includes
    const DEFAULTS = [];
    // Add any type-specific defaults here
    // if (["Map Service", "Feature Service"].includes(item.type)) {
    //   DEFAULTS = ["server.layers.length AS layerCount"];
    // }
    // if (item.type === "Web Map") {
    //   DEFAULTS = ["data.operationalLayers.length AS layerCount"];
    // }
    // merge includes
    include = [...DEFAULTS, ...include].filter(util_1.unique);
    // Parse the includes into a valid set of enrichments
    const specs = include.map(parseInclude_1.parseInclude);
    // Extract out the low-level enrichments needed
    const enrichments = utils_1.mapBy("enrichment", specs).filter(util_1.unique);
    // fetch the enrichments
    let enriched = {};
    if (enrichments.length) {
        enriched = await _enrichments_1.fetchItemEnrichments(item, enrichments, requestOptions);
    }
    // map the enriched props onto the result
    specs.forEach((spec) => {
        result[spec.prop] = objects_1.getProp(enriched, spec.path);
    });
    // Handle links
    // TODO: Link handling should be an enrichment
    result.links.thumbnail = resources_1.getItemThumbnailUrl(item, requestOptions);
    result.links.self = urls_1.getItemHomeUrl(result.id, requestOptions);
    result.links.siteRelative = _internal_1.getHubRelativeUrl(result.type, result.id, item.typeKeywords);
    return result;
}
exports.enrichContentSearchResult = enrichContentSearchResult;
//# sourceMappingURL=HubContent.js.map