import { searchItems } from "@esri/arcgis-rest-portal";
import { serializeQueryForPortal } from "../serializeQueryForPortal";
import { enrichPageSearchResult } from "../../pages/HubPages";
import { enrichProjectSearchResult } from "../../projects";
import { enrichSiteSearchResult } from "../../sites";
import { getNextFunction } from "../utils";
import { convertPortalAggregations } from "./portalSearchUtils";
import { expandPredicate } from "./expandPredicate";
import HubError from "../../HubError";
import { enrichContentSearchResult } from "../../content";
import { cloneObject } from "../../util";
/**
 * @private
 * Portal Search Implementation for Items
 * @param query
 * @param options
 * @returns
 */
export async function portalSearchItems(query, options) {
    var _a;
    if (!options.requestOptions) {
        throw new HubError("portalSearchItems", "options.requestOptions is required.");
    }
    // Expand well-known filterGroups
    const updatedQuery = applyWellKnownItemPredicates(query);
    // Expand the individual predicates in each filter
    updatedQuery.filters = updatedQuery.filters.map((filter) => {
        filter.predicates = filter.predicates.map(expandPredicate);
        return filter;
    });
    // Serialize the all the groups for portal
    const so = serializeQueryForPortal(updatedQuery);
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
    if (options.requestOptions.authentication) {
        so.authentication = options.requestOptions.authentication;
    }
    else {
        so.portal = options.requestOptions.portal;
    }
    // Aggregations
    if ((_a = options.aggFields) === null || _a === void 0 ? void 0 : _a.length) {
        so.countFields = options.aggFields.join(",");
        so.countSize = options.aggLimit || 10;
    }
    return searchPortal(so);
}
/**
 * Internal portal search, which then converts `IItem`s to `IHubSearchResult`s
 * handling enrichments & includes along the way
 *
 * @param searchOptions
 * @returns
 */
async function searchPortal(searchOptions) {
    // Execute portal search
    const resp = await searchItems(searchOptions);
    // create mappable fn that will handle the includes
    const fn = (item) => {
        return itemToSearchResult(item, searchOptions.includes, searchOptions.requestOptions);
    };
    // map over results
    const results = await Promise.all(resp.results.map(fn));
    // convert portal  aggregations into hub aggregations
    const aggregations = convertPortalAggregations(resp);
    // Construct the return
    return {
        total: resp.total,
        results,
        aggregations,
        hasNext: resp.nextStart > -1,
        next: getNextFunction(searchOptions, resp.nextStart, resp.total, searchPortal),
    };
}
/**
 * Convert an `IItem` to a `IHubSearchResult`
 * Fetches the enrichments, and attaches them as directed in the `include` list
 * @param item
 * @param includes
 * @param requestOptions
 * @returns
 */
async function itemToSearchResult(item, includes = [], requestOptions) {
    // based on the type, we delegate to type-specific functions
    // this allows each type to apply "default" enrichments
    let fn = enrichContentSearchResult;
    switch (item.type) {
        case "Hub Site Application":
        case "Site Application":
            fn = enrichSiteSearchResult;
            break;
        case "Hub Page":
        case "Site Page":
            fn = enrichPageSearchResult;
            break;
        case "Hub Project":
            fn = enrichProjectSearchResult;
            break;
        // handle old hub sites
        case "Web Mapping Application":
            if (item.typeKeywords.includes("hubSite")) {
                fn = enrichSiteSearchResult;
            }
            break;
    }
    return fn(item, includes, requestOptions);
}
export const WellKnownItemPredicates = {
    $application: [
        {
            type: {
                any: [
                    "Web Mapping Application",
                    "Application",
                    "Insights",
                    "Web Experience",
                ],
                not: ["Insights Theme", "Insights Model"],
            },
            typekeywords: {
                not: ["hubSite", "Story Map"],
            },
        },
        {
            type: "Web Mapping Experience",
            typekeywords: "EXB Experience",
        },
    ],
    $dashboard: [
        {
            type: {
                any: ["Dashboard"],
                not: ["Operation View"],
            },
            typekeywords: {
                not: ["Extension", "ArcGIS Operation View"],
            },
        },
    ],
    $dataset: [
        {
            type: {
                any: [
                    "Scene Service",
                    "Feature Collection",
                    "Route Layer",
                    "Layer",
                    "Explorer Layer",
                    "Tile Package",
                    "Vector Tile Package",
                    "Scene Package",
                    "Layer Package",
                    "Feature Service",
                    "Stream Service",
                    "Map Service",
                    "Vector Tile Service",
                    "Image Service",
                    "WMS",
                    "WFS",
                    "WMTS",
                    "KML",
                    "KML Collection",
                    "Globe Service",
                    "CSV",
                    "Shapefile",
                    "GeoJson",
                    "Service Definition",
                    "File Geodatabase",
                    "CAD Drawing",
                    "Relational Database Connection",
                ],
                not: ["Web Mapping Application", "Geodata Service"],
            },
        },
        {
            typekeywords: ["OGC", "Geodata Service"],
        },
    ],
    $document: [
        {
            type: [
                "PDF",
                "Microsoft Excel",
                "Microsoft Word",
                "Microsoft Powerpoint",
                "iWork Keynote",
                "iWork Pages",
                "iWork Numbers",
                "Visio Document",
                "Document Link",
            ],
        },
    ],
    $initiative: [
        {
            type: "Hub Initiative",
        },
    ],
    $experience: [
        {
            type: "Web Experience",
        },
    ],
    $feedback: [
        {
            type: "Form",
        },
    ],
    $page: [
        {
            typekeywords: "hubPage",
        },
    ],
    $site: [
        {
            type: ["Hub Site Application", "Site Application"],
        },
    ],
    $storymap: [
        {
            type: "Storymap",
        },
        {
            type: "Web Mapping Application",
            typekeywords: "Story Map",
        },
    ],
    $template: [
        {
            type: [
                "Web Mapping Application",
                "Hub Initiative",
                "Hub Initiative Template",
                "Solution",
            ],
            typekeywords: {
                any: ["hubInitiativeTemplate", "hubSolutionTemplate", "Template"],
                not: "Deployed",
            },
        },
    ],
    $webmap: [
        {
            type: {
                any: ["Web Map", "Web Scene"],
                not: "Web Mapping Application",
            },
        },
    ],
};
/**
 * @private
 * Convert a Filter Group to expand well-known type filters
 *
 * The purpose of this function is to allow for the use of short-hand
 * names for commonly used, complex queries.
 *
 * It works by looking for filters using the .type property, the value
 * of which is a key in the WellKnownItemFilters hash. If found in the
 * hash, the filters array of the active filterGroup is replaced with the
 * filters specified in the hash.
 *
 * NOTE: Any other properties specified in a filter will be removed
 *
 * Only exported to enable extensive testing
 * @param filterGroups
 */
export function applyWellKnownItemPredicates(query) {
    const queryClone = cloneObject(query);
    // iterate the filters
    queryClone.filters = queryClone.filters.map((filter) => {
        // replace predicates with well-known types
        let replacedPredicates = false;
        filter.predicates = filter.predicates.reduce((acc, predicate) => {
            // if the predicate has a well-known type
            // we replace it with the set of predicates defined
            // for the well-known type
            if (isWellKnownTypeFilter(predicate.type)) {
                const replacements = lookupTypePredicates(predicate.type);
                acc = [...acc, ...replacements];
                replacedPredicates = true;
            }
            else {
                // this predicate does not have a well-known type
                // so we just keep it
                acc.push(predicate);
            }
            return acc;
        }, []);
        if (replacedPredicates) {
            // Any filter who's predicates were replaced with
            // well-known predicates, needs to use "OR" to ensure
            // correct query logic
            filter.operation = "OR";
        }
        return filter;
    });
    return queryClone;
}
/**
 * Is the argument a well-known type "key"
 *
 * Accepts `string`, `string[]` or `IMatchOptions`
 * but only string values can possibly be keys
 * on `WellKnownItemFilters`
 * @param key
 * @returns
 */
export function isWellKnownTypeFilter(key) {
    let result = false;
    if (typeof key === "string") {
        result = key in WellKnownItemPredicates;
    }
    return result;
}
/**
 * Return the predicates for a well-known type
 * @param key
 * @returns
 */
function lookupTypePredicates(key) {
    return WellKnownItemPredicates[key];
}
//# sourceMappingURL=portalSearchItems.js.map