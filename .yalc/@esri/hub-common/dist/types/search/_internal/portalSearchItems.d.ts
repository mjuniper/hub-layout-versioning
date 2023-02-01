import { IHubSearchOptions, IHubSearchResponse, IHubSearchResult, IMatchOptions, IPredicate, IQuery } from "../types";
/**
 * @private
 * Portal Search Implementation for Items
 * @param query
 * @param options
 * @returns
 */
export declare function portalSearchItems(query: IQuery, options: IHubSearchOptions): Promise<IHubSearchResponse<IHubSearchResult>>;
interface IWellKnownItemPredicates {
    $application: IPredicate[];
    $feedback: IPredicate[];
    $dashboard: IPredicate[];
    $dataset: IPredicate[];
    $experience: IPredicate[];
    $site: IPredicate[];
    $storymap: IPredicate[];
    $initiative: IPredicate[];
    $document: IPredicate[];
    $webmap: IPredicate[];
    $template: IPredicate[];
    $page: IPredicate[];
}
export declare const WellKnownItemPredicates: IWellKnownItemPredicates;
/**
 * @private
 * Convert a Filter Group to expand well-known type filters
 *
 * The purpose of this function is to allow for the use of short-hand
 * names for commonly used, complex queries.
 *
 * It works by looking for filters using the .type property, the value
 * of which is a key in the WellKnownItemFilters hash. If found in the
 * hash, the filters array of the active filterGroup is replaced with the
 * filters specified in the hash.
 *
 * NOTE: Any other properties specified in a filter will be removed
 *
 * Only exported to enable extensive testing
 * @param filterGroups
 */
export declare function applyWellKnownItemPredicates(query: IQuery): IQuery;
/**
 * Is the argument a well-known type "key"
 *
 * Accepts `string`, `string[]` or `IMatchOptions`
 * but only string values can possibly be keys
 * on `WellKnownItemFilters`
 * @param key
 * @returns
 */
export declare function isWellKnownTypeFilter(key: string | string[] | IMatchOptions): boolean;
export {};
