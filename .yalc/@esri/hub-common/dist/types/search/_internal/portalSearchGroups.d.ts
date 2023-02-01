import { IHubSearchOptions, IHubSearchResponse, IHubSearchResult, IQuery } from "../types";
/**
 * @private
 * Portal Search Implementation for Groups
 * @param query
 * @param options
 * @returns
 */
export declare function portalSearchGroups(query: IQuery, options: IHubSearchOptions): Promise<IHubSearchResponse<IHubSearchResult>>;
