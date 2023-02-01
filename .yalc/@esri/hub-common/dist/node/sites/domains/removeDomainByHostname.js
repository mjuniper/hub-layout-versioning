"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDomainByHostname = void 0;
// These will be spied on in tests
const lookup_domain_1 = require("./lookup-domain");
const remove_domain_1 = require("./remove-domain");
const objects_1 = require("../../objects");
/**
 * Remove an entry from the domain service, based on a hostname
 *
 * Callers must ensure the user is a member of the org that
 * owns the domain entry else the call will fail.
 * @param hostname
 * @param hubRequestOptions
 */
async function removeDomainByHostname(hostname, hubRequestOptions) {
    if (hubRequestOptions.isPortal) {
        throw new Error(`removeDomainByHostname is not available in ArcGIS Enterprise. Instead, edit the hubdomain typekeyword on the item`);
    }
    try {
        const domainEntry = await lookup_domain_1.lookupDomain(hostname, hubRequestOptions);
        // Could consider doing a check here to verify that current user
        // is member of the org owning the domain record, but api will
        // enforce this.
        const id = objects_1.getProp(domainEntry, "id");
        if (id) {
            await remove_domain_1.removeDomain(id, hubRequestOptions);
        }
    }
    catch (ex) {
        throw new Error(`Error removing domain entry for ${hostname}: ${ex}`);
    }
}
exports.removeDomainByHostname = removeDomainByHostname;
//# sourceMappingURL=removeDomainByHostname.js.map