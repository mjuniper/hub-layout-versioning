import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { ICreateItemResponse } from "@esri/arcgis-rest-portal";
import { IItemAdd } from "@esri/arcgis-rest-types";
/**
 * Create AGO item from a URL
 *
 * @export
 * @param {IItemAdd} item Item to be uploaded into online.
 * @param {IUserRequestOptions} requestOptions
 * @return {*}  {Promise<string>} Newly created item ID
 */
export declare function createItemFromUrl(item: IItemAdd, requestOptions: IUserRequestOptions): Promise<ICreateItemResponse>;
