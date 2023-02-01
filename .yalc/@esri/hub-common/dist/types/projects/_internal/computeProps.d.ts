import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IHubProject } from "../../core";
import { IModel } from "../../types";
/**
 * Given a model and a project, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param project
 * @param requestOptions
 * @returns
 */
export declare function computeProps(model: IModel, project: Partial<IHubProject>, requestOptions: IRequestOptions): IHubProject;
