import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IItem } from "@esri/arcgis-rest-portal";
import { IHubProject } from "../core";
import { IHubSearchResult } from "../search";
import { IHubRequestOptions } from "../types";
/**
 * @private
 * Get a Hub Project by id or slug
 * @param identifier item id or slug
 * @param requestOptions
 */
export declare function fetchProject(identifier: string, requestOptions: IRequestOptions): Promise<IHubProject>;
/**
 * @private
 * Convert an Hub Project Item into a Hub Project, fetching any additional
 * information that may be required
 * @param item
 * @param auth
 * @returns
 */
export declare function convertItemToProject(item: IItem, requestOptions: IRequestOptions): Promise<IHubProject>;
/**
 * @private
 * Fetch project specific enrichments
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
export declare function enrichProjectSearchResult(item: IItem, include: string[], requestOptions: IHubRequestOptions): Promise<IHubSearchResult>;
