import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
/**
 * Given an item, and owner, add a image resource to the item and returns its url
 * @param id
 * @param owner
 * @param file
 * @param filename
 * @param ro
 * @param prefix
 * @returns
 */
export declare function uploadImageResource(id: string, owner: string, file: any, filename: string, ro: IUserRequestOptions, prefix?: string): Promise<string>;
