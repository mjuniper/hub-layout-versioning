"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrichProjectSearchResult = exports.convertItemToProject = exports.fetchProject = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
// TODO: import these from specific modules
const index_1 = require("../index");
const _internal_1 = require("../content/_internal");
const PropertyMapper_1 = require("../core/_internal/PropertyMapper");
const slugs_1 = require("../items/slugs");
const _enrichments_1 = require("../items/_enrichments");
const models_1 = require("../models");
const parseInclude_1 = require("../search/_internal/parseInclude");
const utils_1 = require("../utils");
const computeProps_1 = require("./_internal/computeProps");
const getPropertyMap_1 = require("./_internal/getPropertyMap");
/**
 * @private
 * Get a Hub Project by id or slug
 * @param identifier item id or slug
 * @param requestOptions
 */
function fetchProject(identifier, requestOptions) {
    let getPrms;
    if (utils_1.isGuid(identifier)) {
        // get item by id
        getPrms = arcgis_rest_portal_1.getItem(identifier, requestOptions);
    }
    else {
        getPrms = slugs_1.getItemBySlug(identifier, requestOptions);
    }
    return getPrms.then((item) => {
        if (!item)
            return null;
        return convertItemToProject(item, requestOptions);
    });
}
exports.fetchProject = fetchProject;
/**
 * @private
 * Convert an Hub Project Item into a Hub Project, fetching any additional
 * information that may be required
 * @param item
 * @param auth
 * @returns
 */
async function convertItemToProject(item, requestOptions) {
    const model = await models_1.fetchModelFromItem(item, requestOptions);
    // TODO: In the future we will handle the boundary fetching from resource
    const mapper = new PropertyMapper_1.PropertyMapper(getPropertyMap_1.getPropertyMap());
    const prj = mapper.modelToObject(model, {});
    return computeProps_1.computeProps(model, prj, requestOptions);
}
exports.convertItemToProject = convertItemToProject;
/**
 * @private
 * Fetch project specific enrichments
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
async function enrichProjectSearchResult(item, include, requestOptions) {
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
        family: index_1.getFamily(item.type),
        links: {
            self: "not-implemented",
            siteRelative: "not-implemented",
            thumbnail: "not-implemented",
        },
    };
    // default includes
    const DEFAULTS = [];
    // merge includes
    include = [...DEFAULTS, ...include].filter(index_1.unique);
    // Parse the includes into a valid set of enrichments
    const specs = include.map(parseInclude_1.parseInclude);
    // Extract out the low-level enrichments needed
    const enrichments = index_1.mapBy("enrichment", specs).filter(index_1.unique);
    // fetch the enrichments
    let enriched = {};
    if (enrichments.length) {
        // TODO: Look into caching for the requests in fetchItemEnrichments
        enriched = await _enrichments_1.fetchItemEnrichments(item, enrichments, requestOptions);
    }
    // map the enriched props onto the result
    specs.forEach((spec) => {
        result[spec.prop] = index_1.getProp(enriched, spec.path);
    });
    // Handle links
    // TODO: Link handling should be an enrichment
    result.links.thumbnail = index_1.getItemThumbnailUrl(item, requestOptions);
    result.links.self = index_1.getItemHomeUrl(result.id, requestOptions);
    result.links.siteRelative = _internal_1.getHubRelativeUrl(result.type, result.id, item.typeKeywords);
    return result;
}
exports.enrichProjectSearchResult = enrichProjectSearchResult;
//# sourceMappingURL=fetch.js.map