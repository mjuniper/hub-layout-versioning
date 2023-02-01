import { ISearchResult } from "@esri/arcgis-rest-portal";
import { IHubAggregation } from "../types";
/**
 * @private
 * Convert a portal aggregation structure into the HubAggregations structure
 * @param searchResults
 * @returns
 */
export declare function convertPortalAggregations<T>(searchResults: ISearchResult<T>): IHubAggregation[];
