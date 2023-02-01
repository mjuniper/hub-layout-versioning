"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._waitForItemReady = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
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
async function _waitForItemReady(itemId, requestOptions, milliseconds) {
    let statusResult;
    do {
        await delay(milliseconds || /* istanbul ignore next: slows down tests */ 2000);
        statusResult = await arcgis_rest_portal_1.getItemStatus(Object.assign({ id: itemId }, requestOptions));
        if (statusResult.status === "failed") {
            throw new Error(statusResult.statusMessage);
        }
    } while (statusResult.status !== "completed");
}
exports._waitForItemReady = _waitForItemReady;
//# sourceMappingURL=_wait-for-item-ready.js.map