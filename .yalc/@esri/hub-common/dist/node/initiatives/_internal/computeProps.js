"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeProps = void 0;
const resources_1 = require("../../resources");
const capabilities_1 = require("../../capabilities");
const InitiativeBusinessRules_1 = require("./InitiativeBusinessRules");
/**
 * Given a model and an Initiative, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param initiative
 * @param requestOptions
 * @returns
 */
function computeProps(model, initiative, requestOptions) {
    var _a;
    let token;
    if (requestOptions.authentication) {
        const session = requestOptions.authentication;
        token = session.token;
    }
    // thumbnail url
    initiative.thumbnailUrl = resources_1.getItemThumbnailUrl(model.item, requestOptions, token);
    // Handle Dates
    initiative.createdDate = new Date(model.item.created);
    initiative.createdDateSource = "item.created";
    initiative.updatedDate = new Date(model.item.modified);
    initiative.updatedDateSource = "item.modified";
    // Handle capabilities
    initiative.capabilities = capabilities_1.processEntityCapabilities(((_a = model.data.settings) === null || _a === void 0 ? void 0 : _a.capabilities) || {}, InitiativeBusinessRules_1.InitiativeDefaultCapabilities);
    // cast b/c this takes a partial but returns a full object
    return initiative;
}
exports.computeProps = computeProps;
//# sourceMappingURL=computeProps.js.map