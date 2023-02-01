import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
/**
 * Return an array containing the versions of the item
 * @param id
 * @param versionId
 * @param owner
 * @param requestOptions
 * @returns
 */
export declare function deleteVersion(id: string, versionId: string, owner: string, requestOptions: IUserRequestOptions): Promise<{
    success: boolean;
}>;
