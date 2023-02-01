"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertContentFilterToSearchOptions = exports.serializeContentFilterForPortal = exports.convertContentDefinitionToFilter = exports.expandTypeField = exports.expandContentFilter = exports.mergeContentFilter = exports.convertPortalItemResponseToFacets = exports.convertPortalResponseToFacets = void 0;
const __1 = require("..");
const utils_1 = require("./utils");
// TODO: Remove with _searchContent
// TODO: Implement $dataset
const ContentFilterExpansions = {
    $apps: [
        {
            type: {
                any: [
                    "Code Sample",
                    "Web Mapping Application",
                    "Mobile Application",
                    "Application",
                    "Desktop Application Template",
                    "Desktop Application",
                    "Operation View",
                    "Dashboard",
                    "Operations Dashboard Extension",
                    "Workforce Project",
                    "Insights Workbook",
                    "Insights Page",
                    "Insights Model",
                    "Hub Page",
                    "Hub Initiative",
                    "Hub Site Application",
                    "StoryMap",
                    "Web Experience",
                    "Web Experience Template",
                    "Form",
                ],
                not: [
                    "Code Attachment",
                    "Featured Items",
                    "Symbol Set",
                    "Color Set",
                    "Windows Viewer Add In",
                    "Windows Viewer Configuration",
                    "Map Area",
                    "Indoors Map Configuration",
                ],
            },
            typekeywords: {
                not: ["MapAreaPackage", "SMX"],
            },
        },
    ],
    $storymap: [
        {
            type: "StoryMap",
        },
        {
            type: "Web Mapping Application",
            typekeywords: ["Story Map"],
        },
    ],
    $dashboard: [
        {
            type: "Dashboard",
            typekeywords: {
                any: ["Dashboard"],
                not: ["ArcGIS Operation View", "Add In", "Extension"],
            },
        },
    ],
    $dataset: [],
    $experience: [
        {
            type: {
                any: ["Web Experience"],
                not: ["Web Experience Template"],
            },
        },
    ],
    $site: [
        {
            type: ["Hub Site Application", "Site Application"],
        },
        {
            type: ["Web Mapping Application"],
            typekeywords: ["hubSite"],
        },
    ],
    $initiative: [
        {
            type: {
                any: "Hub Initiative",
                not: "Hub Initiative Template",
            },
        },
    ],
    $document: [
        {
            typekeywords: {
                any: "Document",
                not: ["MapAreaPackage", "SMX"],
            },
            type: {
                any: [
                    "Image",
                    "Layout",
                    "Desktop Style",
                    "Project Template",
                    "Report Template",
                    "Pro Report",
                    "Statistical Data Collection",
                    "360 VR Experience",
                    "netCDF",
                    "PDF",
                    "CSV",
                    "Administrative Report",
                    "Raster function template",
                ],
                not: [
                    "Image Service",
                    "Explorer Document",
                    "Explorer Map",
                    "Globe Document",
                    "Scene Document",
                    "Code Attachment",
                    "Featured Items",
                    "Symbol Set",
                    "ColorSet",
                    "Windows Viewer Add In",
                    "Windows Viewer Configuration",
                    "Map Area",
                    "Indoors Map Configuration",
                ],
            },
        },
    ],
};
/**
 * @private
 * Convert portal search response to facets
 * Note: Only applicable to an item search
 * @param response
 * @returns
 */
// TODO: Remove with _searchContent
function convertPortalResponseToFacets(response, operation = "OR") {
    // delegate to a more future-friendly version
    return convertPortalItemResponseToFacets(response, operation, "filter");
}
exports.convertPortalResponseToFacets = convertPortalResponseToFacets;
/**
 * @private
 * Convert portal search response to facets
 * Note: Only applicable to an item search
 * @param response
 * @returns
 */
function convertPortalItemResponseToFacets(response, operation = "OR", optionProp = "filters" // TODO: Remove with _searchContent and use `filters`
) {
    var _a;
    // TODO: move into portalSearchItems
    const result = [];
    if ((_a = response.aggregations) === null || _a === void 0 ? void 0 : _a.counts) {
        response.aggregations.counts.forEach((entry) => {
            const facet = {
                label: entry.fieldName,
                key: entry.fieldName,
                aggField: entry.fieldName,
                display: "multi-select",
            };
            const options = [];
            entry.fieldValues.forEach((fv) => {
                const filter = {
                    filterType: "item",
                };
                // construct the filter based on the operation
                const matchKey = operation === "OR" ? "any" : "all";
                const filterMatchOption = {};
                filterMatchOption[matchKey] = [fv.value];
                filter[entry.fieldName] = filterMatchOption;
                // construct the FacetOption
                const fo = {
                    label: `${fv.value} (${fv.count})`,
                    key: fv.value,
                    count: fv.count,
                    selected: false,
                };
                // Temporary to ensure the old fn can delegate to this
                // but we can still return the correct structure
                // TODO: Remove with _searchContent
                /* istanbul ignore next */
                if (optionProp === "filter") {
                    fo.filter = filter;
                }
                else {
                    fo.filters = [filter];
                }
                options.push(fo);
            });
            facet.options = options;
            result.push(facet);
        });
    }
    return result;
}
exports.convertPortalItemResponseToFacets = convertPortalItemResponseToFacets;
/**
 * Merge `Filter<"content">` objects
 *
 * Useful in components which may get partial filters from a variety of
 * sub-components, which are then combined into a single filter prior
 * to executing the search.
 * @param filters
 * @returns
 */
function mergeContentFilter(filters) {
    __1.Logger.warn(`DEPRECATION: mergeContentFilter will be removed and filters should not longer be merged. Work with IFilterGroups instead`);
    // expand all the filters so all prop types are consistent
    const expanded = filters.map(expandContentFilter);
    // now we can merge based on fields
    const dateFields = ["created", "modified"];
    const specialFields = ["filterType", "subFilters", "term", ...dateFields];
    const result = expanded.reduce((acc, entry) => {
        // process fields
        Object.entries(entry).forEach(([key, value]) => {
            if (acc.hasOwnProperty(key)) {
                /* istanbul ignore else */
                if (!specialFields.includes(key)) {
                    acc[key] = utils_1.mergeMatchOptions(acc[key], value);
                }
                else if (dateFields.includes(key)) {
                    acc[key] = utils_1.mergeDateRange(acc[key], value);
                }
                else if (key === "term") {
                    acc[key] = `${acc[key]} ${value}`;
                }
                else if (key === "subFilters") {
                    acc[key] = mergeSubFilters(acc[key], value);
                }
            }
            else {
                acc[key] = __1.cloneObject(value);
            }
        });
        return acc;
    }, {});
    result.filterType = "content";
    return result;
}
exports.mergeContentFilter = mergeContentFilter;
function mergeSubFilters(sf1, sf2) {
    // Simplistic implementation: we just merge the arrays
    // in the future we may try to de-dupe things as a safeguard
    return [...sf1, ...sf2];
}
/**
 * Prior to serialization into the query syntax for the backing APIs, we first expand [Filters](../Filter)
 *
 * Filter's can express their intent in a very terse form, but to ensure consistent structures
 * we expand them into their more verbose form.
 *
 * i.e. `title: "Water"` expands into `title: { any: ["Water"]}`
 *
 * - "well known" type values are expanded
 *    - i.e. `type: "$storymap"` expands into two `subFilter` entries
 * - Fields defined as `string | string[] | MatchOptions` will be converted to a `MatchOptions`
 * - RelativeDate fields are converted to DateRange<number>
 *
 * @param filter
 * @returns
 */
function expandContentFilter(filter) {
    __1.Logger.warn(`DEPRECATION: expandContentFilter will be removed. Work with IFilterGroups<"item"> instead`);
    // Expand filter.type first
    const expandedTypeFilter = expandTypeField(filter);
    // Expand subfilters
    // Guard - JS Clients could send in anything...
    if (Array.isArray(filter.subFilters)) {
        // Convert any strings into the coresponding ContentFilterDefinition
        expandedTypeFilter.subFilters = expandedTypeFilter.subFilters.reduce((acc, entry) => {
            if (typeof entry === "string") {
                // if the entry is not a key of ContentFilterExpansions
                // we just skip over it
                if (ContentFilterExpansions[entry]) {
                    acc = acc.concat(ContentFilterExpansions[entry]);
                }
            }
            else {
                acc.push(entry); // should be a ContentFilterDefinition
            }
            return acc;
        }, []);
    }
    // Convert all props into MatchOptions/DateRanges
    return convertContentDefinitionToFilter(expandedTypeFilter);
}
exports.expandContentFilter = expandContentFilter;
/**
 * @private
 * Expand from a well-known "type" into it's longer form
 *
 * i.e. `type: "$storymap"` expands into two subFilters entries
 *
 * @param filter
 * @returns
 */
function expandTypeField(filter) {
    const clone = __1.cloneObject(filter);
    // ensure subFilters is defined as an array
    clone.subFilters = clone.subFilters || [];
    if (clone.type) {
        // if .type is an Array...
        if (Array.isArray(clone.type)) {
            // remove any well-known-keys and move their expansions into subfilters
            clone.type = clone.type.reduce((acc, entry) => {
                if (isWellKnownType(entry)) {
                    // working with dynamic objects in typescript requires some assertions
                    const key = entry;
                    clone.subFilters = clone.subFilters.concat(lookupTypeFilters(key));
                }
                else {
                    acc.push(entry);
                }
                return acc;
            }, []);
        }
        else if (isWellKnownType(clone.type)) {
            const key = clone.type;
            clone.subFilters = clone.subFilters.concat(lookupTypeFilters(key));
            delete clone.type;
        }
        else {
            // Future?: implement "expansions" inside MatchOptions
            // For now, we only attempt expansions for filter.type
            // if it's a string, or for strings inside an array
            // Unclear if it's of value to allow short-cuts inside MatchOptions
        }
    }
    return clone;
}
exports.expandTypeField = expandTypeField;
/**
 * Is the argument a well-known type "key"
 *
 * Accepts `string`, `string[]` or `IMatchOptions`
 * but only string values can possibly be properties
 * on `ContentFilterExpansions`
 * @param key
 * @returns
 */
function isWellKnownType(key) {
    let result = false;
    if (typeof key === "string") {
        result = key in ContentFilterExpansions;
    }
    return result;
}
function lookupTypeFilters(key) {
    return ContentFilterExpansions[key];
}
/**
 * @private
 * Convert a `ContentFilterDefinition` to a `ContentFilter`
 *
 * ContentFilter is a narrower version of ContentFilterDefinition, without
 * the union types. Using a ContentFilter makes working with the structure
 * in typescript much easier.
 *
 * @param filter
 * @returns
 */
function convertContentDefinitionToFilter(filter) {
    // TODO: Remove with _searchContent
    __1.Logger.warn(`DEPRECATION: convertContentDefinitionToFilter will be removed. Work with IFilterGroups<"item"> instead`);
    const result = {};
    if (filter.term) {
        result.term = filter.term;
    }
    const dateProps = ["created", "modified"];
    // Some properties should not get converted to MatchOptions
    const specialProps = ["filterType", "subFilters", "term", ...dateProps];
    // Do the conversion
    Object.entries(filter).forEach(([key, value]) => {
        if (!specialProps.includes(key)) {
            result[key] = utils_1.valueToMatchOptions(value);
        }
    });
    // Special Cases
    // subFilters; Array of ContentFilterDefinitions
    if (filter.subFilters && Array.isArray(filter.subFilters)) {
        // downcast - would be nice to skip this or use some other constuct
        const sf = filter.subFilters;
        result.subFilters = sf.map(convertContentDefinitionToFilter);
    }
    // Dates; Ensure they are all DateRange<number>
    dateProps.forEach((fld) => {
        if (filter[fld]) {
            if (filter[fld].type === "relative-date") {
                result[fld] = utils_1.relativeDateToDateRange(filter[fld]);
            }
            else {
                result[fld] = __1.cloneObject(filter[fld]);
            }
        }
    });
    return result;
}
exports.convertContentDefinitionToFilter = convertContentDefinitionToFilter;
/**
 * @private
 * Serialize a `ContentFilter` into an `ISearchOptions` for use with `searchItems`
 * @param filter
 * @returns
 */
function serializeContentFilterForPortal(filter) {
    // TODO: Remove with _searchContent
    __1.Logger.warn(`DEPRECATION: serializeContentFilterForPortal will be removed. Work with IFilterGroups<"item"> and hubSearch() instead`);
    let searchOptions = convertContentFilterToSearchOptions(filter);
    if (filter.subFilters) {
        const subFilterOptions = filter.subFilters.reduce((acc, entry) => {
            // Next guard is present b/c this can be used from javascript
            // but our tests are written in typescript which prevents us
            // from hitting the else
            /* istanbul ignore else */
            if (typeof entry === "object") {
                acc = utils_1.mergeSearchOptions(acc, convertContentFilterToSearchOptions(entry), "OR");
            }
            return acc;
        }, { q: "", filter: "" });
        // merge with searchOptions using AND
        searchOptions = utils_1.mergeSearchOptions(searchOptions, subFilterOptions, "AND");
    }
    // term is always last, and pre-pended on searchOptions.q
    if (filter.term) {
        searchOptions.q = `${filter.term} ${searchOptions.q}`.trim();
    }
    return searchOptions;
}
exports.serializeContentFilterForPortal = serializeContentFilterForPortal;
/**
 * @private
 * Convert a ContentFilter to a SearchOptions
 *
 * @param filter
 * @returns
 */
function convertContentFilterToSearchOptions(filter) {
    // TODO: Remove with _searchContent
    __1.Logger.warn(`DEPRECATION: convertContentFilterToSearchOptions will be removed. Work with IFilterGroups<"item"> and hubSearch() instead`);
    let result = {
        q: "",
        filter: "",
    };
    const dateProps = ["created", "modified"];
    const specialProps = ["filterType", "subFilters", "term", ...dateProps];
    Object.entries(filter).forEach(([key, value]) => {
        // MatchOptions may go into either q or filter
        if (!specialProps.includes(key)) {
            result = utils_1.mergeSearchOptions(result, utils_1.serializeMatchOptions(key, value), "AND");
        }
        // Dates only go into q
        if (dateProps.includes(key)) {
            result = utils_1.mergeSearchOptions(result, utils_1.serializeDateRange(key, value), "AND");
        }
    });
    return result;
}
exports.convertContentFilterToSearchOptions = convertContentFilterToSearchOptions;
//# sourceMappingURL=content-utils.js.map