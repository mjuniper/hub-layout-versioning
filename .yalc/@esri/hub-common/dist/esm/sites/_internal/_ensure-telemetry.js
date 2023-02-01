import { deleteProp } from "../../items";
import { getProp, setProp } from "../../objects";
import { cloneObject } from "../../util";
/**
 * Add telemetry config object
 * @private
 * @param {object} model Site Model
 * @returns {object}
 */
export function _ensureTelemetry(model) {
    if (getProp(model, "item.properties.schemaVersion") >= 1.4)
        return model;
    const clone = cloneObject(model);
    const gacode = getProp(clone, "data.values.gacode");
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
    deleteProp(clone, "data.values.gacode");
    setProp("item.properties.schemaVersion", 1.4, clone);
    return clone;
}
//# sourceMappingURL=_ensure-telemetry.js.map