import { IUser, IUserRequestOptions, UserSession } from "@esri/arcgis-rest-auth";
import { IPortal } from "@esri/arcgis-rest-portal";
import { IRequestOptions } from "@esri/arcgis-rest-request";
import { HubSystemStatus, IHubRequestOptions } from "./index";
import { HubLicense } from "./permissions/types";
/**
 * Defines the properties of the ArcGISContext.
 * Typically components or functions will get an instance
 * of `ArcGISContext` from `ArcGISContetManager`.
 *
 * `ArcGISContext` implements this interface, and uses
 * getters to simplify the derivation of various complex properties.
 *
 */
export interface IArcGISContext {
    /**
     * Unique id from the ArcGISContextManager that created
     * this instance. Primarily useful for debugging possible
     * race-conditions that can result in multiple ArcGISContextManager
     * instances being created.
     */
    id: number;
    /**
     * Return the UserSession if authenticated
     */
    session: UserSession;
    /**
     * Return boolean indicating if authenticatio is present
     */
    isAuthenticated: boolean;
    /**
     * Return `IUserRequestOptions`, which is used for REST-JS
     * functions which require authentication information.
     *
     * If context is not authenticated, this function will return `undefined`
     */
    userRequestOptions: IUserRequestOptions;
    /**
     * Return `IRequestOptions`, which is used by REST-JS functions
     * which *may* use authentication information if provided.
     *
     * If context is not authenticated, this function just returns
     * the `portal` property, which informs REST-JS what Sharing API
     * instance to use (i.e. AGO, Enterprise etc)
     */
    requestOptions: IRequestOptions;
    /**
     * Return a `IHubRequestOptions` object
     *
     * If context is not authenticated, this function will return `undefined`
     */
    hubRequestOptions: IHubRequestOptions;
    /**
     * Return the portal url.
     *
     * If authenticated @ ArcGIS Online, it will return
     * the https://org.env.arcgis.com
     *
     * If authenticated @ ArcGIS Enterprise, it will return
     * https://{portalHostname}/{webadaptor}
     */
    portalUrl: string;
    /**
     * Returns the url to the sharing api composed from portalUrl
     * i.e. https://myorg.maps.arcgis.com/sharing/rest
     */
    sharingApiUrl: string;
    /**
     * Returns the Hub url, based on the portalUrl
     *
     * For ArcGIS Enterprise this will return `undefined`
     */
    hubUrl: string;
    /**
     * Returns boolean indicating if the backing system
     * is ArcGIS Enterprise (formerly ArcGIS Portal) or not
     */
    isPortal: boolean;
    /**
     * Returns the discussions API URL
     */
    discussionsServiceUrl: string;
    /**
     * Returns the Hub Search API URL
     */
    hubSearchServiceUrl: string;
    /**
     * Returns Hub Domain Service URL
     */
    domainServiceUrl: string;
    /**
     * Returns the Events configuration object from portal/self
     *
     * `{serviceId: '3ef..', publicViewId: 'bc3...'}`
     */
    eventsConfig: any;
    /**
     * Returns boolean indicating if the current user
     * belongs to an organization that has licensed
     * ArcGIS Hub
     */
    hubEnabled: boolean;
    /**
     * Return Hub Community Org Id, if defined
     */
    communityOrgId: string;
    /**
     * Returns the Community Org Hostname, if defined
     */
    communityOrgHostname: string;
    /**
     * Returns the Hub Community Org url
     *
     * i.e. https://c-org.maps.arcgis.com
     */
    communityOrgUrl: string;
    /**
     * Returns the hash of helper services from portal self
     */
    helperServices: any;
    /**
     * Returns the current user
     */
    currentUser: IUser;
    /**
     * Returns the portal object
     */
    portal: IPortal;
    /**
     * What is the current user's hub license level?
     */
    hubLicense: HubLicense;
    /**
     * Additional app-specific context
     */
    properties: Record<string, any>;
    /**
     * System status
     */
    systemStatus: HubSystemStatus;
    /**
     * Is this user in a Hub Alpha org?
     * Derived from properties.alphaOrgs
     */
    isAlphaOrg: boolean;
}
/**
 * Options for the ArcGISContext constructor
 */
export interface IArcGISContextOptions {
    /**
     * Unique id from the ArcGISContextManager that created
     * this instance. Primarily useful for debugging possible
     * race-conditions that can result in multiple ArcGISContextManager
     * instances being created.
     */
    id: number;
    /**
     * Portal base url
     * For ArcGIS Online - https://org.env.arcgis.com
     * For ArcGIS Enterprise - https://{portalHostname}/{webadaptor}
     */
    portalUrl: string;
    /**
     * Hub Url that corresponds to the portal url is appropritate
     */
    hubUrl?: string;
    /**
     * The current UserSession
     */
    authentication?: UserSession;
    /**
     * If the user is authenticated, the portal should be passed in
     * so various getters can work as expected.
     *
     * ArcGISContextManager handles this internally
     */
    portalSelf?: IPortal;
    /**
     * If the user is authenticated, the user should be passed in
     * so various getters can work as expected.
     *
     * ArcGISContextManager handles this internally
     */
    currentUser?: IUser;
    /**
     * Optional hash of additional context
     */
    properties?: Record<string, any>;
    /**
     * Option to pass in system status vs fetching it
     */
    systemStatus?: HubSystemStatus;
}
/**
 * Abstraction that holds a `UserSession`, along with
 * getters to streamline access to various platform
 * urls, and common constructs like `IRequestOptions`,
 * `IUserRequestOptions` etc.
 *
 * Instances are intended to be immutable, but this is not directly enforced.
 *
 * In most circumstances, this class should be created by
 * the ArcGISContextManager class.
 */
export declare class ArcGISContext implements IArcGISContext {
    /**
     * Unique id from the ArcGISContextManager that created
     * this instance. Primarily useful for debugging possible
     * race-conditions that can result in multiple ArcGISContextManager
     * instances being created.
     */
    id: number;
    private _authentication;
    private _portalUrl;
    private _hubUrl;
    private _portalSelf;
    private _currentUser;
    private _properties;
    private _systemStatus;
    /**
     * Create a new instance of `ArcGISContext`.
     *
     * @param opts
     */
    constructor(opts: IArcGISContextOptions);
    /**
     * Return the UserSession if authenticated
     */
    get session(): UserSession;
    /**
     * Return boolean indicating if authenticatio is present
     */
    get isAuthenticated(): boolean;
    /**
     * Is the users org in the alpha orgs list?
     * Alpha orgs are passed in via properties.alphaOrgs
     */
    get isAlphaOrg(): boolean;
    /**
     * Return `IUserRequestOptions`, which is used for REST-JS
     * functions which require authentication information.
     *
     * If context is not authenticated, this function will throw
     */
    get userRequestOptions(): IUserRequestOptions;
    /**
     * Return `IRequestOptions`, which is used by REST-JS functions
     * which *may* use authentication information if provided.
     *
     * If context is not authenticated, this function just returns
     * the `portal` property, which informs REST-JS what Sharing API
     * instance to use (i.e. AGO, Enterprise etc)
     */
    get requestOptions(): IRequestOptions;
    /**
     * Return a `IHubRequestOptions` object
     */
    get hubRequestOptions(): IHubRequestOptions;
    /**
     * Return the portal url i.e. https://www.arcgis.com
     *
     * If authenticated @ ArcGIS Online, it will return
     * the https://org.env.arcgis.com
     *
     * If authenticated @ ArcGIS Enterprise, it will return
     * https://{portalHostname}/{webadaptor}
     */
    get portalUrl(): string;
    /**
     * Returns the current user's Hub License
     */
    get hubLicense(): HubLicense;
    /**
     * Returns the current hub system status information
     */
    get systemStatus(): HubSystemStatus;
    /**
     * Returns the url to the sharing api composed from portalUrl
     * i.e. https://myorg.maps.arcgis.com/sharing/rest
     */
    get sharingApiUrl(): string;
    /**
     * Returns the Hub url, based on the portalUrl
     *
     * For ArcGIS Enterprise this will return `undefined`
     */
    get hubUrl(): string;
    /**
     * Returns boolean indicating if the backing system
     * is ArcGIS Enterprise (formerly ArcGIS Portal) or not
     */
    get isPortal(): boolean;
    /**
     * Returns the discussions API URL
     */
    get discussionsServiceUrl(): string;
    /**
     * Returns the Hub Search API URL
     */
    get hubSearchServiceUrl(): string;
    /**
     * Returns Hub Domain Service URL
     */
    get domainServiceUrl(): string;
    /**
     * Returns the Events configuration object from portal/self
     *
     * `{serviceId: '3ef..', publicViewId: 'bc3...'}`
     */
    get eventsConfig(): any;
    /**
     * Returns boolean indicating if the current user
     * belongs to an organization that has licensed
     * ArcGIS Hub
     */
    get hubEnabled(): boolean;
    /**
     * Return the Hub Community Org Id, if defined
     */
    get communityOrgId(): string;
    /**
     * Returns the Hub Community Org Hostname, if defined
     *
     * i.e. c-org.maps.arcgis.com
     */
    get communityOrgHostname(): string;
    /**
     * Returns the Hub Community Org url
     *
     * i.e. https://c-org.maps.arcgis.com
     */
    get communityOrgUrl(): string;
    /**
     * Returns the hash of helper services from portal self
     */
    get helperServices(): any;
    /**
     * Returns the current user as IUser
     */
    get currentUser(): IUser;
    /**
     * Returns the portal object as IPortal
     */
    get portal(): IPortal;
    /**
     * Return the properties hash that was passed in.
     * Useful for app-specific context such as the active
     * Site for ArcGIS Hub
     */
    get properties(): Record<string, any>;
}
