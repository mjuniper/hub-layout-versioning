import { IUser } from "@esri/arcgis-rest-types";
import { IHubSearchResult } from "../search";
import { IHubRequestOptions } from "../types";
/**
 * Enrich a User object
 * @param user
 * @param includes
 * @param requestOptions
 * @returns
 */
export declare function enrichUserSearchResult(user: IUser, include: string[], requestOptions: IHubRequestOptions): Promise<IHubSearchResult>;
