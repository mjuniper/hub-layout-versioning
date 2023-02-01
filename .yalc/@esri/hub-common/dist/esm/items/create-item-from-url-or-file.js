import { __rest } from "tslib";
import { setItemAccess, shareItemWithGroup, } from "@esri/arcgis-rest-portal";
import { failSafe, isUpdateGroup } from "../utils";
import { createItemFromFile } from "./create-item-from-file";
import { createItemFromUrl } from "./create-item-from-url";
import { _waitForItemReady } from "./_internal/_wait-for-item-ready";
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
export async function createItemFromUrlOrFile(createItemFromUrlOrFileOptions) {
    const { item, groups } = createItemFromUrlOrFileOptions, userRequestOptions = __rest(createItemFromUrlOrFileOptions, ["item", "groups"]);
    // Is there a file or data url?
    const shouldWaitForItemReady = item.dataUrl || item.file;
    let createdItem;
    let itemAccessResponse;
    let itemSharingResponse;
    // If there is a file then we create the item and chunk the file
    // while multithread uploading it
    if (item.file) {
        createdItem = await createItemFromFile(item, userRequestOptions);
        // Otherwise it's being created from a url.
    }
    else {
        createdItem = await createItemFromUrl(item, userRequestOptions);
    }
    // If there is a file or data url we want to check to see if / when the item is ready.
    if (shouldWaitForItemReady) {
        await _waitForItemReady(createdItem.id, userRequestOptions);
    }
    // If the item access is NOT private (which is the sharing access level by default)
    // We subsequently update the items access level.
    if (item.access !== "private") {
        itemAccessResponse = await setItemAccess(Object.assign({ id: createdItem.id, owner: item.owner, access: item.access }, userRequestOptions));
    }
    // If group ids were passedd in then make share calls to each.
    if (groups === null || groups === void 0 ? void 0 : groups.length) {
        const failSafeShare = failSafe(shareItemWithGroup);
        itemSharingResponse = await Promise.all(groups.map((group) => failSafeShare(Object.assign({ id: createdItem.id, owner: item.owner, groupId: group.id, confirmItemControl: isUpdateGroup(group) }, userRequestOptions))));
    }
    return {
        title: item.title,
        createdItem,
        itemAccessResponse,
        itemSharingResponse,
    };
}
//# sourceMappingURL=create-item-from-url-or-file.js.map