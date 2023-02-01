import { getItemThumbnailUrl } from "../resources";
import { getBasePropertyMap } from "../core/_internal/getBasePropertyMap";
/**
 * Given a model and a project, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param project
 * @param requestOptions
 * @returns
 */
export function computeProps(model, project, requestOptions) {
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
    // cast b/c this takes a partial but returns a full project
    return project;
}
/**
 * Returns an Array of IPropertyMap objects
 * that define the projection of properties from a IModel to an IHubProject
 * @returns
 * @private
 */
export function getPropertyMap() {
    const map = getBasePropertyMap();
    // Type specific mappings
    map.push({ objectKey: "status", modelKey: "data.status" });
    map.push({ objectKey: "catalog", modelKey: "data.catalog" });
    map.push({ objectKey: "permissions", modelKey: "data.permissions" });
    map.push({ objectKey: "contacts", modelKey: "data.contacts" });
    map.push({ objectKey: "timeline", modelKey: "data.timeline" });
    return map;
}
//# sourceMappingURL=_internal.js.map