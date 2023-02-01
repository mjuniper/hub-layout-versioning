"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeProps = void 0;
const resources_1 = require("../../resources");
const ProjectBusinessRules_1 = require("./ProjectBusinessRules");
const capabilities_1 = require("../../capabilities");
/**
 * Given a model and a project, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param project
 * @param requestOptions
 * @returns
 */
function computeProps(model, project, requestOptions) {
    var _a;
    let token;
    if (requestOptions.authentication) {
        const session = requestOptions.authentication;
        token = session.token;
    }
    // thumbnail url
    project.thumbnailUrl = resources_1.getItemThumbnailUrl(model.item, requestOptions, token);
    // Handle Dates
    project.createdDate = new Date(model.item.created);
    project.createdDateSource = "item.created";
    project.updatedDate = new Date(model.item.modified);
    project.updatedDateSource = "item.modified";
    // Handle capabilities
    project.capabilities = capabilities_1.processEntityCapabilities(((_a = model.data.settings) === null || _a === void 0 ? void 0 : _a.capabilities) || {}, ProjectBusinessRules_1.ProjectDefaultCapabilities);
    // cast b/c this takes a partial but returns a full project
    return project;
}
exports.computeProps = computeProps;
//# sourceMappingURL=computeProps.js.map