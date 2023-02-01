import { __awaiter, __generator } from "tslib";
import { expandApi, expandUserFilter, getNextFunction, getUserThumbnailUrl, Logger, serializeUserFilterForPortal, } from "..";
import { searchUsers as portalUserSearch, } from "@esri/arcgis-rest-portal";
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
export function _searchUsers(filter, options) {
    return __awaiter(this, void 0, void 0, function () {
        var expanded, api, searchOptions_1, props;
        return __generator(this, function (_a) {
            Logger.warn("DEPRECATION: _searchUsers will be removed; switch to hubSearch(...)");
            // JS Clients may not pass in authentication
            if (!options.authentication) {
                throw new Error("Authentication required to search for users.");
            }
            expanded = expandUserFilter(filter);
            api = expandApi(options.api || "arcgis");
            if (api.type === "arcgis") {
                searchOptions_1 = serializeUserFilterForPortal(expanded);
                props = [
                    "authentication",
                    "num",
                    "sortField",
                    "sortOrder",
                    "site",
                    "start",
                ];
                // copy the props over
                props.forEach(function (prop) {
                    if (options.hasOwnProperty(prop)) {
                        searchOptions_1[prop] = options[prop];
                    }
                });
                return [2 /*return*/, searchPortalUsers(searchOptions_1)];
            }
            else {
                throw new Error("_searchUsers is not implemented for non-arcgis apis");
            }
            return [2 /*return*/];
        });
    });
}
/**
 * Internal function that executes the user search along with
 * some simple enrichments
 * @param searchOptions
 * @returns
 */
function searchPortalUsers(searchOptions) {
    var portalUrl = searchOptions.authentication.portal;
    var token = searchOptions.authentication.token;
    // Partially applied functions for mapping over the results
    var userLinkify = function (user) {
        user.profileUrl = searchOptions.site.item.url + "/people/" + user.username + "/profile";
        return user;
    };
    var thumbnailify = function (user) {
        if (user.thumbnail) {
            user.thumbnailUrl = getUserThumbnailUrl(portalUrl, user, token);
        }
        return user;
    };
    return portalUserSearch(searchOptions).then(function (response) {
        var _a, _b;
        var hasNext = response.nextStart > -1;
        // upgrade thumbnail url
        var results = response.results.map(thumbnailify);
        // generate the site team url if site url is provided
        if ((_b = (_a = searchOptions.site) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.url) {
            results = response.results.map(userLinkify);
        }
        return {
            hasNext: hasNext,
            total: response.total,
            results: results,
            next: getNextFunction(searchOptions, response.nextStart, response.total, searchPortalUsers),
        };
    });
}
//# sourceMappingURL=_searchUsers.js.map