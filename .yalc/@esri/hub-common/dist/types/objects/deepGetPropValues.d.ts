/**
 * For a given property name, extract an array of the unique values of that property
 * This was designed to work with string values, so no promises about other types
 * @param obj
 */
export declare function deepGetPropValues(obj: Record<string, any>, prop: string): string[];
