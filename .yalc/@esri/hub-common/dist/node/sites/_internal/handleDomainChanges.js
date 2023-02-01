"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDomainChanges = void 0;
const objects_1 = require("../../objects");
const domains_1 = require("../domains");
/**
 * Given two site models, determine the domain changes and apply them
 * @param currentModel
 * @param updatedModel
 * @param requestOptions
 * @private
 */
async function handleDomainChanges(updatedModel, currentModel, requestOptions) {
    const defaultDomainRecord = {
        clientKey: updatedModel.data.values.clientId,
        orgId: requestOptions.portalSelf.id,
        orgTitle: requestOptions.portalSelf.name,
        orgKey: requestOptions.portalSelf.urlKey,
        siteId: updatedModel.item.id,
        siteTitle: updatedModel.item.title,
        sslOnly: true,
    };
    const domainChanges = {
        remove: [],
        add: [],
    };
    ["customHostname", "defaultHostname"].forEach((key) => {
        const currentValue = objects_1.getProp(currentModel, `data.values.${key}`);
        const updatedValue = objects_1.getProp(updatedModel, `data.values.${key}`);
        if (updatedValue !== currentValue) {
            domainChanges.remove.push(currentValue);
            domainChanges.add.push(updatedValue);
        }
    });
    const domainChangePromises = [];
    // handle additions
    domainChanges.add.map((hostname) => {
        const domainOpts = Object.assign({ hostname }, defaultDomainRecord);
        domainChangePromises.push(domains_1.addDomain(domainOpts, requestOptions));
    });
    // handle removals
    domainChanges.remove.map((hostname) => {
        domainChangePromises.push(domains_1.removeDomainByHostname(hostname, requestOptions));
    });
    return Promise.all(domainChangePromises);
    // TODO: Error handling & OperationStack
}
exports.handleDomainChanges = handleDomainChanges;
//# sourceMappingURL=handleDomainChanges.js.map