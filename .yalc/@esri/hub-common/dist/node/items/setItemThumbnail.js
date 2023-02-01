"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setItemThumbnail = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const HubError_1 = require("../HubError");
/**
 * Upload a file to be used as the thumbnail for an item
 * @param id
 * @param file
 * @param filename
 * @param requestOptions
 */
async function setItemThumbnail(id, file, filename, requestOptions) {
    const opts = Object.assign({ item: {
            id,
        }, params: {
            thumbnail: file,
            fileName: filename,
        }, filename }, requestOptions);
    try {
        const response = await arcgis_rest_portal_1.updateItem(opts);
        if (!response.success) {
            throw new HubError_1.default("Set Project Thumbnail", "Unknown error setting thumbnail.");
        }
    }
    catch (err) {
        if (err instanceof Error) {
            throw new HubError_1.default("Set Project Thumbnail", err.message, err);
        }
        else {
            throw new HubError_1.default("Set Project Thumbnail", "Unknown error setting thumbnail.");
        }
    }
}
exports.setItemThumbnail = setItemThumbnail;
//# sourceMappingURL=setItemThumbnail.js.map