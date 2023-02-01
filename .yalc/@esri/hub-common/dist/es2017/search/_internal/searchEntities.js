import { searchItems } from "@esri/arcgis-rest-portal";
import { expandApi, getNextFunction } from "../utils";
import { serializeQueryForPortal } from "../serializeQueryForPortal";
import { convertPortalAggregations } from "./portalSearchUtils";
/**
 * @private
 * Execute a search and convert to a specific entity
 * @param query
 * @param convertFn
 * @param options
 * @returns
 */
export function searchEntities(query, convertFn, options) {
    var _a;
    // serialize query to searchOptions
    const searchOptions = serializeQueryForPortal(query);
    // Aggregations
    if ((_a = options.aggFields) === null || _a === void 0 ? void 0 : _a.length) {
        searchOptions.countFields = options.aggFields.join(",");
        searchOptions.countSize = options.aggLimit || 10;
    }
    // properties to copy from IHubSearchOptions to the ISearchOptions
    const props = [
        "num",
        "sortField",
        "sortOrder",
        "start",
        "requestOptions",
    ];
    // Include "start" here
    // copy the props over
    props.forEach((prop) => {
        if (options.hasOwnProperty(prop)) {
            searchOptions[prop] = options[prop];
        }
    });
    // create the entitySearchFn
    const searchFn = createEntitySearchFn(convertFn);
    // Add ArcGIS API
    if (options.api && !options.authentication) {
        const expandedApi = expandApi(options.api);
        searchOptions.portal = expandedApi.url;
    }
    return searchFn(searchOptions);
}
/**
 * @private
 * @param convertFn
 * @returns
 */
export function createEntitySearchFn(convertFn) {
    // Return a function that does the search, with a closure over the
    // conversion function. Naming this function is important as it's
    // referenced in the `next` section below
    return async function executeSearch(searchOptions) {
        // execute the search against portal api
        const response = await searchItems(searchOptions);
        // run the conversion function
        const entities = await Promise.all(response.results.map((itm) => {
            return convertFn(itm, searchOptions);
        }));
        // convert portal  aggregations into hub aggregations
        const aggregations = convertPortalAggregations(response);
        return {
            total: response.total,
            results: entities,
            aggregations,
            hasNext: response.nextStart > -1,
            next: getNextFunction(searchOptions, response.nextStart, response.total, executeSearch),
        };
    };
}
//# sourceMappingURL=searchEntities.js.map