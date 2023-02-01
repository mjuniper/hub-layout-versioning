import { getItemGroups } from "@esri/arcgis-rest-portal";
/**
 * @private
 * Return the list of groups the current user can see, that the item is shared to
 * @param itemId
 * @param requestOptions
 * @returns
 */
export async function sharedWith(itemId, requestOptions) {
    const response = await getItemGroups(itemId, requestOptions);
    // simplify the response to a single array
    return [...response.admin, ...response.member, ...response.other];
}
//# sourceMappingURL=sharedWith.js.map