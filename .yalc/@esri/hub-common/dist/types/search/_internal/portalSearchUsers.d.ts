import { IHubSearchOptions, IHubSearchResponse, IHubSearchResult, IQuery } from "../types";
/**
 * @private
 * Portal Search Implementation for Users
 * @param filterGroups
 * @param options
 * @returns
 */
export declare function portalSearchUsers(query: IQuery, options: IHubSearchOptions): Promise<IHubSearchResponse<IHubSearchResult>>;
