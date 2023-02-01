import { __awaiter, __generator } from "tslib";
import { expandContentFilter, serializeContentFilterForPortal, convertPortalResponseToFacets, } from "./content-utils";
import { searchItems } from "@esri/arcgis-rest-portal";
import { expandApi, getNextFunction } from "./utils";
import { getItemThumbnailUrl, itemToContent, setContentSiteUrls, } from "..";
import { Logger } from "../utils";
// TODO: Remove with _searchContent
/**
 * @private
 * Search for content via the Portal or Hub API
 * @param filter
 * @param options
 */
export function _searchContent(filter, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () {
        var expanded, api, searchPromise, so_1, props;
        return __generator(this, function (_c) {
            Logger.warn("DEPRECATION: _searchContent will be removed; switch to hubSearch(...)");
            expanded = expandContentFilter(filter);
            api = expandApi(options.api || "arcgis");
            // Portal Search
            if (api.type === "arcgis") {
                so_1 = serializeContentFilterForPortal(expanded);
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
                // DEPRECATION
                if ((_a = options.aggregations) === null || _a === void 0 ? void 0 : _a.length) {
                    // tslint:disable-next-line:no-console
                    console.warn("IHubSearchOptions.aggregations is deprecated. Please use .aggFields instead.");
                    so_1.countFields = options.aggregations.join(",");
                    so_1.countSize = options.aggLimit || 10;
                }
                // Aggregations
                if ((_b = options.aggFields) === null || _b === void 0 ? void 0 : _b.length) {
                    so_1.countFields = options.aggFields.join(",");
                    so_1.countSize = options.aggLimit || 10;
                }
                searchPromise = searchPortal(so_1);
            }
            else {
                // Hub API Search
                // TODO: Implement hub api content search
                searchPromise = Promise.resolve({
                    total: 0,
                    results: [],
                    facets: [],
                    hasNext: false,
                    next: function () {
                        // tslint:disable-next-line
                        Promise.resolve(null);
                    },
                });
            }
            return [2 /*return*/, searchPromise];
        });
    });
}
/**
 * Internal portal search, which then converts items to Content, and
 * if a Site was passed, also sets urls
 *
 * @param searchOptions
 * @param site
 * @returns
 */
function searchPortal(searchOptions) {
    var _a;
    var portalUrl = ((_a = searchOptions.authentication) === null || _a === void 0 ? void 0 : _a.portal) || searchOptions.portal;
    var token;
    if (searchOptions.authentication) {
        var us = searchOptions.authentication;
        token = us.token;
    }
    var thumbnailify = function (content) {
        content.thumbnailUrl = getItemThumbnailUrl(content, portalUrl, token);
        return content;
    };
    return searchItems(searchOptions).then(function (resp) {
        var hasNext = resp.nextStart > -1;
        // convert items to IHubContent's
        var content = resp.results.map(itemToContent);
        // if we have a site, add those urls
        if (searchOptions.site) {
            content = content.map(function (entry) {
                return setContentSiteUrls(entry, searchOptions.site);
            });
        }
        // add thumbnailUrl
        content = content.map(thumbnailify);
        // convert aggregations into facets
        var facets = convertPortalResponseToFacets(resp);
        return {
            total: resp.total,
            results: content,
            facets: facets,
            hasNext: hasNext,
            next: getNextFunction(searchOptions, resp.nextStart, resp.total, searchPortal),
        };
    });
}
//# sourceMappingURL=_searchContent.js.map