import { deepGetPropValues } from "../../../objects/deepGetPropValues";
import { unique } from "../../../util";
/**
 * Get all the property names from a UI schema.
 *
 * Used to subset a json schema to only those properties used in a UI Schema
 * @param uiSchema
 * @returns
 */
export function getUiSchemaProps(uiSchema) {
    return deepGetPropValues(uiSchema, "scope")
        .map((scope) => {
        return scope.split("/")[2];
    })
        .filter(unique);
}
//# sourceMappingURL=getUiSchemaProps.js.map