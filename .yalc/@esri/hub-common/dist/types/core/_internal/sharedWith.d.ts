import { IGroup } from "@esri/arcgis-rest-portal";
import { IRequestOptions } from "@esri/arcgis-rest-request";
/**
 * @private
 * Return the list of groups the current user can see, that the item is shared to
 * @param itemId
 * @param requestOptions
 * @returns
 */
export declare function sharedWith(itemId: string, requestOptions: IRequestOptions): Promise<IGroup[]>;
