import { HubSiteManager } from ".";
import { ArcGISContextManager, } from "./ArcGISContextManager";
import { HubProjectManager } from "./projects/HubProjectManager";
/**
 * Hub class can be used as an entry point to managing
 * content, teams, sites, projects etc, in an organization's Hub.
 *
 * ```js
 * import {Hub} from '@esri/hub-common';
 * // create a Hub instance, authenticating as a specific user
 * // working against arcgis online
 * const myHub = await Hub.create({authOptions: {username: "casey", password: "jones"}});
 *
 * myHub.context.currentUser //=> {username: "casey", ...} as IUser
 *
 * const pavingProject = await myHub.projects.create({name: "12th Street Paving"});
 * pavingProject.summary = "This is the 2024 planned paving of 12th Street, between 8th and 11th Ave";
 * await myHub.projects.update(pavingProject);
 * ```
 *
 * This is a convenience class. Hub Managers can be created
 * directly, or the underlying functions can be imported an used
 * as need for scenarios where these class structures introduce
 * unwanted complexity
 */
export class Hub {
    /**
     * Private so we can employ a factory function to do
     * async work during creation
     * @param contextManager
     */
    constructor(contextManager) {
        this._contextManager = contextManager;
    }
    /**
     * Factory function to construct a new Hub instance.
     * @param contextManager
     * @returns
     */
    static async create(options) {
        if (options.contextManager) {
            return new Hub(options.contextManager);
        }
        else {
            const opts = options.managerOptions || {};
            const mgr = await ArcGISContextManager.create(opts);
            return new Hub(mgr);
        }
    }
    /**
     * Get the context
     * @readonly
     * @memberof Hub
     */
    get context() {
        return this._contextManager.context;
    }
    /**
     * HubProjectManager for the current Hub
     *
     * @readonly
     * @memberof Hub
     */
    get projects() {
        if (!this._projectManager) {
            this._projectManager = HubProjectManager.init(this._contextManager);
        }
        return this._projectManager;
    }
    /**
     * HubSiteManager for the current Hub
     *
     * @readonly
     * @memberof Hub
     */
    get sites() {
        if (!this._siteManager) {
            this._siteManager = HubSiteManager.init(this._contextManager);
        }
        return this._siteManager;
    }
}
//# sourceMappingURL=Hub.js.map