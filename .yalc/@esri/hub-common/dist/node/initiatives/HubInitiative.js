"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubInitiative = void 0;
const defaults_1 = require("./defaults");
const HubInitiatives_1 = require("./HubInitiatives");
const search_1 = require("../search");
const HubItemEntity_1 = require("../core/HubItemEntity");
/**
 * Hub Initiative Class
 */
class HubInitiative extends HubItemEntity_1.HubItemEntity {
    /**
     * Private constructor so we don't have `new` all over the place. Allows for
     * more flexibility in how we create the HubInitiativeManager over time.
     * @param context
     */
    constructor(entity, context) {
        super(entity, context);
        this._catalog = search_1.Catalog.fromJson(entity.catalog, this.context);
    }
    /**
     * Catalog instance for this Initiative. Note: Do not hold direct references to this object; always access it from the Initiative.
     * @returns Catalog
     */
    get catalog() {
        return this._catalog;
    }
    /**
     * Create an instance from an IHubInitiative object
     * @param json - JSON object to create a HubInitiative from
     * @param context - ArcGIS context
     * @returns
     */
    static fromJson(json, context) {
        // merge what we have with the default values
        const pojo = this.applyDefaults(json, context);
        return new HubInitiative(pojo, context);
    }
    /**
     * Create a new HubInitiative, returning a HubInitiative instance.
     * Note: This does not persist the Initiative into the backing store
     * @param partialInitiative
     * @param context
     * @returns
     */
    static async create(partialInitiative, context, save = false) {
        const pojo = this.applyDefaults(partialInitiative, context);
        // return an instance of HubInitiative
        const instance = HubInitiative.fromJson(pojo, context);
        if (save) {
            await instance.save();
        }
        return instance;
    }
    /**
     * Fetch an Initiative from the backing store and return a HubInitiative instance.
     * @param identifier - slug or item id
     * @param context
     * @returns
     */
    static async fetch(identifier, context) {
        // fetch by id or slug
        try {
            const entity = await HubInitiatives_1.fetchInitiative(identifier, context.requestOptions);
            // create an instance of HubInitiative from the entity
            return HubInitiative.fromJson(entity, context);
        }
        catch (ex) {
            if (ex.message ===
                "CONT_0001: Item does not exist or is inaccessible.") {
                throw new Error(`Initiative not found.`);
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
     * @param options Optional hash of Element component options
     */
    // static async getEditorConfig(
    //   i18nScope: string,
    //   type: EditorConfigType,
    //   options: UiSchemaElementOptions[] = []
    // ): Promise<IEditorConfig> {
    //   // Delegate to module fn
    //   throw new Error("getEditorConfig Not Implemented for Initiatives");
    // }
    static applyDefaults(partialInitiative, context) {
        // ensure we have the orgUrlKey
        if (!partialInitiative.orgUrlKey) {
            partialInitiative.orgUrlKey = context.portal.urlKey;
        }
        // extend the partial over the defaults
        const pojo = Object.assign(Object.assign({}, defaults_1.DEFAULT_INITIATIVE), partialInitiative);
        return pojo;
    }
    /**
     * Apply a new state to the instance
     * @param changes
     */
    update(changes) {
        if (this.isDestroyed) {
            throw new Error("HubInitiative is already destroyed.");
        }
        // merge partial onto existing entity
        this.entity = Object.assign(Object.assign({}, this.entity), changes);
        // update internal instances
        if (changes.catalog) {
            this._catalog = search_1.Catalog.fromJson(this.entity.catalog, this.context);
        }
    }
    /**
     * Save the HubInitiative to the backing store.
     * Currently Initiatives are stored as Items in Portal
     * @returns
     */
    async save() {
        if (this.isDestroyed) {
            throw new Error("HubInitiative is already destroyed.");
        }
        // get the catalog, and permission configs
        this.entity.catalog = this._catalog.toJson();
        if (this.entity.id) {
            // update it
            this.entity = await HubInitiatives_1.updateInitiative(this.entity, this.context.userRequestOptions);
        }
        else {
            // create it
            this.entity = await HubInitiatives_1.createInitiative(this.entity, this.context.userRequestOptions);
        }
        // call the after save hook on superclass
        await super.afterSave();
        return;
    }
    /**
     * Delete the HubInitiative from the store
     * set a flag to indicate that it is destroyed
     * @returns
     */
    async delete() {
        if (this.isDestroyed) {
            throw new Error("HubInitiative is already destroyed.");
        }
        this.isDestroyed = true;
        // Delegate to module fn
        await HubInitiatives_1.deleteInitiative(this.entity.id, this.context.userRequestOptions);
    }
}
exports.HubInitiative = HubInitiative;
//# sourceMappingURL=HubInitiative.js.map