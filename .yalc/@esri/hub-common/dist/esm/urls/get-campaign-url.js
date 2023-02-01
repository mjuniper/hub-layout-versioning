import { __rest } from "tslib";
import { getPortalUrl } from "./get-portal-url";
import { btoa } from "abab";
import { _getHubUrlFromPortalHostname } from "./_get-hub-url-from-portal-hostname";
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
export function getCampaignUrl(options) {
    const { portal } = options, data = __rest(options, ["portal"]);
    const portalUrl = getPortalUrl(portal);
    const hubURL = _getHubUrlFromPortalHostname(portalUrl);
    const url = new URL(`${hubURL}/c`);
    const b64Data = btoa(JSON.stringify(data));
    url.searchParams.set("d", b64Data);
    return url.toString();
}
//# sourceMappingURL=get-campaign-url.js.map