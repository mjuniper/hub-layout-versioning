"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSiteDomains = void 0;
const objects_1 = require("../../objects");
const add_domain_1 = require("./add-domain");
/**
 * Given a Site Model, register the domains with the Domain Service.
 *
 * This should only be used when creating a site. To update domains related
 * to a site, use the `addDomain` and `removeDomain` functions directly
 *
 * @param {Object} model site model
 * @param {IHubRequestOptions} hubRequestOptions
 */
function addSiteDomains(model, hubRequestOptions) {
    if (hubRequestOptions.isPortal) {
        return Promise.resolve([]);
    }
    else {
        const props = ["defaultHostname", "customHostname"];
        return Promise.all(props.reduce((acc, prop) => {
            const hostname = objects_1.getProp(model, `data.values.${prop}`);
            if (hostname) {
                const domainOpts = {
                    hostname,
                    clientKey: model.data.values.clientId,
                    orgId: hubRequestOptions.portalSelf.id,
                    orgTitle: hubRequestOptions.portalSelf.name,
                    orgKey: hubRequestOptions.portalSelf.urlKey,
                    siteId: model.item.id,
                    siteTitle: model.item.title,
                    sslOnly: true,
                };
                acc.push(add_domain_1.addDomain(domainOpts, hubRequestOptions));
            }
            return acc;
        }, []));
    }
}
exports.addSiteDomains = addSiteDomains;
//# sourceMappingURL=addSiteDomains.js.map