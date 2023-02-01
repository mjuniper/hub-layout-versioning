import { getProp } from "..";
/**
 * Convert the original site catalog structure into a formal ICatalog
 * @param original
 */
export function convertCatalog(original) {
    var filterGroup = {
        filterType: "item",
        operation: "OR",
        filters: [],
    };
    var groups = getProp(original, "groups");
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
    var catalog = {
        title: "Default Catalog",
        scope: [filterGroup],
        collections: [],
    };
    return catalog;
}
//# sourceMappingURL=convertCatalog.js.map