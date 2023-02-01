"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItemFromUrlOrFile = void 0;
const tslib_1 = require("tslib");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const utils_1 = require("../utils");
const create_item_from_file_1 = require("./create-item-from-file");
const create_item_from_url_1 = require("./create-item-from-url");
const _wait_for_item_ready_1 = require("./_internal/_wait-for-item-ready");
/**
 * Creates an item in online from either url or file.
 * Once created we wait for the item to be ready (or throw an error if creation failed)
 * If access is not private then we make a call to update that.
 *
 * @export
 * @param {ICreateItemFromUrlOrFileOptions} createItemFromUrlOrFileOptions Input params (item, groups?, requestoptions)
 * @return {*}  {
 *     title: string,
 *     createdItem: ICreateItemResponse,
 *     itemAccessResponse: ISharingResponse,
 *     itemSharingResponse: ISharingResponse[]
 *   } Responses from createdItem, changing item access, and item Sharing to group
 */
async function createItemFromUrlOrFile(createItemFromUrlOrFileOptions) {
    const { item, groups } = createItemFromUrlOrFileOptions, userRequestOptions = tslib_1.__rest(createItemFromUrlOrFileOptions, ["item", "groups"]);
    // Is there a file or data url?
    const shouldWaitForItemReady = item.dataUrl || item.file;
    let createdItem;
    let itemAccessResponse;
    let itemSharingResponse;
    // If there is a file then we create the item and chunk the file
    // while multithread uploading it
    if (item.file) {
        createdItem = await create_item_from_file_1.createItemFromFile(item, userRequestOptions);
        // Otherwise it's being created from a url.
    }
    else {
        createdItem = await create_item_from_url_1.createItemFromUrl(item, userRequestOptions);
    }
    // If there is a file or data url we want to check to see if / when the item is ready.
    if (shouldWaitForItemReady) {
        await _wait_for_item_ready_1._waitForItemReady(createdItem.id, userRequestOptions);
    }
    // If the item access is NOT private (which is the sharing access level by default)
    // We subsequently update the items access level.
    if (item.access !== "private") {
        itemAccessResponse = await arcgis_rest_portal_1.setItemAccess(Object.assign({ id: createdItem.id, owner: item.owner, access: item.access }, userRequestOptions));
    }
    // If group ids were passedd in then make share calls to each.
    if (groups === null || groups === void 0 ? void 0 : groups.length) {
        const failSafeShare = utils_1.failSafe(arcgis_rest_portal_1.shareItemWithGroup);
        itemSharingResponse = await Promise.all(groups.map((group) => failSafeShare(Object.assign({ id: createdItem.id, owner: item.owner, groupId: group.id, confirmItemControl: utils_1.isUpdateGroup(group) }, userRequestOptions))));
    }
    return {
        title: item.title,
        createdItem,
        itemAccessResponse,
        itemSharingResponse,
    };
}
exports.createItemFromUrlOrFile = createItemFromUrlOrFile;
//# sourceMappingURL=create-item-from-url-or-file.js.map