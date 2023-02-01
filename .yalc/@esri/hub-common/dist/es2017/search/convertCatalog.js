import { getProp } from "..";
/**
 * Convert the original site catalog structure into a formal ICatalog
 * @param original
 */
export function convertCatalog(original) {
    const filterGroup = {
        filterType: "item",
        operation: "OR",
        filters: [],
    };
    const groups = getProp(original, "groups");
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
//# sourceMappingURL=convertCatalog.js.map