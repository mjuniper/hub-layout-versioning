import { IGroup } from "@esri/arcgis-rest-types";
import { IHubSearchResult } from "../search";
import { IHubRequestOptions } from "../types";
/**
 * Enrich a generic search result
 * @param group
 * @param includes
 * @param requestOptions
 * @returns
 */
export declare function enrichGroupSearchResult(group: IGroup, include: string[], requestOptions: IHubRequestOptions): Promise<IHubSearchResult>;
