"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._ensureTelemetry = void 0;
const items_1 = require("../../items");
const objects_1 = require("../../objects");
const util_1 = require("../../util");
/**
 * Add telemetry config object
 * @private
 * @param {object} model Site Model
 * @returns {object}
 */
function _ensureTelemetry(model) {
    if (objects_1.getProp(model, "item.properties.schemaVersion") >= 1.4)
        return model;
    const clone = util_1.cloneObject(model);
    const gacode = objects_1.getProp(clone, "data.values.gacode");
    clone.data.values.telemetry = {
        consentNotice: {
            isTheme: true,
            consentText: "",
            policyURL: "",
        },
        customAnalytics: {
            ga: {
                customerTracker: {
                    enabled: Boolean(gacode),
                    id: gacode,
                },
            },
        },
    };
    items_1.deleteProp(clone, "data.values.gacode");
    objects_1.setProp("item.properties.schemaVersion", 1.4, clone);
    return clone;
}
exports._ensureTelemetry = _ensureTelemetry;
//# sourceMappingURL=_ensure-telemetry.js.map