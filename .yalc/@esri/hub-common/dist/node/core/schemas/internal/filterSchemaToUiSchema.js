"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterSchemaToUiSchema = void 0;
const getUiSchemaProps_1 = require("./getUiSchemaProps");
const subsetSchema_1 = require("./subsetSchema");
/**
 * Subset a json schema to only those properties needed by the uiSchema
 * @param schema
 * @param uiSchema
 * @returns
 */
function filterSchemaToUiSchema(schema, uiSchema) {
    const propsToKeep = getUiSchemaProps_1.getUiSchemaProps(uiSchema);
    schema = subsetSchema_1.subsetSchema(schema, propsToKeep);
    return schema;
}
exports.filterSchemaToUiSchema = filterSchemaToUiSchema;
//# sourceMappingURL=filterSchemaToUiSchema.js.map