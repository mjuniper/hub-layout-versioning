import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { IRequestOptions } from "@esri/arcgis-rest-request";
import { ArcGISContextManager } from "../ArcGISContextManager";
import { IArcGISContext, IHubSearchOptions, IHubSearchResponse, IQuery } from "..";
import { IHubEntityManager, IHubProject } from "../core/types";
import { IHubItemEntityManager } from "../core/types/IHubItemEntityManager";
import { IGroup, IItem } from "@esri/arcgis-rest-types";
import { ISharingResponse } from "@esri/arcgis-rest-portal";
/**
 * Centralized functions used to manage IHubProject instances
 *
 * This class is a convenience wrapper over util functions which
 * are also directly accessible for use in scenarios where
 * classes are inconvenient.
 */
export declare class HubProjectManager implements IHubEntityManager<IHubProject>, IHubItemEntityManager<IHubProject> {
    /**
     * Hold a context manager, which should be a single instance for
     * an application. When authentication changes, the .context
     * property on the context manager will be replaced. As long as
     * all the fns in this class leverage properties on .context
     * everything be kept in sync.
     */
    private _contextManager;
    /**
     * Hold context directly. Allows the class to be used in places
     * where an `ArcGISContextManager` is not directly available, but
     * an `IArcGISContext` is
     */
    private _context;
    /**
     * Private so we can employ a factory function should we need
     * async work during creation
     * @param contextOrManager
     */
    private constructor();
    /**
     * Factory function to construct a new HubProjectManager instance.
     *
     * Note: Used so that we could do async actions in the ctor.
     * @param contextOrManager
     * @returns
     */
    static init(contextOrManager: ArcGISContextManager | IArcGISContext): HubProjectManager;
    /**
     * Getter to abstract how we store the context
     */
    private get context();
    /**
     * Create and store new project.
     *
     * Projects are stored as Items in the Sharing API
     * @param project
     * @param requestOptions
     * @returns
     */
    create(project: Partial<IHubProject>, requestOptions?: IUserRequestOptions): Promise<IHubProject>;
    /**
     * Update a project
     * @param project
     * @param requestOptions
     * @returns
     */
    update(project: IHubProject, requestOptions?: IUserRequestOptions): Promise<IHubProject>;
    /**
     * Destroy a project.
     * This permanently removes the backing Item
     * @param id
     * @param requestOptions
     * @returns
     */
    destroy(id: string, requestOptions?: IUserRequestOptions): Promise<void>;
    /**
     * Fetch a Project via id or it's slug
     *
     * This function does not require a user to be
     * authenticated, but it does require an `IRequestOptions`
     * which contains the portal instance to communicate with
     * @param identifier
     * @param requestOptions
     * @returns
     */
    fetch(identifier: string, requestOptions?: IRequestOptions): Promise<IHubProject>;
    /**
     * Search for Projects
     *
     * @param query
     * @param options
     */
    search(query: string | IQuery, options: IHubSearchOptions): Promise<IHubSearchResponse<IHubProject>>;
    /**
     * Set the thumbnail for the Project
     * @param id
     * @param file
     * @param filename
     * @param requestOptions
     * @returns
     */
    updateThumbnail(project: IHubProject, file: any, filename: string, requestOptions?: IUserRequestOptions): Promise<IHubProject>;
    /**
     * Convert a Hub Project Item to a IHubProject
     * @param item
     * @param requestOptions
     * @returns
     */
    fromItem(item: IItem, requestOptions?: IRequestOptions): Promise<IHubProject>;
    /**
     * Sets the access level of a Hub Project
     *
     * @param {IHubProject} project
     * @param {("public" | "org" | "private")} accessLevel
     * @param {IUserRequestOptions} [requestOptions]
     * @returns
     */
    setAccess(project: IHubProject, accessLevel: "public" | "org" | "private", requestOptions?: IUserRequestOptions): Promise<ISharingResponse>;
    /**
     * Shares a Hub Project to a group
     *
     * @param {IHubProject} project
     * @param {IGroup} group
     * @param {IUserRequestOptions} [requestOptions]
     * @returns
     */
    shareToGroup(project: IHubProject, group: IGroup, requestOptions?: IUserRequestOptions): Promise<ISharingResponse>;
    /**
     * Shares a Hub Project to N Groups.
     *
     * @param {IHubProject} project
     * @param {IGroup[]} groups
     * @param {IUserRequestOptions} [requestOptions]
     * @returns
     */
    shareToGroups(project: IHubProject, groups: IGroup[], requestOptions?: IUserRequestOptions): Promise<ISharingResponse[]>;
    /**
     * Unshares a Hub Project from a group
     *
     * @param {IHubProject} project
     * @param {IGroup} group
     * @param {IUserRequestOptions} [requestOptions]
     * @returns
     */
    unshareFromGroup(project: IHubProject, group: IGroup, requestOptions?: IUserRequestOptions): Promise<ISharingResponse>;
    /**
     * Unshares a Hub Project from N groups.
     *
     * @param {IHubProject} project
     * @param {IGroup[]} groups
     * @param {IUserRequestOptions} [requestOptions]
     * @returns
     */
    unshareFromGroups(project: IHubProject, groups: IGroup[], requestOptions?: IUserRequestOptions): Promise<ISharingResponse[]>;
}
