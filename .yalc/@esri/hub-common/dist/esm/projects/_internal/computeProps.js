import { getItemThumbnailUrl } from "../../resources";
import { ProjectDefaultCapabilities } from "./ProjectBusinessRules";
import { processEntityCapabilities } from "../../capabilities";
/**
 * Given a model and a project, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param project
 * @param requestOptions
 * @returns
 */
export function computeProps(model, project, requestOptions) {
    var _a;
    let token;
    if (requestOptions.authentication) {
        const session = requestOptions.authentication;
        token = session.token;
    }
    // thumbnail url
    project.thumbnailUrl = getItemThumbnailUrl(model.item, requestOptions, token);
    // Handle Dates
    project.createdDate = new Date(model.item.created);
    project.createdDateSource = "item.created";
    project.updatedDate = new Date(model.item.modified);
    project.updatedDateSource = "item.modified";
    // Handle capabilities
    project.capabilities = processEntityCapabilities(((_a = model.data.settings) === null || _a === void 0 ? void 0 : _a.capabilities) || {}, ProjectDefaultCapabilities);
    // cast b/c this takes a partial but returns a full project
    return project;
}
//# sourceMappingURL=computeProps.js.map