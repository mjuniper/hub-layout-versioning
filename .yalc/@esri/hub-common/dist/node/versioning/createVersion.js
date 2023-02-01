"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVersion = void 0;
const utils_1 = require("./utils");
const getVersionData_1 = require("./_internal/getVersionData");
const getPrefix_1 = require("./_internal/getPrefix");
const index_1 = require("../index");
const constants_1 = require("./_internal/constants");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Return an array containing the versions of the item
 * @param entity
 * @param requestOptions
 * @returns
 */
async function createVersion(model, requestOptions, options) {
    const includeList = utils_1.getIncludeListFromItemType(model);
    // TODO: in the future, we could make the data a separate resource file and reference it here with jsonref or something: { data: "#resources/data.json" }
    const data = getVersionData_1.getVersionData(model, includeList);
    const name = options.name;
    const parent = options.parentId;
    const id = index_1.createId();
    const prefix = getPrefix_1.getPrefix(id);
    const now = Date.now();
    const version = {
        created: now,
        creator: index_1.getProp(requestOptions, 'authentication.username'),
        data,
        id,
        name,
        parent,
        path: `${prefix}/${constants_1.VERSION_RESOURCE_NAME}`,
        updated: now,
    };
    const versionBlob = index_1.objectToJsonBlob(version);
    const properties = index_1.mergeObjects(version, {}, constants_1.VERSION_RESOURCE_PROPERTIES);
    await arcgis_rest_portal_1.addItemResource(Object.assign(Object.assign({}, requestOptions), { id: index_1.getProp(model, 'item.id'), name: constants_1.VERSION_RESOURCE_NAME, owner: index_1.getProp(model, 'item.owner'), params: { properties }, prefix, private: true, resource: versionBlob }));
    version.size = versionBlob.size;
    return version;
}
exports.createVersion = createVersion;
//# sourceMappingURL=createVersion.js.map