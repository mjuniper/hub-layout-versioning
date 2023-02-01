import { IExtent, IPoint, IPolygon } from "@esri/arcgis-rest-types";
import { IHubRequestOptions, BBox } from "./types";
/**
 * Turns an bounding box coordinate array into an extent object
 * @param bBox bounding box coordinate array
 * @returns extent object
 */
export declare const bBoxToExtent: (bBox: BBox) => IExtent;
/**
 * Given a Bbox, convert it to a string. Some api endpoints expect a string
 *
 * @param {BBox} extent
 * @return {*}  {string}
 */
export declare const bboxToString: (extent: BBox) => string;
export declare function createExtent(xmin: number, ymin: number, xmax: number, ymax: number, wkid?: number): IExtent;
/**
 * Turns an extent object into a bounding box coordinate array
 * @param extent extent
 */
export declare function extentToBBox(extent: IExtent): BBox;
export declare const GLOBAL_EXTENT: IExtent;
/**
 * Gets the geographic extent for an org
 * @param hubRequestOptions
 */
export declare function getGeographicOrgExtent(hubRequestOptions: IHubRequestOptions): Promise<IExtent>;
/**
 * Get the default org extent as a bbox for use on item.extent
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function getOrgExtentAsBBox(hubRequestOptions: IHubRequestOptions): Promise<BBox>;
/**
 * checks if the extent is a valid BBox (2 element array of coordinate pair arrays)
 * @param extent
 * @returns
 */
export declare const isBBox: (extent: unknown) => boolean;
/**
 * Check if the given extent is in a known format
 * @param  {Object} extent extent in any format
 * @return {Boolean}       indicator
 */
export declare function isValidExtent(extent: object): boolean;
/**
 * Convert an extent object into a polygon object
 * @param extent
 * @returns
 */
export declare const extentToPolygon: (extent: IExtent) => IPolygon;
/**
 * Get the center of an extent as a point
 * @param extent
 * @returns
 */
export declare const getExtentCenter: (extent: IExtent) => IPoint;
