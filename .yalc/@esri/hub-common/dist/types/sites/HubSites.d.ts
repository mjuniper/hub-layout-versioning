import { IItem } from "@esri/arcgis-rest-portal";
import { IHubRequestOptions, IHubSearchResult, IHubSite, IModel } from "../index";
import { IRequestOptions } from "@esri/arcgis-rest-request";
export declare const HUB_SITE_ITEM_TYPE = "Hub Site Application";
export declare const ENTERPRISE_SITE_ITEM_TYPE = "Site Application";
/**
 * Create a new Hub Site
 *
 * Minimum properties are `name` and `org`
 * @param partialSite
 * @param requestOptions
 */
export declare function createSite(partialSite: Partial<IHubSite>, requestOptions: IHubRequestOptions): Promise<IHubSite>;
/**
 * Update a Hub Site
 *
 * This checks for and applies domain changes
 * @param site
 * @param requestOptions
 * @returns
 */
export declare function updateSite(site: IHubSite, requestOptions: IHubRequestOptions): Promise<IHubSite>;
/**
 * @private
 * Remove a Hub Site
 *
 * This simply removes the Site item, and it's associated domain records.
 * This does not remove any Teams/Groups or content associated with the
 * Site
 * @param id
 * @param requestOptions
 * @returns
 */
export declare function destroySite(id: string, requestOptions: IHubRequestOptions): Promise<void>;
/**
 * Remove a Hub Site
 *
 * This simply removes the Site item, and it's associated domain records.
 * This does not remove any Teams/Groups or content associated with the
 * Site
 * @param id
 * @param requestOptions
 * @returns
 */
export declare function deleteSite(id: string, requestOptions: IHubRequestOptions): Promise<void>;
/**
 * Returns site model given various kinds of identifier
 *
 * @param identifier - a site item ID, site hostname, enterprise site slug, or full site URL
 * @param requestOptions
 * @private // remove when we remove existing fetchSite function
 */
export declare function fetchSite(identifier: string, requestOptions: IHubRequestOptions): Promise<IHubSite>;
/**
 * Convert an IModel for a Hub Site Item into an IHubSite
 * @param model
 * @param requestOptions
 * @returns
 */
export declare function convertModelToSite(model: IModel, requestOptions: IRequestOptions): IHubSite;
/**
 * Convert a Hub Site Application item into a Hub Site, fetching any
 * additional information that may be required
 * @param item
 * @param auth
 * @returns
 */
export declare function convertItemToSite(item: IItem, requestOptions: IRequestOptions): Promise<IHubSite>;
/**
 * Fetch Site specific enrichments
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
export declare function enrichSiteSearchResult(item: IItem, include: string[], requestOptions: IHubRequestOptions): Promise<IHubSearchResult>;
