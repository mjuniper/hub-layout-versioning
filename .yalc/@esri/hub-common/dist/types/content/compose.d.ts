import { IItem } from "@esri/arcgis-rest-portal";
import { ILayerDefinition } from "@esri/arcgis-rest-feature-layer";
import { IHubRequestOptions } from "../types";
import { IHubContentEnrichments, IHubContent } from "../core";
import { IHubExtent } from "./_fetch";
/**
 * The possible values for updateFrequency
 *
 * @enum {string}
 */
export declare enum UpdateFrequency {
    Continual = "continual",
    Daily = "daily",
    Weekly = "weekly",
    Fortnightly = "fortnightly",
    Monthly = "monthly",
    Quarterly = "quarterly",
    Biannually = "biannually",
    Annually = "annually",
    AsNeeded = "as-needed",
    Irregular = "irregular",
    NotPlanned = "not-planned",
    Unknown = "unknown",
    Semimonthly = "semimonthly"
}
/**
 * Compute the content type calcite-icon based on the content type
 * @param content type
 * @returns content type icon
 */
export declare const getContentTypeIcon: (contentType: string) => any;
/**
 * get portal URLs (home, API, data, and thumbnail) for an item
 *
 * @param item Item
 * @param requestOptions Request options
 * @returns a hash with the portal URLs
 * @export
 */
export declare const getPortalUrls: (item: IItem, requestOptions: IHubRequestOptions) => {
    portalHome: string;
    portalApi: string;
    portalData: string;
    thumbnail: string;
};
/**
 * If an item is a proxied csv, returns the url for the proxying feature layer.
 * If the item is not a proxied csv, returns undefined.
 *
 * @param item
 * @param requestOptions Hub Request Options (including whether we're in portal)
 * @returns
 */
export declare const getProxyUrl: (item: IItem, requestOptions?: IHubRequestOptions) => string;
/**
 * parse layer id from a service URL
 * @param {string} url
 * @returns {string} layer id
 */
export declare const getLayerIdFromUrl: (url: string) => string;
/**
 * Case-insensitive check if the type is "Feature Service"
 * @param {string} type - item's type
 * @returns {boolean}
 */
export declare const isFeatureService: (type: string) => boolean;
/**
 * Determines whether, given a type and typekeywords, the input is
 * a site item type or not
 * @param type - the type value on the item
 * @param typeKeywords - the typeKeywords on the item
 */
export declare function isSiteType(type: string, typeKeywords?: string[]): boolean;
/**
 * ```js
 * import { normalizeItemType } from "@esri/hub-common";
 * //
 * normalizeItemType(item)
 * > [ 'Hub Site Application' ]
 * ```
 * @param item Item object.
 * @returns type of the input item.
 *
 */
export declare function normalizeItemType(item?: any): string;
/**
 * return the layerId if we can tell that item is a single layer service
 * @param {*} item from AGO
 * @returns {string} layer id
 */
export declare const getItemLayerId: (item: IItem) => string;
/**
 * given an item, get the id to use w/ the Hub API
 * @param item
 * @returns Hub API id (hubId)
 */
export declare const getItemHubId: (item: IItem) => string;
/**
 * Splits item category strings at slashes and discards the "Categories" keyword
 *
 * ```
 * ["/Categories/Boundaries", "/Categories/Planning and cadastre/Property records", "/Categories/Structure"]
 * ```
 * Should end up being
 * ```
 * ["Boundaries", "Planning and cadastre", "Property records", "Structure"]
 * ```
 *
 * @param categories - an array of strings
 * @private
 */
export declare function parseItemCategories(categories: string[]): string[];
export interface IComposeContentOptions extends IHubContentEnrichments {
    layerId?: number;
    slug?: string;
    requestOptions?: IHubRequestOptions;
    /**
     * Either the item's extent, or the item's
     * layer or server's extent converted to a lat/lng coordinate pair
     */
    extent?: IHubExtent;
    /**
     * The appropriate summary to show for the item, coming from either
     * the item's data (for pages or initiatives) or the item's description
     */
    searchDescription?: string;
}
/**
 * get the layer object for
 * - an item that refers to a specific layer of a service
 * - a multi-layer services (if a layer id was passed in)
 * - a single layer feature service
 * @param item
 * @param layers the layers and tables returned from the service
 * @param layerId a specific id
 * @returns layer definition
 * @private
 */
export declare const getItemLayer: (item: IItem, layers: ILayerDefinition[], layerId?: number) => ILayerDefinition;
/**
 * determine if a layer is a layer view
 * @param layer
 * @returns
 * @private
 */
export declare const isLayerView: (layer: ILayerDefinition) => boolean;
/**
 * Compose a new content object out of an item, enrichments, and context
 * @param item
 * @param options any enrichments, current state (selected layerId), or context (requestOptions)
 * @returns new content object
 */
export declare const composeContent: (item: IItem, options?: IComposeContentOptions) => IHubContent;
