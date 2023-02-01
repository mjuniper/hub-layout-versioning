"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSiteModel = void 0;
const urls_1 = require("../urls");
const utils_1 = require("../utils");
const domains_1 = require("./domains");
const get_site_by_id_1 = require("./get-site-by-id");
/**
 * Returns site model given various kinds of identifier
 *
 * @param identifier - a site item ID, site hostname, enterprise site slug, or full site URL
 * @param hubRequestOptions
 */
function fetchSiteModel(identifier, hubRequestOptions) {
    let prms;
    if (utils_1.isGuid(identifier)) {
        prms = get_site_by_id_1.getSiteById(identifier, hubRequestOptions);
    }
    else {
        let hostnameOrSlug = identifier;
        // get down the the hostname
        hostnameOrSlug = urls_1.stripProtocol(hostnameOrSlug);
        hostnameOrSlug = hostnameOrSlug.split("/")[0];
        prms = domains_1.lookupDomain(hostnameOrSlug, hubRequestOptions).then(({ siteId }) => get_site_by_id_1.getSiteById(siteId, hubRequestOptions));
    }
    return prms;
}
exports.fetchSiteModel = fetchSiteModel;
//# sourceMappingURL=fetchSiteModel.js.map