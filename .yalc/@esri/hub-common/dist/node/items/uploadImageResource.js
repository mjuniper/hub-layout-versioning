"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadImageResource = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const HubError_1 = require("../HubError");
const urls_1 = require("../urls");
/**
 * Given an item, and owner, add a image resource to the item and returns its url
 * @param id
 * @param owner
 * @param file
 * @param filename
 * @param ro
 * @param prefix
 * @returns
 */
async function uploadImageResource(id, owner, file, filename, ro, prefix = "") {
    try {
        // Add item resource
        const response = await arcgis_rest_portal_1.addItemResource(Object.assign({ id,
            owner, resource: file, name: filename, prefix }, ro));
        // if err throw
        if (!response.success) {
            throw new HubError_1.default("Set Item Featured Image", "Unknown error setting featured image.");
        }
        // return url
        const portalRestUrl = urls_1.getPortalApiUrl(ro.portal);
        if (prefix) {
            prefix = `${prefix}/`;
        }
        return `${portalRestUrl}/content/items/${id}/resources/${prefix}${filename}`;
    }
    catch (err) {
        if (err instanceof Error) {
            throw new HubError_1.default("Set Item Featured Image", err.message, err);
        }
        else {
            throw new HubError_1.default("Set Item Featured Image", "Unknown error setting featured image.");
        }
    }
}
exports.uploadImageResource = uploadImageResource;
//# sourceMappingURL=uploadImageResource.js.map