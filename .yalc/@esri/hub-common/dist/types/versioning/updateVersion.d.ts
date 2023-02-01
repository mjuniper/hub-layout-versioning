import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { IModel } from "../index";
import { IVersion } from "./types";
/**
 * Return an array containing the versions of the item
 * @param model
 * @param versionId
 * @param requestOptions
 * @returns
 */
export declare function updateVersion(model: IModel, version: IVersion, requestOptions: IUserRequestOptions): Promise<IVersion>;
