import { getUiSchemaProps } from "./getUiSchemaProps";
import { subsetSchema } from "./subsetSchema";
/**
 * Subset a json schema to only those properties needed by the uiSchema
 * @param schema
 * @param uiSchema
 * @returns
 */
export function filterSchemaToUiSchema(schema, uiSchema) {
    const propsToKeep = getUiSchemaProps(uiSchema);
    schema = subsetSchema(schema, propsToKeep);
    return schema;
}
//# sourceMappingURL=filterSchemaToUiSchema.js.map