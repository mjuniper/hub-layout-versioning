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
export async function _searchContent(filter, options) {
    var _a, _b;
    Logger.warn(`DEPRECATION: _searchContent will be removed; switch to hubSearch(...)`);
    // expand filter so we can serialize to either api
    const expanded = expandContentFilter(filter);
    // API
    const api = expandApi(options.api || "arcgis");
    let searchPromise;
    // Portal Search
    if (api.type === "arcgis") {
        // serialize for portal
        const so = serializeContentFilterForPortal(expanded);
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
        content.thumbnailUrl = getItemThumbnailUrl(content, portalUrl, token);
        return content;
    };
    return searchItems(searchOptions).then((resp) => {
        const hasNext = resp.nextStart > -1;
        // convert items to IHubContent's
        let content = resp.results.map(itemToContent);
        // if we have a site, add those urls
        if (searchOptions.site) {
            content = content.map((entry) => setContentSiteUrls(entry, searchOptions.site));
        }
        // add thumbnailUrl
        content = content.map(thumbnailify);
        // convert aggregations into facets
        const facets = convertPortalResponseToFacets(resp);
        return {
            total: resp.total,
            results: content,
            facets,
            hasNext,
            next: getNextFunction(searchOptions, resp.nextStart, resp.total, searchPortal),
        };
    });
}
//# sourceMappingURL=_searchContent.js.map