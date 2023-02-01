import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { ICreateVersionOptions, IVersion } from "./types";
import { IModel } from "../index";
/**
 * Return an array containing the versions of the item
 * @param entity
 * @param requestOptions
 * @returns
 */
export declare function createVersion(model: IModel, requestOptions: IUserRequestOptions, options: ICreateVersionOptions): Promise<IVersion>;
