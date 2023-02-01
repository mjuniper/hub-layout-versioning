import { getProp } from "../../objects";
import { cloneObject } from "../../util";
import { isGuid } from "../../utils";
/**
 * Remove any non-guid entries from the data catalog groups array
 * @param {object} model Site Model
 * @private
 */
export function _purgeNonGuidsFromCatalog(model) {
    if (getProp(model, "item.properties.schemaVersion") >= 1.3)
        return model;
    const clone = cloneObject(model);
    const groups = getProp(clone, "data.catalog.groups") || [];
    clone.data.catalog.groups = groups.filter(isGuid);
    clone.item.properties.schemaVersion = 1.3;
    return clone;
}
//# sourceMappingURL=_purge-non-guids-from-catalog.js.map