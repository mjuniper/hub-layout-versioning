"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._searchGroups = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const _1 = require(".");
const group_utils_1 = require("./group-utils");
const __1 = require("..");
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
async function _searchGroups(filter, options) {
    __1.Logger.warn(`DEPRECATION: _searchGroups will be removed; switch to hubSearch(...)`);
    // expand filter so we can serialize to either api
    const expanded = group_utils_1.expandGroupFilter(filter);
    // API
    const api = _1.expandApi(options.api || "arcgis");
    if (api.type === "arcgis") {
        const so = group_utils_1.serializeGroupFilterForPortal(expanded);
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
                so[prop] = options[prop];
            }
        });
        // If we don't have auth, ensure we have .portal
        if (!so.authentication) {
            so.portal = `${api.url}/sharing/rest`;
        }
        return searchPortalGroups(so);
    }
    else {
        throw new Error("_searchGroups is not implemented for non-arcgis apis");
    }
}
exports._searchGroups = _searchGroups;
/**
 * Internal function that searches for groups using the ArcGIS Portal API
 * @param searchOptions
 * @returns
 */
function searchPortalGroups(searchOptions) {
    var _a;
    const teamLinkify = (group) => {
        group.siteTeamUrl = `${searchOptions.site.item.url}/teams/${group.id}/about`;
        return group;
    };
    const portalUrl = ((_a = searchOptions.authentication) === null || _a === void 0 ? void 0 : _a.portal) || searchOptions.portal;
    let token;
    if (searchOptions.authentication) {
        const us = searchOptions.authentication;
        token = us.token;
    }
    const thumbnailify = (group) => {
        group.thumbnailUrl = __1.getGroupThumbnailUrl(portalUrl, group, token);
        return group;
    };
    // execute the search
    return arcgis_rest_portal_1.searchGroups(searchOptions).then((response) => {
        var _a, _b;
        const hasNext = response.nextStart > -1;
        // upgrade thumbnail url
        let results = response.results.map(thumbnailify);
        // generate the site team url if site url is provided
        if ((_b = (_a = searchOptions.site) === null || _a === void 0 ? void 0 : _a.item) === null || _b === void 0 ? void 0 : _b.url) {
            results = response.results.map(teamLinkify);
        }
        return {
            hasNext,
            total: response.total,
            results,
            next: _1.getNextFunction(searchOptions, response.nextStart, response.total, searchPortalGroups),
        };
    });
}
//# sourceMappingURL=_searchGroups.js.map