"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._ensureCatalog = void 0;
const objects_1 = require("../../objects");
const util_1 = require("../../util");
/**
 * Move the data.values.groups array into the
 * data.catalog object
 * @param {Object} model Site Model
 * @private
 */
function _ensureCatalog(model) {
    // early exit
    if (objects_1.getProp(model, "item.properties.schemaVersion") >= 1.2)
        return model;
    const clone = util_1.cloneObject(model);
    const catalog = objects_1.getProp(clone, "data.catalog") || {};
    if (objects_1.getProp(clone, "data.values.groups")) {
        catalog.groups = util_1.cloneObject(clone.data.values.groups);
        delete clone.data.values.groups;
    }
    clone.data.catalog = catalog;
    // bump the schemaVersion
    clone.item.properties.schemaVersion = 1.2;
    return clone;
}
exports._ensureCatalog = _ensureCatalog;
//# sourceMappingURL=_ensure-catalog.js.map