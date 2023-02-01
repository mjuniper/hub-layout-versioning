import { getItemStatus, } from "@esri/arcgis-rest-portal";
function delay(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
/**
 * Helper function which takes an itemId and checks the status
 * of the item every 2 seconds until it is either complete or failed.
 *
 * @export
 * @param {string} itemId AGO item id
 * @param {IUserRequestOptions} requestOptions
 */
export async function _waitForItemReady(itemId, requestOptions) {
    let statusResult;
    do {
        await delay(2000);
        statusResult = await getItemStatus(Object.assign({ id: itemId }, requestOptions));
        if (statusResult.status === "failed") {
            throw new Error(statusResult.statusMessage);
        }
    } while (statusResult.status !== "completed");
}
//# sourceMappingURL=_wait-for-item-ready.js.map