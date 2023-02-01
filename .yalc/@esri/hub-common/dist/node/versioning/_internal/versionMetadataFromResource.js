"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.versionMetadataFromResource = void 0;
function versionMetadataFromResource(resource) {
    // we get access, path, and size from the resource itself
    const { access, resource: path, size } = resource;
    // the rest is on properties as a json string
    let properties = resource.properties || {};
    if (properties) {
        if (typeof properties === 'string') {
            try {
                properties = JSON.parse(properties);
            }
            catch (e) {
                console.log('error parsing resource properties', e);
                properties = {};
            }
        }
    }
    return Object.assign(Object.assign({}, properties), { access,
        path,
        size });
}
exports.versionMetadataFromResource = versionMetadataFromResource;
//# sourceMappingURL=versionMetadataFromResource.js.map