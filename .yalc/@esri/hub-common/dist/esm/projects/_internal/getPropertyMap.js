import { getBasePropertyMap } from "../../core/_internal/getBasePropertyMap";
/**
 * Returns an Array of IPropertyMap objects
 * that define the projection of properties from a IModel to an IHubProject
 * @returns
 * @private
 */
export function getPropertyMap() {
    const map = getBasePropertyMap();
    // Type specific mappings
    map.push({ objectKey: "status", modelKey: "data.status" });
    map.push({ objectKey: "catalog", modelKey: "data.catalog" });
    map.push({ objectKey: "permissions", modelKey: "data.permissions" });
    map.push({
        objectKey: "capabilities",
        modelKey: "data.settings.capabilities",
    });
    map.push({ objectKey: "contacts", modelKey: "data.contacts" });
    map.push({ objectKey: "timeline", modelKey: "data.timeline" });
    return map;
}
//# sourceMappingURL=getPropertyMap.js.map