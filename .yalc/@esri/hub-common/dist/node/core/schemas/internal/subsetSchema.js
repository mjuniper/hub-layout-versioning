"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subsetSchema = void 0;
const util_1 = require("../../../util");
/**
 * Subset a json schema to only those properties specified.
 * @param schema
 * @param props
 * @returns
 */
function subsetSchema(schema, props) {
    const subset = util_1.cloneObject(schema);
    Object.keys(subset.properties).forEach((key) => {
        if (props.indexOf(key) === -1) {
            delete subset.properties[key];
        }
    });
    return subset;
}
exports.subsetSchema = subsetSchema;
//# sourceMappingURL=subsetSchema.js.map