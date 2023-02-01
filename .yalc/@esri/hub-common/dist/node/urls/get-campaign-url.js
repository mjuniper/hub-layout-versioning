"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCampaignUrl = void 0;
const tslib_1 = require("tslib");
const get_portal_url_1 = require("./get-portal-url");
const abab_1 = require("abab");
const _get_hub_url_from_portal_hostname_1 = require("./_get-hub-url-from-portal-hostname");
/**
 * Builds a Hub "campaign" URL used as a single entry-point into
 * Hub from external links, i.e. push notifications, emails, sms, etc,
 * from which we can capture campaign-related telemetry before redirecting
 * the user off to a provided destination.
 * @param options.portal A string IPortal IHubRequestOptions or IRequestOptions object
 * @param options.uri A URI that provides additional context for how to parse the provide meta
 * @param options.meta An object of metadata for the campaign URL
 * @param options.redirectURL A redirect URL
 * @returns string A campaign URL
 */
function getCampaignUrl(options) {
    const { portal } = options, data = tslib_1.__rest(options, ["portal"]);
    const portalUrl = get_portal_url_1.getPortalUrl(portal);
    const hubURL = _get_hub_url_from_portal_hostname_1._getHubUrlFromPortalHostname(portalUrl);
    const url = new URL(`${hubURL}/c`);
    const b64Data = abab_1.btoa(JSON.stringify(data));
    url.searchParams.set("d", b64Data);
    return url.toString();
}
exports.getCampaignUrl = getCampaignUrl;
//# sourceMappingURL=get-campaign-url.js.map