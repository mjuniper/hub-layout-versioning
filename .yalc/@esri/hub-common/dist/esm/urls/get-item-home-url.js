import { getPortalUrl } from "./get-portal-url";
/**
 * Return the URL of the item's page in the Portal Home application
 * @param itemId The item's ID
 * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
 * @returns URL to the item's data REST end point, defaults to `https://www.arcgis.com/home/item.html?id={item.id}`
 */
export function getItemHomeUrl(itemId, portalUrlOrObject) {
    const portalUrl = getPortalUrl(portalUrlOrObject);
    return `${portalUrl}/home/item.html?id=${itemId}`;
}
//# sourceMappingURL=get-item-home-url.js.map