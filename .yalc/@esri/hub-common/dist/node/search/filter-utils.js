"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyFilterGroup = exports.isEmptyFilter = void 0;
/**
 * Determine if a Filter is "empty"
 * @param filter
 * @returns
 */
function isEmptyFilter(filter) {
    // if it has one property, filterType, it's empty
    return (Object.keys(filter).length === 1 && filter.hasOwnProperty("filterType"));
}
exports.isEmptyFilter = isEmptyFilter;
/**
 * Determine if a filterGroup is "empty"
 * @param filterGroup
 * @returns
 */
function isEmptyFilterGroup(filterGroup) {
    // if filters array is empty
    if (filterGroup.filters.length === 0) {
        return true;
    }
    else {
        // if all filters are empty
        const result = filterGroup.filters.reduce((acc, entry) => {
            if (acc) {
                acc = isEmptyFilter(entry);
            }
            return acc;
        }, true);
        return result;
    }
}
exports.isEmptyFilterGroup = isEmptyFilterGroup;
//# sourceMappingURL=filter-utils.js.map