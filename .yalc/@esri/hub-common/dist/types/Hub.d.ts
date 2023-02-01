import { ArcGISContextManager, IArcGISContextManagerOptions } from "./ArcGISContextManager";
/**
 * Options for instantiating a Hub instance
 */
export interface IHubOptions {
    contextManager?: ArcGISContextManager;
    managerOptions?: IArcGISContextManagerOptions;
    authOptions?: {
        usename: string;
        password: string;
        portalUrl?: string;
    };
}
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
export declare class Hub {
    /**
     * Hold a context manager, which should be a single instance for
     * an application. When authentication changes, the .context
     * property on the context manager will be replaced. As long as
     * all the fns in this class leverage properties on .context
     * everything will be kept in sync.
     */
    private _contextManager;
    /**
     * Private so we can employ a factory function to do
     * async work during creation
     * @param contextManager
     */
    private constructor();
    /**
     * Factory function to construct a new Hub instance.
     * @param contextManager
     * @returns
     */
    static create(options: IHubOptions): Promise<Hub>;
    /**
     * Get the context
     * @readonly
     * @memberof Hub
     */
    get context(): import("./ArcGISContext").IArcGISContext;
}
