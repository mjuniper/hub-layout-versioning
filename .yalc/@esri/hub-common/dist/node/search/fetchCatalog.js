"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCatalog = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const HubError_1 = require("../HubError");
const lookup_domain_1 = require("../sites/domains/lookup-domain");
const strip_protocol_1 = require("../urls/strip-protocol");
const is_guid_1 = require("../utils/is-guid");
const upgradeCatalogSchema_1 = require("./upgradeCatalogSchema");
/**
 * Fetch a IHubCatalog from a backing item.
 * This will apply schema upgrades to the structure
 * @param identifier
 * @param requestOptions
 * @returns
 */
async function fetchCatalog(identifier, requestOptions) {
    let getPrms;
    // identifier can be a guid or a url
    if (identifier.indexOf("http") === 0) {
        let url = identifier;
        // get down the the hostname
        url = strip_protocol_1.stripProtocol(url);
        // if url does not include a hash (i.e. it's not portal)
        // then we want to split on the first slash to get the hostname
        // lookupDomain will handle the enterprise base urls
        if (!url.includes("#")) {
            url = url.split("/")[0];
        }
        getPrms = lookup_domain_1.lookupDomain(url, requestOptions)
            // get the item's data, and read the catalog out of it
            .then(({ siteId }) => arcgis_rest_portal_1.getItemData(siteId, requestOptions))
            .then((data) => {
            return upgradeCatalogSchema_1.upgradeCatalogSchema(data.catalog || {});
        });
    }
    else if (is_guid_1.isGuid(identifier)) {
        // get the item's data, and read the catalog out of it
        getPrms = arcgis_rest_portal_1.getItemData(identifier, requestOptions).then((data) => {
            return upgradeCatalogSchema_1.upgradeCatalogSchema(data.catalog || {});
        });
    }
    else {
        throw new HubError_1.default("Catalog.create", "Identifier must be a url, guid");
    }
    const fetched = await getPrms;
    return fetched;
}
exports.fetchCatalog = fetchCatalog;
//# sourceMappingURL=fetchCatalog.js.map