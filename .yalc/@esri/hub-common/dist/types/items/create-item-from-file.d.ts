import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { ICreateItemResponse } from "@esri/arcgis-rest-portal";
import { IItemAdd } from "@esri/arcgis-rest-types";
/**
 * Creates an item in online from a local file/item.
 * Upload is multithreaded as the item is chunked up.
 *
 * @export
 * @param {IItemAdd} item Item to be uploaded into online.
 * @param {IUserRequestOptions} requestOptions
 * @return {*}  {Promise<string>} Newly created item id
 */
export declare function createItemFromFile(item: IItemAdd, requestOptions: IUserRequestOptions): Promise<ICreateItemResponse>;
