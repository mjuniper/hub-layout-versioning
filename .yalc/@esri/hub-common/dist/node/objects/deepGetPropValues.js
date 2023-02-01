"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepGetPropValues = void 0;
const util_1 = require("../util");
const _deep_map_values_1 = require("./_deep-map-values");
/**
 * For a given property name, extract an array of the unique values of that property
 * This was designed to work with string values, so no promises about other types
 * @param obj
 */
function deepGetPropValues(obj, prop) {
    const props = [];
    _deep_map_values_1._deepMapValues(obj, (value, path) => {
        // if the path ends with the property we're looking for then add it to the list
        if (path.split(".").pop() === prop) {
            props.push(value);
        }
        return value;
    });
    return props.filter(util_1.unique);
}
exports.deepGetPropValues = deepGetPropValues;
//# sourceMappingURL=deepGetPropValues.js.map