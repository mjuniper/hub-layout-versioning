"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedWith = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
/**
 * @private
 * Return the list of groups the current user can see, that the item is shared to
 * @param itemId
 * @param requestOptions
 * @returns
 */
async function sharedWith(itemId, requestOptions) {
    const response = await arcgis_rest_portal_1.getItemGroups(itemId, requestOptions);
    // simplify the response to a single array
    return [...response.admin, ...response.member, ...response.other];
}
exports.sharedWith = sharedWith;
//# sourceMappingURL=sharedWith.js.map