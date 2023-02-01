"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserHomeUrl = void 0;
const get_portal_url_1 = require("./get-portal-url");
/**
 * Return the URL of the user's page in the Portal Home application
 * @param username The username
 * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
 * @returns URL to the user's profile, defaults to `https://www.arcgis.com/home/user.html?user={username}`
 */
function getUserHomeUrl(username, portalUrlOrObject) {
    const portalUrl = get_portal_url_1.getPortalUrl(portalUrlOrObject);
    return `${portalUrl}/home/user.html?user=${username}`;
}
exports.getUserHomeUrl = getUserHomeUrl;
//# sourceMappingURL=getUserHomeUrl.js.map