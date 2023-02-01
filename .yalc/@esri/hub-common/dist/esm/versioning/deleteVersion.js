import { getResourceNameFromVersionId } from "./_internal";
import { removeItemResource } from "@esri/arcgis-rest-portal";
/**
 * Return an array containing the versions of the item
 * @param id
 * @param versionId
 * @param owner
 * @param requestOptions
 * @returns
 */
export async function deleteVersion(id, versionId, owner, requestOptions) {
    return removeItemResource(Object.assign(Object.assign({}, requestOptions), { id,
        owner, resource: getResourceNameFromVersionId(versionId) }));
}
//# sourceMappingURL=deleteVersion.js.map