"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItemFromUrl = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * Create AGO item from a URL
 *
 * @export
 * @param {IItemAdd} item Item to be uploaded into online.
 * @param {IUserRequestOptions} requestOptions
 * @return {*}  {Promise<string>} Newly created item ID
 */
async function createItemFromUrl(item, requestOptions) {
    // Fire off createItem call
    const createResult = await arcgis_rest_portal_1.createItem(Object.assign({ item, owner: item.owner, file: item.file, dataUrl: item.dataUrl, text: item.text, multipart: item.multipart, async: item.async }, requestOptions));
    // return the newly created item id
    return createResult;
}
exports.createItemFromUrl = createItemFromUrl;
//# sourceMappingURL=create-item-from-url.js.map