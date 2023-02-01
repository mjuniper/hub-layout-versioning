"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertCatalog = void 0;
const __1 = require("..");
/**
 * Convert the original site catalog structure into a formal ICatalog
 * @param original
 */
function convertCatalog(original) {
    const filterGroup = {
        filterType: "item",
        operation: "OR",
        filters: [],
    };
    const groups = __1.getProp(original, "groups");
    if (Array.isArray(groups) && groups.length) {
        filterGroup.filters.push({
            filterType: "item",
            group: groups,
        });
    }
    else if (typeof groups === "string") {
        filterGroup.filters.push({
            filterType: "item",
            group: [groups],
        });
    }
    const catalog = {
        title: "Default Catalog",
        scope: [filterGroup],
        collections: [],
    };
    return catalog;
}
exports.convertCatalog = convertCatalog;
//# sourceMappingURL=convertCatalog.js.map