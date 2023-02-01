import { IHubSearchOptions, IHubSearchResponse, IHubSearchResult, IQuery } from "./types";
/**
 * Main entrypoint for searching via Hub
 *
 * Default's to search ArcGIS Portal but can delegate
 * to Hub API when it's available.
 * @param query
 * @param options
 * @returns
 */
export declare function hubSearch(query: IQuery, options: IHubSearchOptions): Promise<IHubSearchResponse<IHubSearchResult>>;
