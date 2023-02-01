import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { IHubRequestOptions } from "../index";
import { IItem } from "@esri/arcgis-rest-portal";
import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IHubInitiative } from "../core/types";
import { IHubSearchResult } from "../search";
/**
 * @private
 * Create a new Hub Initiative item
 *
 * Minimal properties are name and orgUrlKey
 *
 * @param partialInitiative
 * @param requestOptions
 */
export declare function createInitiative(partialInitiative: Partial<IHubInitiative>, requestOptions: IUserRequestOptions): Promise<IHubInitiative>;
/**
 * @private
 * Update a Hub Initiative
 * @param initiative
 * @param requestOptions
 */
export declare function updateInitiative(initiative: IHubInitiative, requestOptions: IUserRequestOptions): Promise<IHubInitiative>;
/**
 * @private
 * Get a Hub Initiative by id or slug
 * @param identifier item id or slug
 * @param requestOptions
 */
export declare function fetchInitiative(identifier: string, requestOptions: IRequestOptions): Promise<IHubInitiative>;
/**
 * @private
 * Remove a Hub Initiative
 * @param id
 * @param requestOptions
 */
export declare function deleteInitiative(id: string, requestOptions: IUserRequestOptions): Promise<void>;
/**
 * @private
 * Convert an Hub Initiative Item into a Hub Initiative, fetching any additional
 * information that may be required
 * @param item
 * @param auth
 * @returns
 */
export declare function convertItemToInitiative(item: IItem, requestOptions: IRequestOptions): Promise<IHubInitiative>;
/**
 * @private
 * Fetch Initiative specific enrichments
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
export declare function enrichInitiativeSearchResult(item: IItem, include: string[], requestOptions: IHubRequestOptions): Promise<IHubSearchResult>;
