import { ISearchOptions } from "@esri/arcgis-rest-portal";
import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IItem } from "@esri/arcgis-rest-types";
import { IHubSearchOptions, IHubSearchResponse, IQuery } from "../types";
/**
 * @private
 */
export declare type ConversionFunction<T> = (i: IItem, ro?: IRequestOptions) => Promise<T>;
/**
 * @private
 * Execute a search and convert to a specific entity
 * @param query
 * @param convertFn
 * @param options
 * @returns
 */
export declare function searchEntities<T>(query: IQuery, convertFn: ConversionFunction<T>, options: IHubSearchOptions): Promise<IHubSearchResponse<T>>;
/**
 * @private
 * @param convertFn
 * @returns
 */
export declare function createEntitySearchFn<T>(convertFn: ConversionFunction<T>): (v: ISearchOptions) => Promise<IHubSearchResponse<T>>;
