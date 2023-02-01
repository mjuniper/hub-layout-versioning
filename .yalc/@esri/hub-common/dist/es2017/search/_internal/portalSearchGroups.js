import { searchGroups } from "@esri/arcgis-rest-portal";
import { HubError } from "../../index";
import { enrichGroupSearchResult } from "../../groups/HubGroups";
import { serializeQueryForPortal } from "../serializeQueryForPortal";
import { getNextFunction } from "../utils";
import { expandPredicate } from "./expandPredicate";
/**
 * @private
 * Portal Search Implementation for Groups
 * @param query
 * @param options
 * @returns
 */
export async function portalSearchGroups(query, options) {
    if (!options.requestOptions) {
        throw new HubError("portalSearchGroups", "options.requestOptions is required.");
    }
    // Expand the individual predicates in each filter
    query.filters = query.filters.map((filter) => {
        filter.predicates = filter.predicates.map(expandPredicate);
        return filter;
    });
    // Serialize the all the groups for portal
    const so = serializeQueryForPortal(query);
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
/**
 * Internal portal search, which then converts `IGroup`s to `IHubSearchResult`s
 * handling enrichments & includes along the way
 *
 * @param searchOptions
 * @returns
 */
async function searchPortal(searchOptions) {
    // Execute portal search
    const resp = await searchGroups(searchOptions);
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
        facets: [],
        hasNext: resp.nextStart > -1,
        next: getNextFunction(searchOptions, resp.nextStart, resp.total, searchPortal),
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
    return enrichGroupSearchResult(group, includes, requestOptions);
}
//# sourceMappingURL=portalSearchGroups.js.map