import { IItem, ISearchOptions, ISearchResult } from "@esri/arcgis-rest-portal";
import { IContentFilter, IContentFilterDefinition, Filter } from "./types/types";
import { IFacet } from "./types/IFacet";
/**
 * @private
 * Convert portal search response to facets
 * Note: Only applicable to an item search
 * @param response
 * @returns
 */
export declare function convertPortalResponseToFacets(response: ISearchResult<IItem>, operation?: "OR" | "AND"): IFacet[];
/**
 * @private
 * Convert portal search response to facets
 * Note: Only applicable to an item search
 * @param response
 * @returns
 */
export declare function convertPortalItemResponseToFacets(response: ISearchResult<IItem>, operation?: "OR" | "AND", optionProp?: "filter" | "filters"): IFacet[];
/**
 * Merge `Filter<"content">` objects
 *
 * Useful in components which may get partial filters from a variety of
 * sub-components, which are then combined into a single filter prior
 * to executing the search.
 * @param filters
 * @returns
 */
export declare function mergeContentFilter(filters: Array<Filter<"content">>): Filter<"content">;
/**
 * Prior to serialization into the query syntax for the backing APIs, we first expand [Filters](../Filter)
 *
 * Filter's can express their intent in a very terse form, but to ensure consistent structures
 * we expand them into their more verbose form.
 *
 * i.e. `title: "Water"` expands into `title: { any: ["Water"]}`
 *
 * - "well known" type values are expanded
 *    - i.e. `type: "$storymap"` expands into two `subFilter` entries
 * - Fields defined as `string | string[] | MatchOptions` will be converted to a `MatchOptions`
 * - RelativeDate fields are converted to DateRange<number>
 *
 * @param filter
 * @returns
 */
export declare function expandContentFilter(filter: Filter<"content">): IContentFilter;
/**
 * @private
 * Expand from a well-known "type" into it's longer form
 *
 * i.e. `type: "$storymap"` expands into two subFilters entries
 *
 * @param filter
 * @returns
 */
export declare function expandTypeField(filter: Filter<"content">): Filter<"content">;
/**
 * @private
 * Convert a `ContentFilterDefinition` to a `ContentFilter`
 *
 * ContentFilter is a narrower version of ContentFilterDefinition, without
 * the union types. Using a ContentFilter makes working with the structure
 * in typescript much easier.
 *
 * @param filter
 * @returns
 */
export declare function convertContentDefinitionToFilter(filter: IContentFilterDefinition): IContentFilter;
/**
 * @private
 * Serialize a `ContentFilter` into an `ISearchOptions` for use with `searchItems`
 * @param filter
 * @returns
 */
export declare function serializeContentFilterForPortal(filter: IContentFilter): ISearchOptions;
/**
 * @private
 * Convert a ContentFilter to a SearchOptions
 *
 * @param filter
 * @returns
 */
export declare function convertContentFilterToSearchOptions(filter: IContentFilter): ISearchOptions;
