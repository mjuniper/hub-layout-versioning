import { IPortal } from "@esri/arcgis-rest-portal";
import { IUser, UserSession } from "@esri/arcgis-rest-auth";
import { IArcGISContext } from "./ArcGISContext";
import { Level } from "./utils/logger";
import { HubSystemStatus } from "./core";
/**
 * Options that can be passed into `ArcGISContextManager.create`
 */
export interface IArcGISContextManagerOptions {
    /**
     * Existing user session, which may be created from Identity Manager
     * `const session = UserSession.fromCredential(idMgr.getCredential());`
     */
    authentication?: UserSession;
    /**
     * ArcGIS Online or ArcGIS Enterprise portal url.
     * Do not include  `/sharing/rest`
     * Defaults to `https://www.arcgis.com`
     * For ArcGIS Enterprise, you must include the webadaptor name.
     * i.e. https://gis.mytown.gov/portal
     *
     * When Authentication is present, the UserSession.portal value is
     * used instead of this property.
     */
    portalUrl?: string;
    /**
     * Portal self for the authenticated user. If not passed into `.create`
     * with the UserSession, it will be fetched
     */
    portal?: IPortal;
    /**
     * Current user as `IUser`. If not passed into `.create` with the UserSession
     * it will be fetched.
     */
    currentUser?: IUser;
    /**
     * Any additional properties to expose on the context. This allows
     * an application to send additional context into the system.
     * For example, in ArcGIS Hub, many times we want to pass in the
     * active "Hub Site" as additional context, so we will send that in
     * as a node on a properties object.
     */
    properties?: Record<string, any>;
    /**
     * Logging level
     * off > error > warn > info > debug > all
     * defaults to 'error'
     */
    logLevel?: Level;
    /**
     * Option to pass in system status vs fetching it
     */
    systemStatus?: HubSystemStatus;
}
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
export declare class ArcGISContextManager {
    /**
     * Random identifier useful for debugging issues
     * where race-conditions can result in multiple
     * contexts getting created
     */
    id: number;
    private _context;
    private _authentication;
    private _portalUrl;
    private _properties;
    private _hubUrl;
    private _portalSelf;
    private _currentUser;
    private _logLevel;
    private _systemStatus;
    /**
     * Private constructor. Use `ArcGISContextManager.create(...)` to
     * instantiate an instance
     * @param opts
     */
    private constructor();
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
    static create(opts?: IArcGISContextManagerOptions): Promise<ArcGISContextManager>;
    /**
     * Set the Authentication (UserSession) for the context.
     * This should be called when a user signs into a running
     * application.
     * @param auth
     */
    setAuthentication(auth: UserSession): Promise<void>;
    /**
     * Set the properties hash and re-create the context
     * @param properties
     */
    setProperties(properties: Record<string, any>): void;
    /**
     * Clear the Authentication (UserSession). This should be
     * called when a user signs out of an application, but
     * the application continues running
     */
    clearAuthentication(): void;
    /**
     * Return a reference to the current state.
     * When `.setAuthentication()` or `.clearAuthenentication()` are
     * called, the state will be re-created. This is done so frameworks
     * like React or Ember can detect changes.
     */
    get context(): IArcGISContext;
    /**
     * If we have a UserSession, fetch portal/self and
     * store that along with current user
     */
    private initialize;
    /**
     * Getter to streamline the creation of updated Context instances
     */
    private get contextOpts();
}
