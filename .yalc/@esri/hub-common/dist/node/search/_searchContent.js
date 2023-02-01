"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._searchContent = void 0;
const content_utils_1 = require("./content-utils");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const utils_1 = require("./utils");
const __1 = require("..");
const utils_2 = require("../utils");
// TODO: Remove with _searchContent
/**
 * @private
 * Search for content via the Portal or Hub API
 * @param filter
 * @param options
 */
async function _searchContent(filter, options) {
    var _a, _b;
    utils_2.Logger.warn(`DEPRECATION: _searchContent will be removed; switch to hubSearch(...)`);
    // expand filter so we can serialize to either api
    const expanded = content_utils_1.expandContentFilter(filter);
    // API
    const api = utils_1.expandApi(options.api || "arcgis");
    let searchPromise;
    // Portal Search
    if (api.type === "arcgis") {
        // serialize for portal
        const so = content_utils_1.serializeContentFilterForPortal(expanded);
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
        // DEPRECATION
        if ((_a = options.aggregations) === null || _a === void 0 ? void 0 : _a.length) {
            // tslint:disable-next-line:no-console
            console.warn(`IHubSearchOptions.aggregations is deprecated. Please use .aggFields instead.`);
            so.countFields = options.aggregations.join(",");
            so.countSize = options.aggLimit || 10;
        }
        // Aggregations
        if ((_b = options.aggFields) === null || _b === void 0 ? void 0 : _b.length) {
            so.countFields = options.aggFields.join(",");
            so.countSize = options.aggLimit || 10;
        }
        searchPromise = searchPortal(so);
    }
    else {
        // Hub API Search
        // TODO: Implement hub api content search
        searchPromise = Promise.resolve({
            total: 0,
            results: [],
            facets: [],
            hasNext: false,
            next: () => {
                // tslint:disable-next-line
                Promise.resolve(null);
            },
        });
    }
    return searchPromise;
}
exports._searchContent = _searchContent;
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
    const portalUrl = ((_a = searchOptions.authentication) === null || _a === void 0 ? void 0 : _a.portal) || searchOptions.portal;
    let token;
    if (searchOptions.authentication) {
        const us = searchOptions.authentication;
        token = us.token;
    }
    const thumbnailify = (content) => {
        content.thumbnailUrl = __1.getItemThumbnailUrl(content, portalUrl, token);
        return content;
    };
    return arcgis_rest_portal_1.searchItems(searchOptions).then((resp) => {
        const hasNext = resp.nextStart > -1;
        // convert items to IHubContent's
        let content = resp.results.map(__1.itemToContent);
        // if we have a site, add those urls
        if (searchOptions.site) {
            content = content.map((entry) => __1.setContentSiteUrls(entry, searchOptions.site));
        }
        // add thumbnailUrl
        content = content.map(thumbnailify);
        // convert aggregations into facets
        const facets = content_utils_1.convertPortalResponseToFacets(resp);
        return {
            total: resp.total,
            results: content,
            facets,
            hasNext,
            next: utils_1.getNextFunction(searchOptions, resp.nextStart, resp.total, searchPortal),
        };
    });
}
//# sourceMappingURL=_searchContent.js.map