import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { EditorConfigType, UiSchemaElementOptions, IEditorConfig } from "../index";
import { IHubProject } from "../core/types";
/**
 * @private
 * Create a new Hub Project item
 *
 * Minimal properties are name and org
 *
 * @param project
 * @param requestOptions
 */
export declare function createProject(partialProject: Partial<IHubProject>, requestOptions: IUserRequestOptions): Promise<IHubProject>;
/**
 * @private
 * Update a Hub Project
 * @param project
 * @param requestOptions
 */
export declare function updateProject(project: IHubProject, requestOptions: IUserRequestOptions): Promise<IHubProject>;
/**
 * @private
 * Remove a Hub Project
 * @param id
 * @param requestOptions
 */
export declare function deleteProject(id: string, requestOptions: IUserRequestOptions): Promise<void>;
/**
 * Get the editor config for for the HubProject entity.
 * @param i18nScope Translation scope to be interpolated into the schemas
 * @param type
 * @param options Optional hash of Element component options
 * @returns
 */
export declare function getHubProjectEditorConfig(i18nScope: string, type: EditorConfigType, options?: UiSchemaElementOptions[]): Promise<IEditorConfig>;
