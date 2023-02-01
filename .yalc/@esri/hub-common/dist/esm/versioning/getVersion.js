import { getItemResource } from "@esri/arcgis-rest-portal";
import { getResourceNameFromVersionId } from "./_internal";
/**
 * Return an array containing the versions of the item
 * @param id
 * @param versionId
 * @param requestOptions
 * @returns
 */
export async function getVersion(id, versionId, requestOptions) {
    return getItemResource(id, Object.assign(Object.assign({}, requestOptions), { fileName: getResourceNameFromVersionId(versionId), readAs: 'json' }));
}
//# sourceMappingURL=getVersion.js.map