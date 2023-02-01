import { IItem } from "@esri/arcgis-rest-types";
import { IHubSearchResult } from "../search";
import { IHubRequestOptions } from "../types";
/**
 * Fetch Page specific Enrichments
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
export declare function enrichPageSearchResult(item: IItem, include: string[], requestOptions: IHubRequestOptions): Promise<IHubSearchResult>;
