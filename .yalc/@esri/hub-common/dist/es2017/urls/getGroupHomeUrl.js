import { getPortalUrl } from "./get-portal-url";
/**
 * Return the URL of the group's page in the Portal Home application
 * @param groupId The group's ID
 * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
 * @returns URL to the groups's url, defaults to `https://www.arcgis.com/home/group.html?id={group.id}`
 */
export function getGroupHomeUrl(groupId, portalUrlOrObject) {
    const portalUrl = getPortalUrl(portalUrlOrObject);
    return `${portalUrl}/home/group.html?id=${groupId}`;
}
//# sourceMappingURL=getGroupHomeUrl.js.map