import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
import { IArcGISContext } from "../ArcGISContext";
import { IHubEntityManager, IHubItemEntityManager, IHubSite } from "../core/types";
import { ArcGISContextManager } from "../ArcGISContextManager";
import { IHubSearchOptions, IQuery } from "../search";
import { IHubRequestOptions, ISearchResponse } from "../types";
import { IItem } from "@esri/arcgis-rest-types";
import { IRequestOptions } from "@esri/arcgis-rest-request";
export declare class HubSiteManager implements IHubEntityManager<IHubSite>, IHubItemEntityManager<IHubSite> {
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
    static init(contextOrManager: ArcGISContextManager | IArcGISContext): HubSiteManager;
    /**
     * Getter to abstract how we store the context
     */
    private get context();
    /**
     * Create and store a new Site
     *
     * This also registers the item for oAuth and
     * registers domain names with the hub Domain system
     *
     * Sites are stored as Items in the Sharing API
     * @param site
     * @param requestOptions
     * @returns
     */
    create(site: Partial<IHubSite>, requestOptions?: IHubRequestOptions): Promise<IHubSite>;
    /**
     * Update a Site
     * @param site
     * @param requestOptions
     * @returns
     */
    update(site: IHubSite, requestOptions?: IHubRequestOptions): Promise<IHubSite>;
    /**
     * Destroy a Site
     * This permanently removes the backing Item,
     * and clears the domain entries for it.
     * @param id
     * @param requestOptions
     * @returns
     */
    destroy(id: string, requestOptions?: IHubRequestOptions): Promise<void>;
    /**
     * Fetch a Site via Id, slug or domain
     *
     * This function does not require a user to be
     * authenticated, but it does require an `IRequestOptions`
     * which contains the portal instance to communicate with
     * @param identifier
     * @param requestOptions
     * @returns
     */
    fetch(identifier: string, requestOptions?: IHubRequestOptions): Promise<IHubSite>;
    /**
     * Search for Sites
     *
     * @param filter
     * @param opts
     */
    search(query: string | IQuery, options: IHubSearchOptions): Promise<ISearchResponse<IHubSite>>;
    /**
     * Set the thumbnail for the Site
     * @param id
     * @param file
     * @param filename
     * @param requestOptions
     * @returns
     */
    updateThumbnail(site: IHubSite, file: any, filename: string, requestOptions?: IUserRequestOptions): Promise<IHubSite>;
    /**
     * Convert a Hub Project Item to a IHubProject
     * @param item
     * @param requestOptions
     * @returns
     */
    fromItem(item: IItem, requestOptions?: IRequestOptions): Promise<IHubSite>;
}
