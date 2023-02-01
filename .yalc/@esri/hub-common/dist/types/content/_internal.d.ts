import { IItem, IPortal } from "@esri/arcgis-rest-portal";
import { ILayerDefinition, ISpatialReference, IUser } from "@esri/arcgis-rest-types";
import { IHubContent, PublisherSource } from "../core";
import { IHubGeography, GeographyProvenance, IHubRequestOptions } from "../types";
import { IHubAdditionalResource } from "../core/types/IHubAdditionalResource";
/**
 * Create a new content with updated boundary properties
 * @param content original content
 * @param boundary boundary provenance
 * @returns
 * @private
 */
export declare const setContentBoundary: (content: IHubContent, boundary: GeographyProvenance) => {
    boundary: IHubGeography;
    item: {
        properties: any;
        id: string;
        owner: string;
        tags: string[];
        created: number;
        modified: number;
        numViews: number;
        size: number;
        protected?: boolean;
        title: string;
        type: string;
        typeKeywords?: string[];
        description?: string;
        snippet?: string;
        documentation?: string;
        extent?: number[][];
        categories?: string[];
        spatialReference?: ISpatialReference;
        culture?: string;
        url?: string;
    };
    slug?: string;
    hubId?: string;
    identifier: string;
    permissions: {
        visibility: "private" | "public" | "org";
        control?: import("../types").AccessControl;
        groups?: import("@esri/arcgis-rest-portal").IGroup[];
    };
    family?: import("../types").HubFamily;
    categories?: string[];
    isDownloadable: boolean;
    structuredLicense?: import("..").IStructuredLicense;
    publishedDate: Date;
    publishedDateSource?: string;
    updateFrequency?: string;
    publisher?: {
        name?: string;
        username?: string;
        nameSource: PublisherSource;
        organization?: string;
        orgId?: string;
        organizationSource: PublisherSource;
        isExternal: boolean;
    };
    portalHomeUrl?: string;
    portalApiUrl?: string;
    portalDataUrl?: string;
    actionLinks?: import("../types").IActionLink[];
    hubActions?: object;
    layer?: Partial<ILayerDefinition>;
    isProxied?: boolean;
    additionalResources?: IHubAdditionalResource[];
    viewDefinition?: {
        definitionExpression?: string;
    };
    source?: string;
    summary?: string;
    view?: import("../core").IWithViewSettings;
    owner: string;
    id: string;
    itemControl: string;
    access?: import("../core").AccessLevel;
    url?: string;
    capabilities?: import("..").EntityCapabilities;
    description?: string;
    name: string;
    tags: string[];
    type: string;
    culture?: string;
    extent?: number[][];
    thumbnailUrl?: string;
    thumbnail?: string;
    typeKeywords?: string[];
    canEdit: boolean;
    canDelete: boolean;
    createdDate: Date;
    createdDateSource: string;
    updatedDate: Date;
    updatedDateSource: string;
    statistics?: any;
    data?: {
        [propName: string]: any;
    };
    metadata?: any;
    groupIds?: string[];
    ownerUser?: IUser;
    org?: Partial<IPortal>;
    errors?: import("../types").IEnrichmentErrorInfo[];
    server?: Partial<import("@esri/arcgis-rest-feature-layer").IFeatureServiceDefinition>;
    layers?: Partial<ILayerDefinition>[];
    recordCount?: number;
    created: number;
    modified: number;
    numViews: number;
    size: number;
    protected?: boolean;
    title: string;
    snippet?: string;
    documentation?: string;
    spatialReference?: ISpatialReference;
    properties?: any;
};
/**
 * get a content's boundary based on the item's boundary property
 * @param item
 * @returns
 * @private
 */
export declare const getContentBoundary: (item: IItem) => IHubGeography;
/**
 * Determine if we are in an enterprise environment
 * NOTE: when no request options are provided, the underlying
 * request functions assume that we are online in production
 * so we only want use enterprise logic if isPortal is explicitly defined
 * @param requestOptions
 * @returns
 * @private
 */
export declare const isPortal: (requestOptions?: IHubRequestOptions) => boolean;
/**
 * Determine if we can use the Hub API for an item, i.e.
 * the item is public and we are not in an enterprise environment
 * @param item
 * @param requestOptions
 * @returns
 * @private
 */
export declare const canUseHubApiForItem: (item: IItem, requestOptions?: IHubRequestOptions) => boolean;
/**
 * Returns whether or not an item is a proxied csv
 *
 * @param item
 * @param requestOptions Hub Request Options (including whether we're in portal)
 * @returns
 * @private
 */
export declare const isProxiedCSV: (item: IItem, requestOptions?: IHubRequestOptions) => boolean;
/**
 * Get the relative URL to use for the item in a hub site
 * @param type
 * @param identifier
 * @param typeKeywords
 * @returns
 * @private
 */
export declare const getHubRelativeUrl: (type: string, identifier: string, typeKeywords?: string[]) => string;
/**
 * Is this content type a page?
 * @param type
 * @returns
 * @private
 */
export declare const isPageType: (type: string, typeKeywords?: string[]) => boolean;
/**
 * well known paths to formal metadata values
 */
export interface IMetadataPaths {
    updateFrequency: string;
    metadataUpdateFrequency: string;
    metadataUpdatedDate: string;
    reviseDate: string;
    pubDate: string;
    createDate: string;
}
/**
 * Get the path to a well known metadata value
 * @param identifier identifier for well known metadata value
 * @returns path to be used like get(metadata, path)
 * @private
 */
export declare function getMetadataPath(identifier: keyof IMetadataPaths): string;
/**
 * Get a well known value from metadata
 * @param metadata
 * @param identifier identifier for well known metadata value
 * @returns
 * @private
 */
export declare function getValueFromMetadata(metadata: any, identifier: keyof IMetadataPaths): any;
/**
 * Date precisions
 */
export declare enum DatePrecision {
    Year = "year",
    Month = "month",
    Day = "day",
    Time = "time"
}
/**
 * Parses an ISO8601 date string into a date and a precision.
 * This is because a) if somone entered 2018, we want to respect that and not treat it as the same as 2018-01-01
 * and b) you cannot naively call new Date with an ISO 8601 string that does not include time information
 * For example, when I, here in mountain time, do new Date('2018').getFullYear() I get "2017".
 * This is because when you do not provide time or timezone info, UTC is assumed, so new Date('2018') is 2018-01-01T00:00:00 in UTC
 * which is actually 7 hours earlier here in mountain time.
 *
 * @param {string} isoString
 * @return { date: Date, precision: DatePrecision }
 * @private
 */
export declare function parseISODateString(isoString: string): {
    date: Date;
    precision: DatePrecision;
};
/**
 * Get the spatial reference as an object for an item
 * @param item
 * @returns spatial reference object
 * @private
 */
export declare const getItemSpatialReference: (item: IItem) => ISpatialReference;
/**
 * Data model for additional resources that are extracted
 * directly from formal item metadata (with no transformation)
 */
interface IAGOAdditionalResource {
    orName?: string;
    linkage: string;
}
/**
 * Extracts additional resources from the provided metadata
 * and transforms them into a hub-friendly format.
 *
 * Returns null if no resources are available
 *
 * @param item
 * @param metadata formal metadata
 * @returns
 * @private
 */
export declare const getAdditionalResources: (item: IItem, metadata?: any, requestOptions?: IHubRequestOptions) => IHubAdditionalResource[];
/**
 * @private
 *
 * Extracts additional resources from formal item metadata.
 * If none are available, null is returned.
 *
 * @param metadata the formal item metadata
 * @returns an array of all additional resources, or null
 */
export declare const extractRawResources: (metadata?: any) => IAGOAdditionalResource[];
/**
 * Determines whether a raw additional resource (i.e. extracted out of formal
 * metadata with no transformation) references the underlying service that backs
 * the item.
 *
 * @param resource raw additional resource of an item
 * @param item
 * @returns
 * @private
 */
export declare const isDataSourceOfItem: (resource: IAGOAdditionalResource, item: IItem) => boolean;
/**
 * Returns the url for an additional resource.
 *
 * Automatically appends auth token if token is available
 * and resource points to the backing service of an item.
 *
 * @param resource raw additional resource of an item
 * @param item
 * @param requestOptions IHubRequestOptions, including authentication
 * @returns
 * @private
 */
export declare const getAdditionalResourceUrl: (resource: IAGOAdditionalResource, item: IItem, requestOptions?: IHubRequestOptions) => string;
/**
 * @private
 *
 * Contains fallback logic for determining a content's extent.
 *
 * The fallback priority is as follows:
 * 1) item's extent (if valid bbox)
 * 2) extent enrichment from the hub api (if coordinates are valid bbox)
 * 3) layer's extent (if spatial reference is 4326)
 *
 * If none of these conditions are met, undefined is returned.
 *
 * @param item
 * @param layer
 * @param extentEnrichment
 * @returns the correct extent in a bbox format, or undefined
 */
export declare const determineExtent: (item: IItem, extentEnrichment?: any, layer?: ILayerDefinition) => any;
/**
 * @private
 *
 * Extracts the first contact from a given formal item metadata path.
 * This is particularly helpful if the contact path is either an object or an array.
 *
 * Note: the raw contact object must have the following properties:
 * - `rpIndName`: name of the individual
 * - `rpOrgName`: name of the individual's organization
 *
 * @param metadata formal item metadata
 * @param path path to the contact object/array
 * @returns
 */
export declare const extractFirstContact: (metadata: any, path: string) => {
    individualName: any;
    organizationName: any;
};
/**
 * Determines the correct orgId for an item.
 * Note: it's undocumented, but the portal API will return orgId for items... sometimes.
 *
 * @param item
 * @param ownerUser item owner's hydrated user object
 */
export declare const getItemOrgId: (item: IItem, ownerUser?: IUser) => any;
/**
 * Calculates the Publisher display info for the given item.
 * Utilizes this fallback pattern:
 * 1) Formal Item Metadata > Resource > Citation > Contact
 * 2) Formal Item Metadata > Resource > Contact
 * 3) Item’s Owner and Org Name
 * 4) Undefined (Item Owner / Org are private and we can't access additional info)
 *
 * @param item
 * @param metadata
 * @param org portal info of the item's organization
 * @param ownerUser the item owner's hydrated user
 * @returns
 */
export declare const getPublisherInfo: (item: IItem, metadata?: any, org?: Partial<IPortal>, ownerUser?: IUser) => any;
export {};
