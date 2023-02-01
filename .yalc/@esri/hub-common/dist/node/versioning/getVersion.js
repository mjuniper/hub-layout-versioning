"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersion = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const _internal_1 = require("./_internal");
/**
 * Return an array containing the versions of the item
 * @param id
 * @param versionId
 * @param requestOptions
 * @returns
 */
async function getVersion(id, versionId, requestOptions) {
    return arcgis_rest_portal_1.getItemResource(id, Object.assign(Object.assign({}, requestOptions), { fileName: _internal_1.getResourceNameFromVersionId(versionId), readAs: 'json' }));
}
exports.getVersion = getVersion;
//# sourceMappingURL=getVersion.js.map