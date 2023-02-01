import { createItem } from "@esri/arcgis-rest-portal";
/**
 * Create AGO item from a URL
 *
 * @export
 * @param {IItemAdd} item Item to be uploaded into online.
 * @param {IUserRequestOptions} requestOptions
 * @return {*}  {Promise<string>} Newly created item ID
 */
export async function createItemFromUrl(item, requestOptions) {
    // Fire off createItem call
    const createResult = await createItem(Object.assign({ item, owner: item.owner, file: item.file, dataUrl: item.dataUrl, text: item.text, multipart: item.multipart, async: item.async }, requestOptions));
    // return the newly created item id
    return createResult;
}
//# sourceMappingURL=create-item-from-url.js.map