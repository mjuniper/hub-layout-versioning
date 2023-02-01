import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { IHubSearchOptions, IHubRequestOptions } from "../index";
import { IItem } from "@esri/arcgis-rest-portal";
import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IHubProject } from "../core/types";
import { IHubSearchResponse, IHubSearchResult, IQuery } from "../search";
export declare const HUB_PROJECT_ITEM_TYPE = "Hub Project";
/**
 * Create a new Hub Project item
 *
 * Minimal properties are name and org
 *
 * @param project
 * @param requestOptions
 */
export declare function createProject(partialProject: Partial<IHubProject>, requestOptions: IUserRequestOptions): Promise<IHubProject>;
/**
 * Update a Hub Project
 * @param project
 * @param requestOptions
 */
export declare function updateProject(project: IHubProject, requestOptions: IUserRequestOptions): Promise<IHubProject>;
/**
 * Get a Hub Project by id or slug
 * @param identifier item id or slug
 * @param requestOptions
 */
export declare function fetchProject(identifier: string, requestOptions: IRequestOptions): Promise<IHubProject>;
/**
 * Remove a Hub Project
 * @param id
 * @param requestOptions
 */
export declare function destroyProject(id: string, requestOptions: IUserRequestOptions): Promise<void>;
/**
 * Search for Projects, and get IHubProject results
 *
 * Different from `hubSearch` in that this returns the IHubProjects
 *
 * @param filter
 * @param options
 * @returns
 */
export declare function searchProjects(query: string | IQuery, options: IHubSearchOptions): Promise<IHubSearchResponse<IHubProject>>;
/**
 * Convert an Hub Project Item into a Hub Project, fetching any additional
 * information that may be required
 * @param item
 * @param auth
 * @returns
 */
export declare function convertItemToProject(item: IItem, requestOptions: IRequestOptions): Promise<IHubProject>;
/**
 * Fetch project specific enrichments
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
export declare function enrichProjectSearchResult(item: IItem, include: string[], requestOptions: IHubRequestOptions): Promise<IHubSearchResult>;
