import { searchUsers, } from "@esri/arcgis-rest-portal";
import { enrichUserSearchResult } from "../../users";
import { serializeQueryForPortal } from "../serializeQueryForPortal";
import HubError from "../../HubError";
import { getNextFunction } from "../utils";
import { expandPredicate } from "./expandPredicate";
/**
 * @private
 * Portal Search Implementation for Users
 * @param filterGroups
 * @param options
 * @returns
 */
export async function portalSearchUsers(query, options) {
    // requestOptions is always required and user must be authd
    if (!options.requestOptions) {
        throw new HubError("portalSearchUsers", "requestOptions: IHubRequestOptions is required.");
    }
    if (!options.requestOptions.authentication) {
        throw new HubError("portalSearchUsers", "requestOptions must pass authentication.");
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
    // Unlike Groups and Item, the Users api *requires* authentication
    // so we set it directly
    so.authentication = options.requestOptions.authentication;
    // Execute search
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
    const resp = await searchUsers(searchOptions);
    // create mappable fn that will close
    // over the includes and requestOptions
    const fn = (user) => {
        return userToSearchResult(user, searchOptions.include, searchOptions.requestOptions);
    };
    // map over results
    const results = await Promise.all(resp.results.map(fn));
    // Group Search does not support aggregations
    // Construct the return
    return {
        total: resp.total,
        results,
        hasNext: resp.nextStart > -1,
        next: getNextFunction(searchOptions, resp.nextStart, resp.total, searchPortal),
    };
}
/**
 * Convert an Item to a IHubSearchResult
 * Fetches the includes and attaches them to the item
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
async function userToSearchResult(user, include = [], requestOptions) {
    // Delegate to HubGroups module
    // This layer of indirection is not necessary but
    // aligns with how the items search works and
    // allows for future specialization
    return enrichUserSearchResult(user, include, requestOptions);
}
//# sourceMappingURL=portalSearchUsers.js.map