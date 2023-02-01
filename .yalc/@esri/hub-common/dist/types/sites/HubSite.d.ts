import { IHubSite, IWithPermissionBehavior, IWithCatalogBehavior, IWithStoreBehavior, IWithSharingBehavior, IWithVersioningBehavior } from "../core";
import { Catalog } from "../search";
import { IArcGISContext } from "../ArcGISContext";
import { HubItemEntity } from "../core/HubItemEntity";
import { IContainsResponse, IDeepCatalogInfo } from "../search";
import { ICreateVersionOptions, IVersion, IVersionMetadata } from "../versioning";
/**
 * Hub Site Class
 * NOTE: This is a minimal implementation. Create operations are not supported at this time
 */
export declare class HubSite extends HubItemEntity<IHubSite> implements IWithStoreBehavior<IHubSite>, IWithPermissionBehavior, IWithCatalogBehavior, IWithSharingBehavior, IWithVersioningBehavior {
    private _catalog;
    private _catalogCache;
    /**
     * Private constructor so we don't have `new` all over the place. Allows for
     * more flexibility in how we create the HubSiteManager over time.
     * @param context
     */
    private constructor();
    /**
     * Catalog instance for this site. Note: Do not hold direct references to this object; always access it from the site.
     * @returns
     */
    get catalog(): Catalog;
    /**
     * Create an instance from an IHubSite object
     * @param json - JSON object to create a HubSite from
     * @param context - ArcGIS context
     * @returns
     */
    static fromJson(json: Partial<IHubSite>, context: IArcGISContext): HubSite;
    /**
     *
     * NOT IMPLEMENTED YET: Create a new HubSite, returning a HubSite instance.
     * By default, this does not save the site to the backing store.
     * @param partialSite
     * @param context
     * @returns
     */
    static create(partialSite: Partial<IHubSite>, context: IArcGISContext, save?: boolean): Promise<HubSite>;
    /**
     * Fetch a Site from the backing store and return a HubSite instance.
     * @param identifier - Identifier of the site to load
     * @param context
     * @returns
     */
    static fetch(identifier: string, context: IArcGISContext): Promise<HubSite>;
    private static applyDefaults;
    /**
     * Apply a new state to the instance
     * @param changes
     */
    update(changes: Partial<IHubSite>): void;
    /**
     * Save the HubSite to the backing store.
     * Currently Sites are stored as Items in Portal
     * @returns
     */
    save(): Promise<void>;
    /**
     * Delete the HubSite from the store
     * set a flag to indicate that it is destroyed
     * @returns
     */
    delete(): Promise<void>;
    /**
     * Check if a particular entity is contained is this HubSite.
     *
     * By default, this checks the Site catalog for the entity, by executing a search.
     *
     * Transitive containment is supported by passing in an array of `IDeepCatalogInfo`
     * objects, in the order of the containment hierarchy.
     *
     * Scenario:
     * - Site `00a`'s Catalog contains Initiative `00b`.
     * - Initiative `00b`'s Catalog contains Site `00c`.
     * - Site `00c`'s catalog contains Dataset `00d`.
     *
     * Check if Dataset `00d` can be displayed in Site `00a`, pass in the following
     * ```js
     * [
     *  {id: '00c', entityType:"item"}, // site
     *  {id: '00b', entityType:"item"}, // initiative
     * ]
     * ```
     * The site catalog and id will be added in automatically.
     *
     * If you already have the `IHubCatalog` for the site or initiative, you can
     * pass that in as well, and it will save a request.
     *
     * This function will also build a cache of the catalogs so subsequent calls
     * will be faster.
     * @param identifier
     * @param hierarchy
     * @returns
     */
    contains(identifier: string, hierarchy?: IDeepCatalogInfo[]): Promise<IContainsResponse>;
    searchVersions(): Promise<IVersionMetadata[]>;
    getVersion(versionId: string): Promise<IVersion>;
    createVersion(options: ICreateVersionOptions): Promise<IVersion>;
    updateVersion(versionId: IVersion): Promise<IVersion>;
    deleteVersion(versionId: string): Promise<{
        success: boolean;
    }>;
}
