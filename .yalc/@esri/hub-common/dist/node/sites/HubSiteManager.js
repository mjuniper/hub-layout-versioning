"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubSiteManager = void 0;
const HubError_1 = require("../HubError");
// Node has issues if this is not directly imported
const ArcGISContextManager_1 = require("../ArcGISContextManager");
const HubSites_1 = require("./HubSites");
const setItemThumbnail_1 = require("../items/setItemThumbnail");
class HubSiteManager {
    /**
     * Private so we can employ a factory function should we need
     * async work during creation
     * @param contextOrManager
     */
    constructor(contextOrManager) {
        if (contextOrManager instanceof ArcGISContextManager_1.ArcGISContextManager) {
            this._contextManager = contextOrManager;
        }
        else {
            this._context = contextOrManager;
        }
    }
    /**
     * Factory function to construct a new HubProjectManager instance.
     *
     * Note: Used so that we could do async actions in the ctor.
     * @param contextOrManager
     * @returns
     */
    static init(contextOrManager) {
        return new HubSiteManager(contextOrManager);
    }
    /**
     * Getter to abstract how we store the context
     */
    get context() {
        if (this._contextManager) {
            return this._contextManager.context;
        }
        else {
            return this._context;
        }
    }
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
    async create(site, requestOptions) {
        if (requestOptions || this.context.isAuthenticated) {
            // ammend in the orgUrlKey
            if (!site.orgUrlKey) {
                site.orgUrlKey = this.context.portal.urlKey;
            }
            return HubSites_1.createSite(site, requestOptions || this.context.hubRequestOptions);
        }
        else {
            throw new HubError_1.default("Create Site", "Creating Hub Sites requires authentication.");
        }
    }
    /**
     * Update a Site
     * @param site
     * @param requestOptions
     * @returns
     */
    async update(site, requestOptions) {
        if (requestOptions || this.context.isAuthenticated) {
            return HubSites_1.updateSite(site, requestOptions || this.context.hubRequestOptions);
        }
        else {
            throw new HubError_1.default("Update Site", "Updating a Hub Site requires authentication.");
        }
    }
    /**
     * Destroy a Site
     * This permanently removes the backing Item,
     * and clears the domain entries for it.
     * @param id
     * @param requestOptions
     * @returns
     */
    async destroy(id, requestOptions) {
        if (requestOptions || this.context.isAuthenticated) {
            return HubSites_1.destroySite(id, requestOptions || this.context.hubRequestOptions);
        }
        else {
            throw new HubError_1.default("Destroy Site", "Destroying Hub Sites requires authentication.");
        }
    }
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
    async fetch(identifier, requestOptions) {
        try {
            if (requestOptions || this.context.hubRequestOptions) {
                return HubSites_1._fetchSite(identifier, requestOptions || this.context.hubRequestOptions);
            }
            else {
                throw new HubError_1.default("Fetch Site", "Can not retrieve context.hubRequestOptions from Context Manager. HubSiteManager is configured incorrectly.");
            }
        }
        catch (ex) {
            throw new HubError_1.default("Fetch Site", "Can not retrieve context.hubRequestOptions from Context Manager. HubSiteManager is configured incorrectly.", ex);
        }
    }
    /**
     * Search for Sites
     *
     * @param filter
     * @param opts
     */
    async search(query, options) {
        // if we were not passed auth, and we have a session, use it
        if (!options.authentication && this.context.session) {
            options.authentication = this.context.session;
        }
        return HubSites_1.searchSites(query, options);
    }
    /**
     * Set the thumbnail for the Site
     * @param id
     * @param file
     * @param filename
     * @param requestOptions
     * @returns
     */
    async updateThumbnail(site, file, filename, requestOptions) {
        const ro = requestOptions || this.context.userRequestOptions;
        await setItemThumbnail_1.setItemThumbnail(site.id, file, filename, ro);
        // get the item so we have updated props and timestamps
        return this.fetch(site.id, requestOptions);
    }
    /**
     * Convert a Hub Project Item to a IHubProject
     * @param item
     * @param requestOptions
     * @returns
     */
    async fromItem(item, requestOptions) {
        const ro = requestOptions || this.context.userRequestOptions;
        return HubSites_1.convertItemToSite(item, ro);
    }
}
exports.HubSiteManager = HubSiteManager;
//# sourceMappingURL=HubSiteManager.js.map