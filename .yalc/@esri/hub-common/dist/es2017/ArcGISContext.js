import { getProp, getWithDefault } from ".";
/**
 * Hash of Hub API end points so updates
 * are centralized
 */
const hubApiEndpoints = {
    domains: "/api/v3/domains",
    search: "/api/v3/datasets",
    discussions: "/api/discussions/v1",
};
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
export class ArcGISContext {
    /**
     * Create a new instance of `ArcGISContext`.
     *
     * @param opts
     */
    constructor(opts) {
        this._portalUrl = "https://www.arcgis.com";
        this.id = opts.id;
        this._portalUrl = opts.portalUrl;
        this._hubUrl = opts.hubUrl;
        if (opts.authentication) {
            this._authentication = opts.authentication;
        }
        if (opts.portalSelf) {
            this._portalSelf = opts.portalSelf;
        }
        if (opts.currentUser) {
            this._currentUser = opts.currentUser;
        }
        if (opts.properties) {
            this._properties = opts.properties;
        }
    }
    /**
     * Return the UserSession if authenticated
     */
    get session() {
        return this._authentication;
    }
    /**
     * Return boolean indicating if authenticatio is present
     */
    get isAuthenticated() {
        return !!this._authentication;
    }
    /**
     * Return `IUserRequestOptions`, which is used for REST-JS
     * functions which require authentication information.
     *
     * If context is not authenticated, this function will throw
     */
    get userRequestOptions() {
        if (this.isAuthenticated) {
            return {
                authentication: this._authentication,
                portal: this.sharingApiUrl,
            };
        }
    }
    /**
     * Return `IRequestOptions`, which is used by REST-JS functions
     * which *may* use authentication information if provided.
     *
     * If context is not authenticated, this function just returns
     * the `portal` property, which informs REST-JS what Sharing API
     * instance to use (i.e. AGO, Enterprise etc)
     */
    get requestOptions() {
        let ro = {
            portal: this.sharingApiUrl,
        };
        if (this.isAuthenticated) {
            ro = {
                authentication: this._authentication,
                portal: this.sharingApiUrl,
            };
        }
        return ro;
    }
    /**
     * Return a `IHubRequestOptions` object
     */
    get hubRequestOptions() {
        // We may add more logic around what is returned in some corner cases
        return {
            authentication: this.session,
            isPortal: this.isPortal,
            portalSelf: this.portal,
            hubApiUrl: this.hubUrl,
            portal: this.sharingApiUrl,
        };
    }
    /**
     * Return the portal url i.e. https://www.arcgis.com
     *
     * If authenticated @ ArcGIS Online, it will return
     * the https://org.env.arcgis.com
     *
     * If authenticated @ ArcGIS Enterprise, it will return
     * https://{portalHostname}/{webadaptor}
     */
    get portalUrl() {
        if (this.isAuthenticated) {
            if (this.isPortal || !this._portalSelf.urlKey) {
                return `https://${this._portalSelf.portalHostname}`;
            }
            else {
                return `https://${this._portalSelf.urlKey}.${this._portalSelf.customBaseUrl}`;
            }
        }
        else {
            return this._portalUrl;
        }
    }
    /**
     * Returns the url to the sharing api composed from portalUrl
     * i.e. https://myorg.maps.arcgis.com/sharing/rest
     */
    get sharingApiUrl() {
        return `${this.portalUrl}/sharing/rest`;
    }
    /**
     * Returns the Hub url, based on the portalUrl
     *
     * For ArcGIS Enterprise this will return `undefined`
     */
    get hubUrl() {
        return this._hubUrl;
    }
    /**
     * Returns boolean indicating if the backing system
     * is ArcGIS Enterprise (formerly ArcGIS Portal) or not
     */
    get isPortal() {
        return this._portalSelf
            ? this._portalSelf.isPortal
            : this._portalUrl.indexOf("arcgis.com") === -1;
    }
    /**
     * Returns the discussions API URL
     */
    get discussionsServiceUrl() {
        if (this._hubUrl) {
            return `${this._hubUrl}${hubApiEndpoints.discussions}`;
        }
    }
    /**
     * Returns the Hub Search API URL
     */
    get hubSearchServiceUrl() {
        if (this._hubUrl) {
            return `${this._hubUrl}${hubApiEndpoints.search}`;
        }
    }
    /**
     * Returns Hub Domain Service URL
     */
    get domainServiceUrl() {
        if (this._hubUrl) {
            return `${this._hubUrl}${hubApiEndpoints.domains}`;
        }
    }
    /**
     * Returns the Events configuration object from portal/self
     *
     * `{serviceId: '3ef..', publicViewId: 'bc3...'}`
     */
    get eventsConfig() {
        if (this._portalSelf) {
            return getProp(this._portalSelf, "portalProperties.hub.settings.events");
        }
    }
    /**
     * Returns boolean indicating if the current user
     * belongs to an organization that has licensed
     * ArcGIS Hub
     */
    get hubEnabled() {
        return getWithDefault(this._portalSelf, "portalProperties.hub.enabled", false);
    }
    /**
     * Return the Hub Community Org Id, if defined
     */
    get communityOrgId() {
        if (this._portalSelf) {
            return getProp(this._portalSelf, "portalProperties.hub.settings.communityOrg.orgId");
        }
    }
    /**
     * Returns the Hub Community Org Hostname, if defined
     *
     * i.e. c-org.maps.arcgis.com
     */
    get communityOrgHostname() {
        if (this._portalSelf) {
            return getProp(this._portalSelf, "portalProperties.hub.settings.communityOrg.portalHostname");
        }
    }
    /**
     * Returns the Hub Community Org url
     *
     * i.e. https://c-org.maps.arcgis.com
     */
    get communityOrgUrl() {
        if (this.communityOrgHostname) {
            return `https://${this.communityOrgHostname}`;
        }
    }
    /**
     * Returns the hash of helper services from portal self
     */
    get helperServices() {
        if (this._portalSelf) {
            return this._portalSelf.helperServices;
        }
    }
    /**
     * Returns the current user as IUser
     */
    get currentUser() {
        return this._currentUser;
    }
    /**
     * Returns the portal object as IPortal
     */
    get portal() {
        return this._portalSelf;
    }
    /**
     * Return the properties hash that was passed in.
     * Useful for app-specific context such as the active
     * Site for ArcGIS Hub
     */
    get properties() {
        return this._properties;
    }
}
//# sourceMappingURL=ArcGISContext.js.map