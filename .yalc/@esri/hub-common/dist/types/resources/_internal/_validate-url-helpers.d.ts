import { IExtent, IFeatureServiceDefinition, ILayerDefinition } from "@esri/arcgis-rest-types";
import { ItemType } from "../../types";
/**
 * Feature service / Doc Links Should not have data urls. Let"s exclude them from that.
 *
 * @export
 * @param {string} itemType What type of item is it?
 * @return {*}  {boolean}
 */
export declare function shouldHaveDataUrl(itemType: string): boolean;
/**
 * Get the file name out of a url. Will return either the
 * hostname, or the pathname if it exists
 *
 * @export
 * @param {string} url Url to get a file name out of
 * @return {*}  {string}
 */
export declare function getFileName(url: string): string;
/**
 * Is this a valid url?
 *
 * @param {string} url Url to validate
 * @return {*}  {boolean}
 */
export declare function isUrl(url: string): boolean;
/**
 * Tests if url string is a feature service / layer.
 *
 * @param {string} url URL to test
 * @return {*}  {boolean}
 */
export declare function isFeatureService(url: string): boolean;
/**
 * Tests if url string is a service (map, feature, image, etc)
 *
 * @param {string} url Url to test
 * @return {*}  {boolean}
 */
export declare function isService(url: string): boolean;
/**
 * Is the service a feature service AND is it a layer specifically
 *
 * @param {string} url
 * @return {*}  {boolean}
 */
export declare function isFeatureLayer(url: string): boolean;
/**
 * Gets item title from url as a fall back
 *
 * @param {string} url item url
 * @return {*}  {string}
 */
export declare function getFeatureServiceTitle(url: string): string;
/**
 * Gets item info out of a feature layer item.
 *
 * @export
 * @param url Item URL
 * @param body Item body.
 * @return Item info (title, description, extent, url)
 */
export declare function getFeatureLayerItem(url: string, body: Partial<ILayerDefinition>): {
    title: string;
    description: string;
    extent: IExtent;
    url: string;
};
/**
 * Gets item info out of a feature service response (which is not a specific layer)
 *
 * @export
 * @param {*} url
 * @param {*} body
 * @return {*}
 */
export declare function getFeatureServiceItem(url: string, body: Partial<IFeatureServiceDefinition>): {
    title: string;
    description: string;
    extent: IExtent;
    url: string;
};
/**
 * Ping a non FS url and return response status && headers
 *
 * @export
 * @param {string} url Non FS URL
 * @return {*}  {Promise<{ ok: boolean, headers: Headers }>}
 */
export declare function pingUrl(url: string): Promise<{
    ok: boolean;
    headers?: Headers;
}>;
/**
 * Ping a FS URL and handle matters such as "hidden" success failures.
 *
 * @export
 * @param {string} url
 * @return {*}  {Promise<{ ok: boolean, item?: any }>}
 */
export declare function pingFeatureService(url: string): Promise<{
    ok: boolean;
    item?: any;
}>;
export declare function detectDataTypeFromHeader(headers: Headers): ItemType;
export declare function detectDataTypeFromExtension(url: string): ItemType;
