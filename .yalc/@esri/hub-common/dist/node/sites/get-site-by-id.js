"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSiteById = void 0;
const models_1 = require("../models");
const upgrade_site_schema_1 = require("./upgrade-site-schema");
/**
 * Get a Site Model by it's Item Id, and apply schema upgrades
 * @param {String} id Site Item Id
 * @param {IHubRequestOptions} hubRequestOptions
 */
function getSiteById(id, hubRequestOptions) {
    return models_1.getModel(id, hubRequestOptions).then(upgrade_site_schema_1.upgradeSiteSchema);
}
exports.getSiteById = getSiteById;
//# sourceMappingURL=get-site-by-id.js.map