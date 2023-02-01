import { cloneObject } from "../../../util";
/**
 * Subset a json schema to only those properties specified.
 * @param schema
 * @param props
 * @returns
 */
export function subsetSchema(schema, props) {
    const subset = cloneObject(schema);
    Object.keys(subset.properties).forEach((key) => {
        if (props.indexOf(key) === -1) {
            delete subset.properties[key];
        }
    });
    return subset;
}
//# sourceMappingURL=subsetSchema.js.map