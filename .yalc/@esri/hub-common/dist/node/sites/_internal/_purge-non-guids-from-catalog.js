"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._purgeNonGuidsFromCatalog = void 0;
const objects_1 = require("../../objects");
const util_1 = require("../../util");
const utils_1 = require("../../utils");
/**
 * Remove any non-guid entries from the data catalog groups array
 * @param {object} model Site Model
 * @private
 */
function _purgeNonGuidsFromCatalog(model) {
    if (objects_1.getProp(model, "item.properties.schemaVersion") >= 1.3)
        return model;
    const clone = util_1.cloneObject(model);
    const groups = objects_1.getProp(clone, "data.catalog.groups") || [];
    clone.data.catalog.groups = groups.filter(utils_1.isGuid);
    clone.item.properties.schemaVersion = 1.3;
    return clone;
}
exports._purgeNonGuidsFromCatalog = _purgeNonGuidsFromCatalog;
//# sourceMappingURL=_purge-non-guids-from-catalog.js.map