import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { IVersionMetadata } from "./types";
/**
 * Return an array containing the versions of the item
 * @param id
 * @param requestOptions
 * @returns
 */
export declare function searchVersions(id: string, requestOptions: IUserRequestOptions): Promise<IVersionMetadata[]>;
