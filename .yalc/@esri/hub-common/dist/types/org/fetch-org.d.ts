import { IRequestOptions } from "@esri/arcgis-rest-request";
/**
 * Fetches the portal for a given org.
 *
 * @param orgId
 * @param options request options
 * @returns
 */
export declare function fetchOrg(orgId: string, options?: IRequestOptions): Promise<import("@esri/arcgis-rest-portal").IPortal>;
