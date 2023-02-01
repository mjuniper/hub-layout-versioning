"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.portalSearchGroups = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const HubGroups_1 = require("../../groups/HubGroups");
const HubError_1 = require("../../HubError");
const serializeQueryForPortal_1 = require("../serializeQueryForPortal");
const utils_1 = require("../utils");
const expandPredicate_1 = require("./expandPredicate");
/**
 * @private
 * Portal Search Implementation for Groups
 * @param query
 * @param options
 * @returns
 */
async function portalSearchGroups(query, options) {
    if (!options.requestOptions) {
        throw new HubError_1.default("portalSearchGroups", "options.requestOptions is required.");
    }
    // Expand the individual predicates in each filter
    query.filters = query.filters.map((filter) => {
        filter.predicates = filter.predicates.map(expandPredicate_1.expandPredicate);
        return filter;
    });
    // Serialize the all the groups for portal
    const so = serializeQueryForPortal_1.serializeQueryForPortal(query);
    // Array of properties we want to copy from IHubSearchOptions to the ISearchOptions
    const props = [
        "num",
        "sortField",
        "sortOrder",
        "include",
        "start",
        "requestOptions",
    ];
    // copy the props over
    props.forEach((prop) => {
        if (options.hasOwnProperty(prop)) {
            so[prop] = options[prop];
        }
    });
    // If we don't have auth, ensure we have .portal
    if (options.requestOptions.authentication) {
        so.authentication = options.requestOptions.authentication;
    }
    else {
        so.portal = options.requestOptions.portal;
    }
    return searchPortal(so);
}
exports.portalSearchGroups = portalSearchGroups;
/**
 * Internal portal search, which then converts `IGroup`s to `IHubSearchResult`s
 * handling enrichments & includes along the way
 *
 * @param searchOptions
 * @returns
 */
async function searchPortal(searchOptions) {
    // Execute portal search
    const resp = await arcgis_rest_portal_1.searchGroups(searchOptions);
    // create mappable fn that will close
    // over the includes and requestOptions
    const fn = (item) => {
        return groupToSearchResult(item, searchOptions.include, searchOptions.requestOptions);
    };
    // map over results
    const results = await Promise.all(resp.results.map(fn));
    // Group Search does not support aggregations
    // Construct the return
    return {
        total: resp.total,
        results,
        hasNext: resp.nextStart > -1,
        next: utils_1.getNextFunction(searchOptions, resp.nextStart, resp.total, searchPortal),
    };
}
/**
 * Convert an Item to a IHubSearchResult
 * Fetches the includes and attaches them to the item
 * @param item
 * @param includes
 * @param requestOptions
 * @returns
 */
async function groupToSearchResult(group, includes = [], requestOptions) {
    // Delegate to HubGroups module
    // This layer of indirection is not necessary but
    // aligns with how the items search works and
    // allows for future specialization
    return HubGroups_1.enrichGroupSearchResult(group, includes, requestOptions);
}
//# sourceMappingURL=portalSearchGroups.js.map