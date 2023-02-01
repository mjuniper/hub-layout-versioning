import { __awaiter, __generator } from "tslib";
import { searchGroups as portalGroupSearch } from "@esri/arcgis-rest-portal";
import { expandApi, getNextFunction } from ".";
import { expandGroupFilter, serializeGroupFilterForPortal, } from "./group-utils";
import { getGroupThumbnailUrl, Logger } from "..";
// TODO: Remove with _searchContent
/**
 * @private
 * Search Groups using Filter<"group">
 *
 * Currently just returns ISearchResult<IGroup>
 * @param filter
 * @param options
 * @returns
 */
export function _searchGroups(filter, options) {
    return __awaiter(this, void 0, void 0, function () {
        var expanded, api, so_1, props;
        return __generator(this, function (_a) {
            Logger.warn("DEPRECATION: _searchGroups will be removed; switch to hubSearch(...)");
            expanded = expandGroupFilter(filter);
            api = expandApi(options.api || "arcgis");
            if (api.type === "arcgis") {
                so_1 = serializeGroupFilterForPortal(expanded);
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
                        so_1[prop] = options[prop];
                    }
                });
                // If we don't have auth, ensure we have .portal
                if (!so_1.authentication) {
                    so_1.portal = api.url + "/sharing/rest";
                }
                return [2 /*return*/, searchPortalGroups(so_1)];
            }
            else {
                throw new Error("_searchGroups is not implemented for non-arcgis apis");
            }
            return [2 /*return*/];
        });
    });
}
/**
 * Internal function that searches for groups using the ArcGIS Portal API
 * @param searchOptions
 * @returns
 */
function searchPortalGroups(searchOptions) {
    var _a;
    var teamLinkify = function (group) {
        group.siteTeamUrl = searchOptions.site.item.url + "/teams/" + group.id + "/about";
        return group;
    };
    var portalUrl = ((_a = searchOptions.authentication) === null || _a === void 0 ? void 0 : _a.portal) || searchOptions.portal;
    var token;
    if (searchOptions.authentication) {
        var us = searchOptions.authentication;
        token = us.token;
    }
    var thumbnailify = function (group) {
        group.thumbnailUrl = getGroupThumbnailUrl(portalUrl, group, token);
        return group;
    };
    // execute the search
    return portalGroupSearch(searchOptions).then(function (response) {
        var _a, _b;
        var hasNext = response.nextStart > -1;
        // upgrade thumbnail url
        var results = response.results.map(thumbnailify);
        // generate the site team url if site url is provided
        if ((_b = (_a = searchOptions.site) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.url) {
            results = response.results.map(teamLinkify);
        }
        return {
            hasNext: hasNext,
            total: response.total,
            results: results,
            next: getNextFunction(searchOptions, response.nextStart, response.total, searchPortalGroups),
        };
    });
}
//# sourceMappingURL=_searchGroups.js.map