import { IHubProject, IWithPermissionBehavior, IWithCatalogBehavior, IWithStoreBehavior, IWithSharingBehavior, UiSchemaElementOptions, IWithCapabilityBehavior } from "../core";
import { Catalog } from "../search";
import { IArcGISContext } from "../ArcGISContext";
import { HubItemEntity } from "../core/HubItemEntity";
import { EditorConfigType, IEditorConfig } from "../core/behaviors/IWithEditorBehavior";
/**
 * Hub Project Class
 */
export declare class HubProject extends HubItemEntity<IHubProject> implements IWithStoreBehavior<IHubProject>, IWithPermissionBehavior, IWithCapabilityBehavior, IWithCatalogBehavior, IWithSharingBehavior {
    private _catalog;
    /**
     * Private constructor so we don't have `new` all over the place. Allows for
     * more flexibility in how we create the HubProjectManager over time.
     * @param context
     */
    private constructor();
    /**
     * Catalog instance for this project. Note: Do not hold direct references to this object; always access it from the project.
     * @returns
     */
    get catalog(): Catalog;
    /**
     * Create an instance from an IHubProject object
     * @param json - JSON object to create a HubProject from
     * @param context - ArcGIS context
     * @returns
     */
    static fromJson(json: Partial<IHubProject>, context: IArcGISContext): HubProject;
    /**
     * Create a new HubProject, returning a HubProject instance.
     * Note: This does not persist the Project into the backing store
     * @param partialProject
     * @param context
     * @returns
     */
    static create(partialProject: Partial<IHubProject>, context: IArcGISContext, save?: boolean): Promise<HubProject>;
    /**
     * Fetch a Project from the backing store and return a HubProject instance.
     * @param identifier - Identifier of the project to load
     * @param context
     * @returns
     */
    static fetch(identifier: string, context: IArcGISContext): Promise<HubProject>;
    /**
     * Static method to get the editor config for for the HubProject entity.
     * @param i18nScope Translation scope to be interpolated into the schemas
     * @param type
     * @param options Optional hash of uiSchema element option overrides
     * Note: typescript does not have a means to specify static methods in interfaces
     * so while this is the implementation of IWithEditorBehavior, it is not enforced
     * by the compiler.
     */
    static getEditorConfig(i18nScope: string, type: EditorConfigType, options?: UiSchemaElementOptions[]): Promise<IEditorConfig>;
    private static applyDefaults;
    /**
     * Apply a new state to the instance
     * @param changes
     */
    update(changes: Partial<IHubProject>): void;
    /**
     * Save the HubProject to the backing store. Currently Projects are stored as Items in Portal
     * @returns
     */
    save(): Promise<void>;
    /**
     * Delete the HubProject from the store
     * set a flag to indicate that it is destroyed
     * @returns
     */
    delete(): Promise<void>;
}
