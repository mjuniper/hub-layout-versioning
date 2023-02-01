"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPropertyMap = exports.computeProps = void 0;
const resources_1 = require("../resources");
const getBasePropertyMap_1 = require("../core/_internal/getBasePropertyMap");
/**
 * Given a model and a project, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param project
 * @param requestOptions
 * @returns
 */
function computeProps(model, project, requestOptions) {
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
    // cast b/c this takes a partial but returns a full project
    return project;
}
exports.computeProps = computeProps;
/**
 * Returns an Array of IPropertyMap objects
 * that define the projection of properties from a IModel to an IHubProject
 * @returns
 * @private
 */
function getPropertyMap() {
    const map = getBasePropertyMap_1.getBasePropertyMap();
    // Type specific mappings
    map.push({ objectKey: "status", modelKey: "data.status" });
    map.push({ objectKey: "catalog", modelKey: "data.catalog" });
    map.push({ objectKey: "permissions", modelKey: "data.permissions" });
    map.push({ objectKey: "contacts", modelKey: "data.contacts" });
    map.push({ objectKey: "timeline", modelKey: "data.timeline" });
    return map;
}
exports.getPropertyMap = getPropertyMap;
//# sourceMappingURL=_internal.js.map