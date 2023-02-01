import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IModel } from "../../types";
import { IHubInitiative } from "../../core";
/**
 * Given a model and an Initiative, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param initiative
 * @param requestOptions
 * @returns
 */
export declare function computeProps(model: IModel, initiative: Partial<IHubInitiative>, requestOptions: IRequestOptions): IHubInitiative;
