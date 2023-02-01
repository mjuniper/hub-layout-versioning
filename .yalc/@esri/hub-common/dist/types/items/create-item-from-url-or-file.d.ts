import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { ICreateItemResponse, ISharingResponse } from "@esri/arcgis-rest-portal";
import { IGroup, IItemAdd } from "@esri/arcgis-rest-types";
interface ICreateItemFromUrlOrFileOptions extends IUserRequestOptions {
    item: IItemAdd;
    groups?: IGroup[];
}
/**
 * Creates an item in online from either url or file.
 * Once created we wait for the item to be ready (or throw an error if creation failed)
 * If access is not private then we make a call to update that.
 *
 * @export
 * @param {ICreateItemFromUrlOrFileOptions} createItemFromUrlOrFileOptions Input params (item, groups?, requestoptions)
 * @return {*}  {
 *     title: string,
 *     createdItem: ICreateItemResponse,
 *     itemAccessResponse: ISharingResponse,
 *     itemSharingResponse: ISharingResponse[]
 *   } Responses from createdItem, changing item access, and item Sharing to group
 */
export declare function createItemFromUrlOrFile(createItemFromUrlOrFileOptions: ICreateItemFromUrlOrFileOptions): Promise<{
    title: string;
    createdItem: ICreateItemResponse;
    itemAccessResponse: ISharingResponse;
    itemSharingResponse: ISharingResponse[];
}>;
export {};
