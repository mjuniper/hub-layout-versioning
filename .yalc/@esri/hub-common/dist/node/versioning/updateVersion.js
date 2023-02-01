"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVersion = void 0;
const index_1 = require("../index");
const _internal_1 = require("./_internal");
const utils_1 = require("./utils");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Return an array containing the versions of the item
 * @param model
 * @param versionId
 * @param requestOptions
 * @returns
 */
async function updateVersion(model, version, requestOptions) {
    // we expect the item to contain the changes that we want to apply to the version
    // but we also need the versionResource so we can preserve the created and creator props
    // TODO: we should fetch the version and ensure that its updated date is not newer than what we have in memory
    const includeList = utils_1.getIncludeListFromItemType(model);
    version.data = _internal_1.getVersionData(model, includeList);
    const prefix = _internal_1.getPrefix(version.id);
    version.updated = Date.now();
    const versionBlob = index_1.objectToJsonBlob(version);
    const properties = index_1.mergeObjects(version, {}, _internal_1.VERSION_RESOURCE_PROPERTIES);
    await arcgis_rest_portal_1.updateItemResource(Object.assign(Object.assign({}, requestOptions), { id: index_1.getProp(model, 'item.id'), name: _internal_1.VERSION_RESOURCE_NAME, owner: index_1.getProp(model, "item.owner"), params: { properties }, prefix, private: false, resource: versionBlob }));
    return version;
}
exports.updateVersion = updateVersion;
//# sourceMappingURL=updateVersion.js.map