import { IItem } from "@esri/arcgis-rest-types";
import { IHubSearchResult } from "../search";
import { IHubRequestOptions } from "../types";
/**
 * Enrich a generic search result
 * @param item
 * @param includes
 * @param requestOptions
 * @returns
 */
export declare function enrichContentSearchResult(item: IItem, include: string[], requestOptions: IHubRequestOptions): Promise<IHubSearchResult>;
