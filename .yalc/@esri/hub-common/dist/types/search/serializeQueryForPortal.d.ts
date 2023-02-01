import { ISearchOptions } from "@esri/arcgis-rest-portal";
import { IQuery } from "./types";
/**
 * Serialize IQuery into ISearchOptions for ArcGIS Portal
 * @param query
 * @returns
 */
export declare function serializeQueryForPortal(query: IQuery): ISearchOptions;
