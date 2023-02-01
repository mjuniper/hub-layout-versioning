/**
 * Determine if a Filter is "empty"
 * @param filter
 * @returns
 */
export function isEmptyFilter(filter) {
    // if it has one property, filterType, it's empty
    return (Object.keys(filter).length === 1 && filter.hasOwnProperty("filterType"));
}
/**
 * Determine if a filterGroup is "empty"
 * @param filterGroup
 * @returns
 */
export function isEmptyFilterGroup(filterGroup) {
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
//# sourceMappingURL=filter-utils.js.map