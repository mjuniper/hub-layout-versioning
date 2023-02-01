"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyMap = void 0;
const getBasePropertyMap_1 = require("../../core/_internal/getBasePropertyMap");
/**
 * Returns an Array of IPropertyMap objects
 * that define the projection of properties from a IModel to an IHubProject
 * @returns
 * @private
 */
function getPropertyMap() {
    const map = getBasePropertyMap_1.getBasePropertyMap();
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
exports.getPropertyMap = getPropertyMap;
//# sourceMappingURL=getPropertyMap.js.map