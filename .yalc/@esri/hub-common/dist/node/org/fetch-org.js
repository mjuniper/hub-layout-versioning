"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchOrg = void 0;
const get_prop_1 = require("../objects/get-prop");
const getPortalBaseFromOrgUrl_1 = require("../urls/getPortalBaseFromOrgUrl");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Fetches the portal for a given org.
 *
 * @param orgId
 * @param options request options
 * @returns
 */
function fetchOrg(orgId, options) {
    const orgPortalUrl = get_prop_1.getProp(options, "portal") ||
        get_prop_1.getProp(options, "authentication.portal") ||
        "www.arcgis.com";
    // In order to get the correct response, we must pass options.portal
    // as a base portal url (e.g., www.arcgis.com, qaext.arcgis.com, etc)
    // **not** an org portal (i.e. org.maps.arcgis.com).
    const basePortalUrl = `${getPortalBaseFromOrgUrl_1.getPortalBaseFromOrgUrl(orgPortalUrl)}/sharing/rest`;
    return arcgis_rest_portal_1.getPortal(orgId, Object.assign(Object.assign({}, options), { portal: basePortalUrl }));
}
exports.fetchOrg = fetchOrg;
//# sourceMappingURL=fetch-org.js.map