import { addItemResource } from "@esri/arcgis-rest-portal";
import HubError from "../HubError";
import { getPortalApiUrl } from "../urls";
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
export async function uploadImageResource(id, owner, file, filename, ro, prefix = "") {
    try {
        // Add item resource
        const response = await addItemResource(Object.assign({ id,
            owner, resource: file, name: filename, prefix }, ro));
        // if err throw
        if (!response.success) {
            throw new HubError("Set Item Featured Image", "Unknown error setting featured image.");
        }
        // return url
        const portalRestUrl = getPortalApiUrl(ro.portal);
        if (prefix) {
            prefix = `${prefix}/`;
        }
        return `${portalRestUrl}/content/items/${id}/resources/${prefix}${filename}`;
    }
    catch (err) {
        if (err instanceof Error) {
            throw new HubError("Set Item Featured Image", err.message, err);
        }
        else {
            throw new HubError("Set Item Featured Image", "Unknown error setting featured image.");
        }
    }
}
//# sourceMappingURL=uploadImageResource.js.map