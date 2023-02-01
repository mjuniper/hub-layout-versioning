"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._searchUsers = void 0;
const __1 = require("..");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
// TODO: Remove with _searchContent
/**
 * @private
 * Search for Users via the Portal API.
 *
 * **Note** Authentication is required
 *
 * Another trivial comment to force a release
 *
 * Note: in the future, there may be options to search via
 * a Hub specific API
 * @param filter
 * @param options
 * @returns
 */
async function _searchUsers(filter, options) {
    __1.Logger.warn(`DEPRECATION: _searchUsers will be removed; switch to hubSearch(...)`);
    // JS Clients may not pass in authentication
    if (!options.authentication) {
        throw new Error("Authentication required to search for users.");
    }
    // expand filter so we can serialize to either api
    const expanded = __1.expandUserFilter(filter);
    // API
    const api = __1.expandApi(options.api || "arcgis");
    if (api.type === "arcgis") {
        const searchOptions = __1.serializeUserFilterForPortal(expanded);
        // Array of properties we want to copy from IHubSearchOptions
        // to the ISearchOptions
        const props = [
            "authentication",
            "num",
            "sortField",
            "sortOrder",
            "site",
            "start",
        ];
        // copy the props over
        props.forEach((prop) => {
            if (options.hasOwnProperty(prop)) {
                searchOptions[prop] = options[prop];
            }
        });
        return searchPortalUsers(searchOptions);
    }
    else {
        throw new Error("_searchUsers is not implemented for non-arcgis apis");
    }
}
exports._searchUsers = _searchUsers;
/**
 * Internal function that executes the user search along with
 * some simple enrichments
 * @param searchOptions
 * @returns
 */
function searchPortalUsers(searchOptions) {
    const portalUrl = searchOptions.authentication.portal;
    const token = searchOptions.authentication.token;
    // Partially applied functions for mapping over the results
    const userLinkify = (user) => {
        user.profileUrl = `${searchOptions.site.item.url}/people/${user.username}/profile`;
        return user;
    };
    const thumbnailify = (user) => {
        if (user.thumbnail) {
            user.thumbnailUrl = __1.getUserThumbnailUrl(portalUrl, user, token);
        }
        return user;
    };
    return arcgis_rest_portal_1.searchUsers(searchOptions).then((response) => {
        var _a, _b;
        const hasNext = response.nextStart > -1;
        // upgrade thumbnail url
        let results = response.results.map(thumbnailify);
        // generate the site team url if site url is provided
        if ((_b = (_a = searchOptions.site) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.url) {
            results = response.results.map(userLinkify);
        }
        return {
            hasNext,
            total: response.total,
            results,
            next: __1.getNextFunction(searchOptions, response.nextStart, response.total, searchPortalUsers),
        };
    });
}
//# sourceMappingURL=_searchUsers.js.map