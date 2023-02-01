"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertPortalAggregations = void 0;
/**
 * @private
 * Convert a portal aggregation structure into the HubAggregations structure
 * @param searchResults
 * @returns
 */
function convertPortalAggregations(searchResults) {
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
exports.convertPortalAggregations = convertPortalAggregations;
//# sourceMappingURL=portalSearchUtils.js.map