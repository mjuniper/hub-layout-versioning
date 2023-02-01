"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureUniqueDomainName = void 0;
const get_unique_domain_name_portal_1 = require("./get-unique-domain-name-portal");
const get_unique_domain_name_1 = require("./get-unique-domain-name");
const _ensure_safe_domain_length_1 = require("./_ensure-safe-domain-length");
const urls_1 = require("../../urls");
const api_1 = require("../../api");
/**
 * Given a subdomain, ensure that we have a unique hostname
 * incrementing if needed
 * @param {String} subdomain Subdomain to unique-ify
 * @param {IHubRequestOptions} hubRequestOptions
 */
function ensureUniqueDomainName(subdomain, hubRequestOptions) {
    let prms;
    if (hubRequestOptions.isPortal) {
        prms = get_unique_domain_name_portal_1.getUniqueDomainNamePortal(subdomain, hubRequestOptions);
    }
    else {
        const baseDomain = `${hubRequestOptions.portalSelf.urlKey}.${urls_1.stripProtocol(api_1.getHubApiUrl(hubRequestOptions))}`;
        prms = get_unique_domain_name_1.getUniqueDomainName(subdomain, baseDomain, hubRequestOptions);
    }
    return prms.then((uniqueDomain) => {
        return _ensure_safe_domain_length_1._ensureSafeDomainLength(uniqueDomain, hubRequestOptions.portalSelf.urlKey);
    });
}
exports.ensureUniqueDomainName = ensureUniqueDomainName;
//# sourceMappingURL=ensure-unique-domain-name.js.map