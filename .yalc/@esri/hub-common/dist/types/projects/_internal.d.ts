import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IHubProject } from "../core";
import { IPropertyMap } from "../core/_internal/PropertyMapper";
import { IModel } from "../types";
/**
 * Given a model and a project, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param project
 * @param requestOptions
 * @returns
 */
export declare function computeProps(model: IModel, project: Partial<IHubProject>, requestOptions: IRequestOptions): IHubProject;
/**
 * Returns an Array of IPropertyMap objects
 * that define the projection of properties from a IModel to an IHubProject
 * @returns
 * @private
 */
export declare function getPropertyMap(): IPropertyMap[];
