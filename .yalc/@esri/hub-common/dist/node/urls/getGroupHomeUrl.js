"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupHomeUrl = void 0;
const get_portal_url_1 = require("./get-portal-url");
/**
 * Return the URL of the group's page in the Portal Home application
 * @param groupId The group's ID
 * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
 * @returns URL to the groups's url, defaults to `https://www.arcgis.com/home/group.html?id={group.id}`
 */
function getGroupHomeUrl(groupId, portalUrlOrObject) {
    const portalUrl = get_portal_url_1.getPortalUrl(portalUrlOrObject);
    return `${portalUrl}/home/group.html?id=${groupId}`;
}
exports.getGroupHomeUrl = getGroupHomeUrl;
//# sourceMappingURL=getGroupHomeUrl.js.map