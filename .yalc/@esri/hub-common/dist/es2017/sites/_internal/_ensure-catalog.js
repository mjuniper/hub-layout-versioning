import { getProp, cloneObject } from "../..";
/**
 * Move the data.values.groups array into the
 * data.catalog object
 * @param {Object} model Site Model
 * @private
 */
export function _ensureCatalog(model) {
    // early exit
    if (getProp(model, "item.properties.schemaVersion") >= 1.2)
        return model;
    const clone = cloneObject(model);
    const catalog = getProp(clone, "data.catalog") || {};
    if (getProp(clone, "data.values.groups")) {
        catalog.groups = cloneObject(clone.data.values.groups);
        delete clone.data.values.groups;
    }
    clone.data.catalog = catalog;
    // bump the schemaVersion
    clone.item.properties.schemaVersion = 1.2;
    return clone;
}
//# sourceMappingURL=_ensure-catalog.js.map