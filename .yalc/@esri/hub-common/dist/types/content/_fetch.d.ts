import { IItem } from "@esri/arcgis-rest-portal";
import { ItemOrServerEnrichment } from "../items/_enrichments";
import { BBox, IHubRequestOptions, IHubGeography, IEnrichmentErrorInfo } from "../types";
/**
 * get the default list of enrichments to fetch for content
 * @param item
 * @returns the default list of enrichments to fetch for content
 * @private
 */
export declare const getContentEnrichments: (item: IItem) => ItemOrServerEnrichment[];
/**
 * The extent returned by the Hub API
 */
export interface IHubExtent {
    coordinates?: BBox;
}
/**
 * The set of enrichments that we fetch from the Hub API
 */
export interface IDatasetEnrichments {
    itemId?: string;
    layerId?: number;
    slug?: string;
    /**
     * boundary will default to the item extent
     * but can be overwritten by enrichments from the Hub API (inline)
     * or fetched from a location such as /resources/boundary.json
     */
    boundary?: IHubGeography;
    /**
     * Either the item's extent, or the item's
     * layer or server's extent converted to a lat/lng coordinate pair
     */
    extent?: IHubExtent;
    /** The count of records for the layer referenced by this content */
    recordCount?: number | null;
    /**
     * The appropriate summary to show for the item, coming from either
     * the item's data (for pages or initiatives) or the item's description
     */
    searchDescription?: string;
    /**
     * Pre-computed field statistics (min, max, average, etc)
     */
    statistics?: any;
    /**
     * Any errors encountered when fetching enrichments
     * see https://github.com/ArcGIS/hub-indexer/blob/master/docs/errors.md#response-formatting-for-errors
     */
    errors?: IEnrichmentErrorInfo[];
}
/**
 * fetch enrichment from the Hub API by slug
 * @param slug
 * @param requestOptions
 * @returns enrichments from the Hub API (slug, boundary, statistic, etc)
 * @private
 */
export declare const fetchHubEnrichmentsBySlug: (slug: string, requestOptions?: IHubRequestOptions) => Promise<IDatasetEnrichments>;
/**
 * fetch enrichment from the Hub API by id
 * @param slug
 * @param requestOptions
 * @returns enrichments from the Hub API (slug, boundary, statistic, etc)
 * @private
 */
export declare const fetchHubEnrichmentsById: (hubId: string, requestOptions?: IHubRequestOptions) => Promise<IDatasetEnrichments>;
