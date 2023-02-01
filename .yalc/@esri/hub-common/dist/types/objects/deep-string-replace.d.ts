/**
 * Iterate over an object graph, and for all string properties, search for a string,
 * and replace it with another string
 */
export declare function deepStringReplace(obj: Record<string, any>, stringOrRegex: string | RegExp, replacement: string): Record<string, any>;