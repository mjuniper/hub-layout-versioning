"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUiSchemaProps = void 0;
const deepGetPropValues_1 = require("../../../objects/deepGetPropValues");
const util_1 = require("../../../util");
/**
 * Get all the property names from a UI schema.
 *
 * Used to subset a json schema to only those properties used in a UI Schema
 * @param uiSchema
 * @returns
 */
function getUiSchemaProps(uiSchema) {
    return deepGetPropValues_1.deepGetPropValues(uiSchema, "scope")
        .map((scope) => {
        return scope.split("/")[2];
    })
        .filter(util_1.unique);
}
exports.getUiSchemaProps = getUiSchemaProps;
//# sourceMappingURL=getUiSchemaProps.js.map