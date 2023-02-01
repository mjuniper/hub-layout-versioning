"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDomain = void 0;
const _get_auth_header_1 = require("./_get-auth-header");
const _get_domain_service_url_1 = require("./_get-domain-service-url");
/**
 * Validate a custom domain
 * @param {string} hostname to validate
 * @param {IHubRequestOptions} hubRequestOptions
 */
function isValidDomain(hostname, hubRequestOptions) {
    if (hubRequestOptions.isPortal) {
        throw new Error(`isValidDomain is not available in ArcGIS Enterprise.`);
    }
    const url = `${_get_domain_service_url_1._getDomainServiceUrl(hubRequestOptions.hubApiUrl)}/validate?hostname=${hostname}`;
    const headers = _get_auth_header_1._getAuthHeader(hubRequestOptions);
    return fetch(url, { method: "GET", headers, mode: "cors" })
        .then((response) => {
        return response.json();
    })
        .catch((e) => {
        return {
            success: false,
            input: hostname,
            error: {
                code: 400,
                detail: e,
                message: "lookupFailed",
            },
        };
    });
}
exports.isValidDomain = isValidDomain;
//# sourceMappingURL=is-valid-domain.js.map