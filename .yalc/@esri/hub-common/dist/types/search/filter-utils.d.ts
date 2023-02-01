import { Filter, IFilterGroup, FilterType } from "./types";
/**
 * Determine if a Filter is "empty"
 * @param filter
 * @returns
 */
export declare function isEmptyFilter(filter: Filter<FilterType>): boolean;
/**
 * Determine if a filterGroup is "empty"
 * @param filterGroup
 * @returns
 */
export declare function isEmptyFilterGroup(filterGroup: IFilterGroup<FilterType>): boolean;
