"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBasePropertyMap = void 0;
/**
 * Returns an Array of IPropertyMap objects
 * that define the standard projection of properties from a IModel an entity interface
 * @returns
 */
function getBasePropertyMap() {
    const itemProps = [
        "access",
        "created",
        "culture",
        "description",
        "extent",
        "id",
        "itemControl",
        "modified",
        "owner",
        "tags",
        "type",
        "typeKeywords",
        "thumbnail",
        "url",
    ];
    const dataProps = ["display", "geometry", "location", "view"];
    const map = [];
    itemProps.forEach((entry) => {
        map.push({ objectKey: entry, modelKey: `item.${entry}` });
    });
    dataProps.forEach((entry) => {
        map.push({ objectKey: entry, modelKey: `data.${entry}` });
    });
    // Deeper mappings
    map.push({
        objectKey: "slug",
        modelKey: "item.properties.slug",
    });
    map.push({
        objectKey: "summary",
        modelKey: "item.snippet",
    });
    map.push({
        objectKey: "schemaVersion",
        modelKey: "item.properties.schemaVersion",
    });
    map.push({
        objectKey: "orgUrlKey",
        modelKey: "item.properties.orgUrlKey",
    });
    map.push({
        objectKey: "name",
        modelKey: "item.title",
    });
    map.push({
        objectKey: "boundary",
        modelKey: "item.properties.boundary",
    });
    return map;
}
exports.getBasePropertyMap = getBasePropertyMap;
//# sourceMappingURL=getBasePropertyMap.js.map