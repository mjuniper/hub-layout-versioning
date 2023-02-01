import { deepFind } from "../../../objects/deepFind";
import { cloneObject } from "../../../util";
/**
 * Apply a set of run-time configurations into the UI schema so
 * the controls can be configured for the current environment.
 * TODO: Add Example
 * @param schema
 * @param options
 * @returns
 */
export function applyUiSchemaElementOptions(schema, options = []) {
    // return a clone so we don't mutate the passed in schema
    const cloneSchema = cloneObject(schema);
    // merge the options into the uiSchema
    // hoist into applyElementOptions fn
    options.forEach((elementOptions) => {
        // find the entry in the uiSchema for the elementOptions.scope,
        // and extend the elementOptions.options into the .options property
        const elConfig = deepFind(cloneSchema, (entry) => {
            // we dont want to apply this to rules
            // Note: If this logic becomes more complex, we may need to
            // write a function that's more specific to the uiSchema
            return !(entry === null || entry === void 0 ? void 0 : entry.schema) && (entry === null || entry === void 0 ? void 0 : entry.scope) === elementOptions.scope;
        });
        if (elConfig) {
            elConfig.options = Object.assign(Object.assign({}, (elConfig.options || {})), elementOptions.options);
        }
    });
    return cloneSchema;
}
//# sourceMappingURL=applyUiSchemaElementOptions.js.map