"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._enforceLowercaseDomains = void 0;
const objects_1 = require("../../objects");
const util_1 = require("../../util");
/**
 * Enforce lowercase domains
 * @param {Object} model Site Model
 * @private
 */
function _enforceLowercaseDomains(model) {
    // exit if this has been applied...
    if (objects_1.getProp(model, "item.properties.schemaVersion") >= 1.1)
        return model;
    const clone = util_1.cloneObject(model);
    // all the possible domain properties must be lower case
    [
        "subdomain",
        "defaultHostname",
        "internalUrl",
        "customHostname",
        "externalUrl",
    ].forEach((prop) => {
        if (clone.data.values[prop] &&
            typeof clone.data.values[prop] === "string") {
            clone.data.values[prop] = clone.data.values[prop].toLowerCase();
        }
    });
    // bump the schemaVersion
    clone.item.properties.schemaVersion = 1.1;
    return clone;
}
exports._enforceLowercaseDomains = _enforceLowercaseDomains;
//# sourceMappingURL=_enforce-lowercase-domains.js.map