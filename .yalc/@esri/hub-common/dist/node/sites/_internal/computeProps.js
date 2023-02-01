"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeProps = void 0;
const resources_1 = require("../../resources");
const SiteBusinessRules_1 = require("./SiteBusinessRules");
const capabilities_1 = require("../../capabilities");
/**
 * Given a model and a site, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param site
 * @param requestOptions
 * @returns
 */
function computeProps(model, site, requestOptions) {
    var _a;
    let token;
    if (requestOptions.authentication) {
        const session = requestOptions.authentication;
        token = session.token;
    }
    // thumbnail url
    site.thumbnailUrl = resources_1.getItemThumbnailUrl(model.item, requestOptions, token);
    // Handle Dates
    site.createdDate = new Date(model.item.created);
    site.createdDateSource = "item.created";
    site.updatedDate = new Date(model.item.modified);
    site.updatedDateSource = "item.modified";
    // Handle capabilities
    // NOTE: This does not currently contain the older "capabilities" values!
    site.capabilities = capabilities_1.processEntityCapabilities(((_a = model.data.settings) === null || _a === void 0 ? void 0 : _a.capabilities) || {}, SiteBusinessRules_1.SiteDefaultCapabilities);
    // cast b/c this takes a partial but returns a full site
    return site;
}
exports.computeProps = computeProps;
//# sourceMappingURL=computeProps.js.map