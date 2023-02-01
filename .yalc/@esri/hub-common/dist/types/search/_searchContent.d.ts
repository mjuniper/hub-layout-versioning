import { Filter, IHubSearchOptions } from "./types";
import { IHubContent, ISearchResponse } from "..";
/**
 * @private
 * Search for content via the Portal or Hub API
 * @param filter
 * @param options
 */
export declare function _searchContent(filter: Filter<"content">, options: IHubSearchOptions): Promise<ISearchResponse<IHubContent>>;
