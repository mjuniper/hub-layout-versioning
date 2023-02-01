import { _getDomainServiceUrl } from "./_get-domain-service-url";
import { _getAuthHeader } from "./_get-auth-header";
import { _checkStatusAndParseJson } from "./_check-status-and-parse-json";
/**
 * Get a list
 * @param {string} siteId Item id of the Site
 * @param {IHubRequestOptions} hubRequestOptions
 */
export function getDomainsForSite(siteId, hubRequestOptions) {
    if (hubRequestOptions.isPortal) {
        return Promise.resolve([]);
    }
    const url = `${_getDomainServiceUrl(hubRequestOptions.hubApiUrl)}?siteId=${siteId}`;
    const headers = _getAuthHeader(hubRequestOptions);
    return fetch(url, { method: "GET", headers, mode: "cors" })
        .then(_checkStatusAndParseJson)
        .catch((err) => {
        throw Error(`Error in getDomainsForSite ${err}`);
    });
}
//# sourceMappingURL=get-domains-for-site.js.map