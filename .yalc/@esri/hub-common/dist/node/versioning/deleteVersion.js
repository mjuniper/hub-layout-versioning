"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVersion = void 0;
const _internal_1 = require("./_internal");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Return an array containing the versions of the item
 * @param id
 * @param versionId
 * @param owner
 * @param requestOptions
 * @returns
 */
async function deleteVersion(id, versionId, owner, requestOptions) {
    return arcgis_rest_portal_1.removeItemResource(Object.assign(Object.assign({}, requestOptions), { id,
        owner, resource: _internal_1.getResourceNameFromVersionId(versionId) }));
}
exports.deleteVersion = deleteVersion;
//# sourceMappingURL=deleteVersion.js.map