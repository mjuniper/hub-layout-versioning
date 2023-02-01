import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IHubSite } from "../../core";
import { IModel } from "../../types";
/**
 * Given a model and a site, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param site
 * @param requestOptions
 * @returns
 */
export declare function computeProps(model: IModel, site: Partial<IHubSite>, requestOptions: IRequestOptions): IHubSite;
