import { IHubContent } from "../../core";
import { IHubSearchOptions, IHubSearchResponse, IHubSearchResult, IQuery } from "../types";
/**
 * @private
 * Execute item search against the Hub API
 * @param query
 * @param options
 * @returns
 */
export declare function hubSearchItems(query: IQuery, options: IHubSearchOptions): Promise<IHubSearchResponse<IHubSearchResult>>;
/**
 * Re-structure a jsonApi data entry into a flat object cast into
 * IHubContent
 * @param data
 * @returns
 */
export declare function jsonApiToHubContent(data: Record<string, any>): IHubContent;
export declare function hubContentToSearchResult(content: IHubContent): Promise<IHubSearchResult>;
