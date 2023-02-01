import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
/**
 * Helper function which takes an itemId and checks the status
 * of the item every 2 seconds until it is either complete or failed.
 *
 * @export
 * @param {string} itemId AGO item id
 * @param {IUserRequestOptions} requestOptions
 */
export declare function _waitForItemReady(itemId: string, requestOptions: IUserRequestOptions, milliseconds?: number): Promise<void>;
