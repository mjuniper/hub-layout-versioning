import { IHubInitiative, IWithPermissionBehavior, IWithCatalogBehavior, IWithStoreBehavior, IWithSharingBehavior, IWithCapabilityBehavior } from "../core";
import { Catalog } from "../search";
import { IArcGISContext } from "../ArcGISContext";
import { HubItemEntity } from "../core/HubItemEntity";
/**
 * Hub Initiative Class
 */
export declare class HubInitiative extends HubItemEntity<IHubInitiative> implements IWithStoreBehavior<IHubInitiative>, IWithPermissionBehavior, IWithCapabilityBehavior, IWithCatalogBehavior, IWithSharingBehavior {
    private _catalog;
    /**
     * Private constructor so we don't have `new` all over the place. Allows for
     * more flexibility in how we create the HubInitiativeManager over time.
     * @param context
     */
    private constructor();
    /**
     * Catalog instance for this Initiative. Note: Do not hold direct references to this object; always access it from the Initiative.
     * @returns Catalog
     */
    get catalog(): Catalog;
    /**
     * Create an instance from an IHubInitiative object
     * @param json - JSON object to create a HubInitiative from
     * @param context - ArcGIS context
     * @returns
     */
    static fromJson(json: Partial<IHubInitiative>, context: IArcGISContext): HubInitiative;
    /**
     * Create a new HubInitiative, returning a HubInitiative instance.
     * Note: This does not persist the Initiative into the backing store
     * @param partialInitiative
     * @param context
     * @returns
     */
    static create(partialInitiative: Partial<IHubInitiative>, context: IArcGISContext, save?: boolean): Promise<HubInitiative>;
    /**
     * Fetch an Initiative from the backing store and return a HubInitiative instance.
     * @param identifier - slug or item id
     * @param context
     * @returns
     */
    static fetch(identifier: string, context: IArcGISContext): Promise<HubInitiative>;
    /**
     * Static method to get the editor config for for the HubProject entity.
     * @param i18nScope Translation scope to be interpolated into the schemas
     * @param type
     * @param options Optional hash of Element component options
     */
    private static applyDefaults;
    /**
     * Apply a new state to the instance
     * @param changes
     */
    update(changes: Partial<IHubInitiative>): void;
    /**
     * Save the HubInitiative to the backing store.
     * Currently Initiatives are stored as Items in Portal
     * @returns
     */
    save(): Promise<void>;
    /**
     * Delete the HubInitiative from the store
     * set a flag to indicate that it is destroyed
     * @returns
     */
    delete(): Promise<void>;
}
