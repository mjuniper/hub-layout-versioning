import { getSelf, getUser } from "@esri/arcgis-rest-portal";
import { ArcGISContext, } from "./ArcGISContext";
import { getHubApiFromPortalUrl } from "./urls/getHubApiFromPortalUrl";
import { getPortalBaseFromOrgUrl } from "./urls/getPortalBaseFromOrgUrl";
import { Level, Logger } from "./utils/logger";
import { cloneObject } from "./util";
/**
 * The manager exposes context (`IArcGISContext`), which combines a `UserSession` with
 * the `portal/self` and `user/self` responses to provide a central lookup for platform
 * information, api urls, and other useful properties for developers such as IRequestOptions
 * IUserRequestOptions, IHubRequestOptions etc.
 *
 * The context is exposed on gthe `.context` property, and as the authentication changes
 * the `.context` is re-created. This is done to allow web frameworks to watch for
 * changes on that single property, instead of having to leverage observers or events
 * for change detection.
 *
 * Please see the [ArcGISContext Guide](/hub.js/guides/context) for additional information.
 *
 */
export class ArcGISContextManager {
    /**
     * Private constructor. Use `ArcGISContextManager.create(...)` to
     * instantiate an instance
     * @param opts
     */
    constructor(opts) {
        this._portalUrl = "https://www.arcgis.com";
        this._logLevel = Level.error;
        // Having a unique id makes debugging easier
        this.id = new Date().getTime();
        if (opts.logLevel) {
            this._logLevel = opts.logLevel;
        }
        Logger.setLogLevel(this._logLevel);
        Logger.debug(`ArcGISContextManager:ctor: Creating ${this.id}`);
        if (opts.properties) {
            this._properties = opts.properties;
        }
        if (opts.authentication) {
            this._authentication = opts.authentication;
            this._portalUrl = this._authentication.portal.replace("/sharing/rest", "");
            this._hubUrl = getHubApiFromPortalUrl(this._portalUrl);
        }
        else if (opts.portalUrl) {
            this._portalUrl = opts.portalUrl;
            this._hubUrl = getHubApiFromPortalUrl(this._portalUrl);
        }
        else {
            this._hubUrl = getHubApiFromPortalUrl(this._portalUrl);
        }
        if (opts.portal) {
            this._portalSelf = cloneObject(opts.portal);
        }
        if (opts.currentUser) {
            this._currentUser = cloneObject(opts.currentUser);
        }
        if (opts.systemStatus) {
            this._systemStatus = opts.systemStatus;
        }
    }
    /**
     * Used to create a new instance of the ArcGISContext class.
     *
     * ```js
     * const ctxMgr = await ArcGISContextManager.create();
     * ```
     *
     * @param opts
     * @returns
     */
    static async create(opts = {}) {
        const ctx = new ArcGISContextManager(opts);
        await ctx.initialize();
        return ctx;
    }
    /**
     * Set the Authentication (UserSession) for the context.
     * This should be called when a user signs into a running
     * application.
     * @param auth
     */
    async setAuthentication(auth) {
        this._authentication = auth;
        this._portalUrl = auth.portal.replace("/sharing/rest", "");
        await this.initialize();
    }
    /**
     * Set the properties hash and re-create the context
     * @param properties
     */
    setProperties(properties) {
        this._properties = properties;
        this._context = new ArcGISContext(this.contextOpts);
    }
    /**
     * Clear the Authentication (UserSession). This should be
     * called when a user signs out of an application, but
     * the application continues running
     */
    clearAuthentication() {
        // Reset the portalUrl from the org url to the base url
        // for ArcGIS Enterprise, we just leave the _portalUrl as-is
        if (!this._context.isPortal) {
            this._portalUrl = getPortalBaseFromOrgUrl(this._portalUrl);
        }
        // Clear the auth, portalSelf and currentUser props
        this._authentication = null;
        this._portalSelf = null;
        this._currentUser = null;
        this._context = new ArcGISContext(this.contextOpts);
    }
    /**
     * Return a reference to the current state.
     * When `.setAuthentication()` or `.clearAuthenentication()` are
     * called, the state will be re-created. This is done so frameworks
     * like React or Ember can detect changes.
     */
    get context() {
        return this._context;
    }
    /**
     * If we have a UserSession, fetch portal/self and
     * store that along with current user
     */
    async initialize() {
        // if we have auth, and don't have portalSelf or currentUser, fetch them
        if (this._authentication && (!this._portalSelf || !this._currentUser)) {
            Logger.debug(`ArcGISContextManager-${this.id}: Initializing`);
            const username = this._authentication.username;
            const requests = [
                getSelf({ authentication: this._authentication }),
                getUser({ username, authentication: this._authentication }),
            ];
            try {
                const [portal, user] = await Promise.all(requests);
                this._portalSelf = portal;
                this._currentUser = user;
                Logger.debug(`ArcGISContextManager-${this.id}: received portalSelf and currentUser`);
            }
            catch (ex) {
                const msg = `ArcGISContextManager could not fetch portal & user for "${this._authentication.username}" using ${this._authentication.portal}.`;
                Logger.error(msg);
                // tslint:disable-next-line:no-console
                console.error(msg);
                throw ex;
            }
        }
        // get system status
        if (!this._systemStatus) {
            this._systemStatus = await getSystemStatus(this._portalUrl);
        }
        Logger.debug(`ArcGISContextManager-${this.id}: updating context`);
        // update the context
        this._context = new ArcGISContext(this.contextOpts);
    }
    /**
     * Getter to streamline the creation of updated Context instances
     */
    get contextOpts() {
        const contextOpts = {
            id: this.id,
            portalUrl: this._portalUrl,
            hubUrl: this._hubUrl,
            properties: this._properties,
            systemStatus: this._systemStatus,
        };
        if (this._authentication) {
            contextOpts.authentication = this._authentication;
        }
        if (this._portalSelf) {
            contextOpts.portalSelf = this._portalSelf;
        }
        if (this._currentUser) {
            contextOpts.currentUser = this._currentUser;
        }
        return contextOpts;
    }
}
/**
 * Temporary fake implementation based on isPortal
 * which we have during the initialization
 * @param hubApiUrl
 */
function getSystemStatus(portalUrl) {
    let status = HUB_STATUS;
    const isPortal = portalUrl.indexOf("arcgis.com") === -1;
    // When we move to fetching the system status from the API
    // we can use
    // const hubApiUrl = getHubApiFromPortalUrl(portalUrl);
    if (isPortal) {
        status = ENTERPRISE_SITES_STATUS;
    }
    return Promise.resolve(status);
}
const ENTERPRISE_SITES_STATUS = {
    discussions: "not-available",
    events: "not-available",
    initiatives: "not-available",
    items: "online",
    metrics: "not-available",
    notifications: "not-available",
    pages: "online",
    projects: "not-available",
    search: "online",
    sites: "online",
};
const HUB_STATUS = {
    discussions: "online",
    events: "online",
    initiatives: "online",
    items: "online",
    metrics: "online",
    notifications: "online",
    pages: "online",
    projects: "online",
    search: "online",
    sites: "online",
};
//# sourceMappingURL=ArcGISContextManager.js.map