import { DEFAULT_PROJECT } from "./defaults";
import { Catalog } from "../search";
import { HubItemEntity } from "../core/HubItemEntity";
// NOTE: this could be lazy-loaded just like the CUD functions
import { fetchProject } from "./fetch";
/**
 * Hub Project Class
 */
export class HubProject extends HubItemEntity {
    /**
     * Private constructor so we don't have `new` all over the place. Allows for
     * more flexibility in how we create the HubProjectManager over time.
     * @param context
     */
    constructor(project, context) {
        super(project, context);
        this._catalog = Catalog.fromJson(project.catalog, this.context);
    }
    /**
     * Catalog instance for this project. Note: Do not hold direct references to this object; always access it from the project.
     * @returns
     */
    get catalog() {
        return this._catalog;
    }
    /**
     * Create an instance from an IHubProject object
     * @param json - JSON object to create a HubProject from
     * @param context - ArcGIS context
     * @returns
     */
    static fromJson(json, context) {
        // merge what we have with the default values
        const pojo = this.applyDefaults(json, context);
        return new HubProject(pojo, context);
    }
    /**
     * Create a new HubProject, returning a HubProject instance.
     * Note: This does not persist the Project into the backing store
     * @param partialProject
     * @param context
     * @returns
     */
    static async create(partialProject, context, save = false) {
        const pojo = this.applyDefaults(partialProject, context);
        // return an instance of HubProject
        const instance = HubProject.fromJson(pojo, context);
        if (save) {
            await instance.save();
        }
        return instance;
    }
    /**
     * Fetch a Project from the backing store and return a HubProject instance.
     * @param identifier - Identifier of the project to load
     * @param context
     * @returns
     */
    static async fetch(identifier, context) {
        // fetch the project by id or slug
        try {
            const project = await fetchProject(identifier, context.requestOptions);
            // create an instance of HubProject from the project
            return HubProject.fromJson(project, context);
        }
        catch (ex) {
            if (ex.message ===
                "CONT_0001: Item does not exist or is inaccessible.") {
                throw new Error(`Project not found.`);
            }
            else {
                throw ex;
            }
        }
    }
    /**
     * Static method to get the editor config for for the HubProject entity.
     * @param i18nScope Translation scope to be interpolated into the schemas
     * @param type
     * @param options Optional hash of uiSchema element option overrides
     * Note: typescript does not have a means to specify static methods in interfaces
     * so while this is the implementation of IWithEditorBehavior, it is not enforced
     * by the compiler.
     */
    static async getEditorConfig(i18nScope, type, options = []) {
        const { getHubProjectEditorConfig } = await import("./edit");
        // Delegate to module fn
        return getHubProjectEditorConfig(i18nScope, type, options);
    }
    static applyDefaults(partialProject, context) {
        // ensure we have the orgUrlKey
        if (!partialProject.orgUrlKey) {
            partialProject.orgUrlKey = context.portal.urlKey;
        }
        // extend the partial over the defaults
        const pojo = Object.assign(Object.assign({}, DEFAULT_PROJECT), partialProject);
        return pojo;
    }
    /**
     * Apply a new state to the instance
     * @param changes
     */
    update(changes) {
        if (this.isDestroyed) {
            throw new Error("HubProject is already destroyed.");
        }
        // merge partial onto existing entity
        this.entity = Object.assign(Object.assign({}, this.entity), changes);
        // update internal instances
        if (changes.catalog) {
            this._catalog = Catalog.fromJson(this.entity.catalog, this.context);
        }
    }
    /**
     * Save the HubProject to the backing store. Currently Projects are stored as Items in Portal
     * @returns
     */
    async save() {
        if (this.isDestroyed) {
            throw new Error("HubProject is already destroyed.");
        }
        // get the catalog, and permission configs
        this.entity.catalog = this._catalog.toJson();
        const { createProject, updateProject } = await import("./edit");
        if (this.entity.id) {
            // update it
            this.entity = await updateProject(this.entity, this.context.userRequestOptions);
        }
        else {
            // create it
            this.entity = await createProject(this.entity, this.context.userRequestOptions);
        }
        // call the after save hook on superclass
        await super.afterSave();
        return;
    }
    /**
     * Delete the HubProject from the store
     * set a flag to indicate that it is destroyed
     * @returns
     */
    async delete() {
        if (this.isDestroyed) {
            throw new Error("HubProject is already destroyed.");
        }
        this.isDestroyed = true;
        const { deleteProject } = await import("./edit");
        // Delegate to module fn
        await deleteProject(this.entity.id, this.context.userRequestOptions);
    }
}
//# sourceMappingURL=HubProject.js.map