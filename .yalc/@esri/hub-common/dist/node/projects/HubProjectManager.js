"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubProjectManager = void 0;
const HubProjects_1 = require("./HubProjects");
// Node has issues if this is not directly imported
const ArcGISContextManager_1 = require("../ArcGISContextManager");
const __1 = require("..");
const setItemThumbnail_1 = require("../items/setItemThumbnail");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const utils_1 = require("../utils");
/**
 * Centralized functions used to manage IHubProject instances
 *
 * This class is a convenience wrapper over util functions which
 * are also directly accessible for use in scenarios where
 * classes are inconvenient.
 */
class HubProjectManager {
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
        return new HubProjectManager(contextOrManager);
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
     * Create and store new project.
     *
     * Projects are stored as Items in the Sharing API
     * @param project
     * @param requestOptions
     * @returns
     */
    async create(project, requestOptions) {
        if (requestOptions || this.context.isAuthenticated) {
            // ammend in the orgUrlKey
            if (!project.orgUrlKey) {
                project.orgUrlKey = this.context.portal.urlKey;
            }
            return HubProjects_1.createProject(project, requestOptions || this.context.userRequestOptions);
        }
        else {
            throw new __1.HubError("Create Project", "Creating Hub Projects requires authentication.");
        }
    }
    /**
     * Update a project
     * @param project
     * @param requestOptions
     * @returns
     */
    async update(project, requestOptions) {
        if (requestOptions || this.context.isAuthenticated) {
            return HubProjects_1.updateProject(project, requestOptions || this.context.userRequestOptions);
        }
        else {
            throw new __1.HubError("Update Project", "Updating Hub Projects requires authentication.");
        }
    }
    /**
     * Destroy a project.
     * This permanently removes the backing Item
     * @param id
     * @param requestOptions
     * @returns
     */
    async destroy(id, requestOptions) {
        if (requestOptions || this.context.isAuthenticated) {
            return HubProjects_1.destroyProject(id, requestOptions || this.context.userRequestOptions);
        }
        else {
            throw new __1.HubError("Destroy Project", "Destroying Hub Projects requires authentication.");
        }
    }
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
    async fetch(identifier, requestOptions) {
        if (requestOptions || this.context.requestOptions) {
            return HubProjects_1.fetchProject(identifier, requestOptions || this.context.requestOptions);
        }
        else {
            throw new __1.HubError("Fetch Project", "Can not retrieve context.requestOptions from Context Manager. HubProjectManager is configured incorrectly.");
        }
    }
    /**
     * Search for Projects
     *
     * @param query
     * @param options
     */
    async search(query, options) {
        // if we were not passed auth, and we have a session, use it
        if (!options.authentication && this.context.session) {
            options.authentication = this.context.session;
        }
        return HubProjects_1.searchProjects(query, options);
    }
    /**
     * Set the thumbnail for the Project
     * @param id
     * @param file
     * @param filename
     * @param requestOptions
     * @returns
     */
    async updateThumbnail(project, file, filename, requestOptions) {
        const ro = requestOptions || this.context.userRequestOptions;
        await setItemThumbnail_1.setItemThumbnail(project.id, file, filename, ro);
        // get the item so we have updated props and timestamps
        return this.fetch(project.id, requestOptions);
    }
    /**
     * Convert a Hub Project Item to a IHubProject
     * @param item
     * @param requestOptions
     * @returns
     */
    async fromItem(item, requestOptions) {
        const ro = requestOptions || this.context.userRequestOptions;
        return HubProjects_1.convertItemToProject(item, ro);
    }
    /**
     * Sets the access level of a Hub Project
     *
     * @param {IHubProject} project
     * @param {("public" | "org" | "private")} accessLevel
     * @param {IUserRequestOptions} [requestOptions]
     * @returns
     */
    async setAccess(project, accessLevel, requestOptions) {
        if (requestOptions || this.context.isAuthenticated) {
            const ro = requestOptions || this.context.userRequestOptions;
            return arcgis_rest_portal_1.setItemAccess(Object.assign({ id: project.id, owner: project.owner, access: accessLevel }, ro));
        }
        else {
            throw new __1.HubError("Set Project Access", "Setting Hub Projects access level requires authentication.");
        }
    }
    /**
     * Shares a Hub Project to a group
     *
     * @param {IHubProject} project
     * @param {IGroup} group
     * @param {IUserRequestOptions} [requestOptions]
     * @returns
     */
    async shareToGroup(project, group, requestOptions) {
        if (requestOptions || this.context.isAuthenticated) {
            const ro = requestOptions || this.context.userRequestOptions;
            return arcgis_rest_portal_1.shareItemWithGroup(Object.assign({ id: project.id, owner: project.owner, groupId: group.id, confirmItemControl: utils_1.isUpdateGroup(group) }, ro));
        }
        else {
            throw new __1.HubError("Share Project to Group", "Sharing Hub Projects to group requires authentication.");
        }
    }
    /**
     * Shares a Hub Project to N Groups.
     *
     * @param {IHubProject} project
     * @param {IGroup[]} groups
     * @param {IUserRequestOptions} [requestOptions]
     * @returns
     */
    async shareToGroups(project, groups, requestOptions) {
        if (requestOptions || this.context.isAuthenticated) {
            const failSafeShare = utils_1.failSafe(this.shareToGroup);
            return Promise.all(groups.map((group) => failSafeShare(project, group, requestOptions)));
        }
        else {
            throw new __1.HubError("Share Project to Groups", "Sharing Hub Projects to groups requires authentication.");
        }
    }
    /**
     * Unshares a Hub Project from a group
     *
     * @param {IHubProject} project
     * @param {IGroup} group
     * @param {IUserRequestOptions} [requestOptions]
     * @returns
     */
    async unshareFromGroup(project, group, requestOptions) {
        if (requestOptions || this.context.isAuthenticated) {
            const ro = requestOptions || this.context.userRequestOptions;
            return arcgis_rest_portal_1.unshareItemWithGroup(Object.assign({ id: project.id, owner: project.owner, groupId: group.id }, ro));
        }
        else {
            throw new __1.HubError("Unshare Project from Group", "Unsharing Hub Project from group requires authentication.");
        }
    }
    /**
     * Unshares a Hub Project from N groups.
     *
     * @param {IHubProject} project
     * @param {IGroup[]} groups
     * @param {IUserRequestOptions} [requestOptions]
     * @returns
     */
    async unshareFromGroups(project, groups, requestOptions) {
        if (requestOptions || this.context.isAuthenticated) {
            const failSafeUnshare = utils_1.failSafe(this.unshareFromGroup);
            return Promise.all(groups.map((group) => failSafeUnshare(project, group, requestOptions)));
        }
        else {
            throw new __1.HubError("Unshare Project from Groups", "Unsharing Hub Project from groups requires authentication.");
        }
    }
}
exports.HubProjectManager = HubProjectManager;
//# sourceMappingURL=HubProjectManager.js.map