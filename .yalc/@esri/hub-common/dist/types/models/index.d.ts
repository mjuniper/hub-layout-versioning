export * from "./serializeModel";
import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { IItem } from "@esri/arcgis-rest-portal";
import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IModel } from "../types";
/**
 * Gets the full item/data model for an item id
 * @param {string} id
 * @param {Object} requestOptions
 */
export declare function getModel(id: string, requestOptions: IRequestOptions): Promise<IModel>;
/**
 * Get a model by it's slug
 *
 * This uses the [Filter](https://developers.arcgis.com/rest/users-groups-and-items/search-reference.htm) option of the
 * to search for an item that has a typekeyword of `slug|{slug-value}`
 *
 * This is useful for applications that want to use human-readable urls instead
 * of using item ids.
 *
 * @param slug
 * @param requestOptions
 * @returns
 */
export declare function getModelBySlug(slug: string, requestOptions: IRequestOptions): Promise<IModel>;
/**
 * Create an item to back and IModel.
 *
 * @param {IModel}
 * @param {IRequestOptions} requestOptions
 * @returns {Promise<IModel>}
 */
export declare function createModel(model: IModel, requestOptions: IUserRequestOptions): Promise<IModel>;
/**
 * Update an IModel. Generic function that will be used across all
 * type-specific update functions
 *
 * @export
 * @param {IModel} "model" object (i.e. `{item:{...}, data:{...}}`)
 * @param {IRequestOptions} requestOptions
 * @returns {Promise<IModel>}
 */
export declare function updateModel(model: IModel, requestOptions: IUserRequestOptions): Promise<IModel>;
/**
 * Given an Item, fetch the data json and return an IModel
 * @param item
 * @param requestOptions
 * @returns
 */
export declare function fetchModelFromItem(item: IItem, requestOptions: IRequestOptions): Promise<IModel>;
