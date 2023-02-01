"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeGroupFilterForPortal = exports.expandGroupFilter = exports.mergeGroupFilters = void 0;
const _1 = require(".");
const __1 = require("..");
// TODO: Remove with _searchContent
/**
 *
 * Merge `Filter<"group">` objects
 *
 * Useful in components which may get partial filters from a variety of
 * sub-components, which are then combined into a single filter prior
 * to executing the search.
 * @param filters
 * @returns
 */
function mergeGroupFilters(filters) {
    // TODO: Remove with _searchContent
    __1.Logger.warn(`DEPRECATION: mergeGroupFilters will be removed. Work with IFilterGroups<"group"> and hubSearch() instead`);
    // expand all the filters so all prop types are consistent
    const expanded = filters.map(expandGroupFilter);
    // now we can merge based on fields
    const dateFields = ["created", "modified"];
    const specialFields = ["filterType", "term", ...dateFields];
    // acc is initialized as Filter<group> but also needs it
    // in the function signature... for reasons?!
    const result = expanded.reduce((acc, entry) => {
        // process fields
        Object.entries(entry).forEach(([key, value]) => {
            // Note: getProp/setProp are used to get around
            // typescript issues with string indexing
            if (acc.hasOwnProperty(key)) {
                const existingValue = __1.getProp(acc, key);
                // if the key is not to a special field
                if (!specialFields.includes(key)) {
                    // treat as an IMatchOptions
                    __1.setProp(key, _1.mergeMatchOptions(existingValue, value), acc);
                }
                else if (dateFields.includes(key)) {
                    // treat as IDateRange
                    __1.setProp(key, _1.mergeDateRange(existingValue, value), acc);
                }
                else if (key === "term") {
                    // append terms
                    acc[key] = `${acc[key]} ${value}`;
                }
            }
            else {
                // Acc does not have an entry for this yet
                // so just clone it
                __1.setProp(key, __1.cloneObject(value), acc);
            }
        });
        return acc;
    }, {
        filterType: "group",
    });
    return result;
}
exports.mergeGroupFilters = mergeGroupFilters;
/**
 * Prior to serialization into the query syntax for the backing APIs, we first expand [Filters](../Filter)
 *
 * Filter's can express their intent in a very terse form, but to ensure consistent structures
 * we expand them into their more verbose form.
 *
 * i.e. `title: "Water"` expands into `title: { any: ["Water"]}`
 *
 * - Fields defined as `string | string[] | MatchOptions` will be converted to a `MatchOptions`
 * - RelativeDate fields are converted to DateRange<number>
 *
 * @param filter
 * @returns
 */
function expandGroupFilter(filter) {
    // TODO: Remove with _searchContent
    __1.Logger.warn(`DEPRECATION: expandGroupFilters will be removed. Work with IFilterGroups<"group"> and hubSearch() instead`);
    const result = {};
    const dateProps = ["created", "modified"];
    // Some properties should not get converted to MatchOptions
    const specialProps = ["term", "searchUserAccess", ...dateProps];
    // Do the conversion
    Object.entries(filter).forEach(([key, value]) => {
        // handle Matchish fields
        if (!specialProps.includes(key)) {
            // setProp side-steps typescript complaining
            __1.setProp(key, _1.valueToMatchOptions(value), result);
        }
        // Handle date fields
        if (dateProps.includes(key)) {
            const dateFieldValue = __1.cloneObject(__1.getProp(filter, key));
            if (__1.getProp(filter, `${key}.type`) === "relative-date") {
                __1.setProp(key, _1.relativeDateToDateRange(dateFieldValue), result);
            }
            else {
                __1.setProp(key, dateFieldValue, result);
            }
        }
    });
    // searchUserAccess is boolean, so we check if the prop exists
    // vs checking if the value is truthy
    if (filter.hasOwnProperty("searchUserAccess")) {
        result.searchUserAccess = filter.searchUserAccess;
    }
    if (filter.term) {
        result.term = filter.term;
    }
    return result;
}
exports.expandGroupFilter = expandGroupFilter;
/**
 * @private
 * Serialize an `IGroupFilterDefinition` into an `ISearchOptions` for use
 * with `searchGroups`
 * @param filter
 * @returns
 */
function serializeGroupFilterForPortal(filter) {
    // TODO: Remove with _searchContent
    __1.Logger.warn(`DEPRECATION: serializeGroupFilterForPortal will be removed. Work with IFilterGroups<"group"> and hubSearch() instead`);
    let result = {
        q: "",
        filter: "",
    };
    const dateProps = ["created", "modified"];
    const specialProps = ["term", "searchUserAccess", "filterType", ...dateProps];
    Object.entries(filter).forEach(([key, value]) => {
        // MatchOptions fields
        if (!specialProps.includes(key)) {
            result = _1.mergeSearchOptions(result, _1.serializeMatchOptions(key, value), "AND");
        }
        // Dates only go into q
        if (dateProps.includes(key)) {
            result = _1.mergeSearchOptions(result, _1.serializeDateRange(key, value), "AND");
        }
    });
    // searchUserAccess is also a top-level property
    if (filter.hasOwnProperty("searchUserAccess")) {
        result.searchUserAccess = filter.searchUserAccess;
    }
    // add the term
    if (filter.term) {
        result.q = `${filter.term} ${result.q}`.trim();
    }
    return result;
}
exports.serializeGroupFilterForPortal = serializeGroupFilterForPortal;
//# sourceMappingURL=group-utils.js.map