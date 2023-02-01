/**
 * Iterates over an array and executes an async callback for each item
 * @param array
 * @param callback
 */
export declare function asyncForEach<T>(array: T[], callback: (item: T, index: number, array: T[]) => void): Promise<void>;
