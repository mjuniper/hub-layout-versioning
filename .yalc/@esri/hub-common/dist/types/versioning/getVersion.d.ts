import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { IVersion } from "./types";
/**
 * Return an array containing the versions of the item
 * @param id
 * @param versionId
 * @param requestOptions
 * @returns
 */
export declare function getVersion(id: string, versionId: string, requestOptions: IUserRequestOptions): Promise<IVersion>;
