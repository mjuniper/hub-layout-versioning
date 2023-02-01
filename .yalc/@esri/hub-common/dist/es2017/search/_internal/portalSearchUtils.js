/**
 * @private
 * Convert a portal aggregation structure into the HubAggregations structure
 * @param searchResults
 * @returns
 */
export function convertPortalAggregations(searchResults) {
    var _a;
    if ((_a = searchResults.aggregations) === null || _a === void 0 ? void 0 : _a.counts) {
        return searchResults.aggregations.counts.map((entry) => {
            return {
                mode: "terms",
                field: entry.fieldName,
                values: entry.fieldValues,
            };
        });
    }
    else {
        return [];
    }
}
//# sourceMappingURL=portalSearchUtils.js.map