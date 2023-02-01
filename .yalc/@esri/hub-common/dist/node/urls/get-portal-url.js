"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPortalUrl = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * ```js
 * import { getPortalUrl } from "@esri/hub-common";
 * // from a portal API URL
 * let portalUrl = getPortalUrl("https://org.maps.arcgis.com/sharing/rest"); // https://org.maps.arcgis.com
 * // from an enterprise portal self response (IPortal)
 * let portalSelf = { isPortal: true, portalHostname: "server.example.org" };
 * portalUrl = getPortalUrl(portalSelf); // https://server.example.org
 * // from an online portal self response (IPortal)
 * portalSelf = { isPortal: false, urlKey: "org", customBaseUrl: "maps.arcgis.com" };
 * portalUrl = getPortalUrl(portalSelf); // https://org.maps.arcgis.com
 * // from hub request options (IHubRequestOptions) with a portal self (IPortal)
 * let requestOptions = { isPortal: false, portalSelf };
 * portalUrl = getPortalUrl(requestOptions); // https://org.maps.arcgis.com
 * // from request options (IRequestOptions) with a portal (string)
 * requestOptions = { portal: "https://org.maps.arcgis.com/sharing/rest" };
 * portalUrl = getPortalUrl(requestOptions); // https://org.maps.arcgis.com
 * ```
 * Derive a portal's base URL from the portal's API URL, a portal object, or request options
 * @param urlOrObject a portal API URL, a portal object, or request options containing either of those
 * @returns The portal base URL, defaults to `https://www.arcgis.com`
 */
function getPortalUrl(urlOrObject) {
    if (typeof urlOrObject === "string") {
        // assume this is the URL of the portal API
        // and strip the `/sharing/rest`
        return urlOrObject.replace(/\/sharing\/rest\/?$/, "");
    }
    if (typeof urlOrObject === "object") {
        // build URL from portal self object, which could be
        // either a property of the object (request options) or the object itself
        const portalSelf = urlOrObject.portalSelf;
        const portal = portalSelf || urlOrObject;
        const { portalHostname, urlKey, customBaseUrl } = portal;
        if (portalHostname || (urlKey && customBaseUrl)) {
            // user passed in a portal object, we'll use that to build the URL
            if (portal.isPortal) {
                return `https://${portal.portalHostname}`;
            }
            else {
                return `https://${portal.urlKey}.${portal.customBaseUrl}`;
            }
        }
    }
    // urlOrObj is either undefined, or a request options w/o portal self
    // get portal API URL and parse portal URL from that
    return getPortalUrl(arcgis_rest_portal_1.getPortalUrl(urlOrObject));
}
exports.getPortalUrl = getPortalUrl;
//# sourceMappingURL=get-portal-url.js.map