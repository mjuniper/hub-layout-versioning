import { IItem } from "@esri/arcgis-rest-portal";
import { IModel } from "../types";
import { IHubContent } from "../core";
import { DatasetResource } from "./types";
export * from "./compose";
export * from "./get-family";
export * from "./slugs";
export * from "./fetch";
export * from "./types";
export * from "./HubContent";
/**
 * ```js
 * import { getCategory } from "@esri/hub-common";
 * //
 * getCategory('Feature Layer')
 * > 'dataset'
 * ```
 * **DEPRECATED: Use getFamily() instead**
 * returns the Hub category for a given item type
 * @param itemType The ArcGIS [item type](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types.htm).
 * @returns the category of a given item type.
 */
export declare function getCategory(itemType?: string): string;
/**
 * ```js
 * import { getTypes } from "@esri/hub-common";
 * //
 * getTypes('site')
 * > [ 'hub site application' ]
 * ```
 * To do.
 * @param category The ArcGIS Hub category.
 * @returns all the item types for the given category.
 *
 */
export declare function getTypes(category?: string): string[];
/**
 * ```js
 * import { getTypeCategories } from "@esri/hub-common";
 * //
 * getTypeCategories(item)
 * > [ 'Hub Site Application' ]
 * ```
 * **DEPRECATED: getTypeCategories will be removed at the next breaking version**
 * @param item Item object.
 * @returns typeCategory of the input item.
 *
 */
export declare function getTypeCategories(item?: any): string[];
/**
 * ```js
 * import { getContentIdentifier } from "@esri/hub-common";
 * //
 * getContentIdentifier(content, site)
 * > 'f12hhjk32' // id
 * // OR
 * > 'content-slug' // human-readable slug
 * ```
 * Returns the preferred identifier for a piece of content (determined by content type):
 * - Content from the 'template' and 'feedback' families return the standard id field
 * - Pages that are linked to the site parameter will return the slug defined by the site. Otherwise, the page id will be returned
 * - All other content will return the highest available item in the following hierarchy:
 *   1. slug - includes org prefix if the site parameter is a portal or has an orgKey different from the slug prefix
 *   2. hubId
 *   3. id
 * @param content The IHubContent item
 * @param site The site to compare content against
 * @returns the preferred id for the given content.
 */
export declare function getContentIdentifier(content: IHubContent, site?: IModel): string;
/**
 * Convert a Portal item to Hub content
 *
 * @param item Portal Item
 * @returns Hub content
 * @export
 */
export declare function itemToContent(item: IItem): IHubContent;
/**
 * Convert a Hub API dataset resource to Hub Content
 *
 * @param {DatasetResource} Dataset resource
 * @returns {IHubContent} Hub content object
 * @export
 */
export declare function datasetToContent(dataset: DatasetResource): IHubContent;
/**
 * Convert a Hub API dataset resource to a portal item
 *
 * @param {DatasetResource} Dataset resource
 * @returns {IItem} portal item
 * @export
 */
export declare function datasetToItem(dataset: DatasetResource): IItem;
/**
 * returns a new content that has the specified type and
 * and updated related properties like, family, etc
 * @param content orignal content
 * @param type new type
 * @returns new content
 */
export declare const setContentType: (content: IHubContent, type: string) => IHubContent;
/**
 * Compute the content type label
 * @param contentType
 * @param isProxied
 * @returns content type label
 */
export declare const getContentTypeLabel: (contentType: string, isProxied: boolean) => string;
