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
export async function _searchGroups(filter, options) {
    Logger.warn(`DEPRECATION: _searchGroups will be removed; switch to hubSearch(...)`);
    // expand filter so we can serialize to either api
    const expanded = expandGroupFilter(filter);
    // API
    const api = expandApi(options.api || "arcgis");
    if (api.type === "arcgis") {
        const so = serializeGroupFilterForPortal(expanded);
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
        group.thumbnailUrl = getGroupThumbnailUrl(portalUrl, group, token);
        return group;
    };
    // execute the search
    return portalGroupSearch(searchOptions).then((response) => {
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
            next: getNextFunction(searchOptions, response.nextStart, response.total, searchPortalGroups),
        };
    });
}
//# sourceMappingURL=_searchGroups.js.map