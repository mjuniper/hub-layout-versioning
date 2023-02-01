import { getItemThumbnailUrl } from "../../resources";
import { processEntityCapabilities } from "../../capabilities";
import { InitiativeDefaultCapabilities } from "./InitiativeBusinessRules";
/**
 * Given a model and an Initiative, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param initiative
 * @param requestOptions
 * @returns
 */
export function computeProps(model, initiative, requestOptions) {
    var _a;
    let token;
    if (requestOptions.authentication) {
        const session = requestOptions.authentication;
        token = session.token;
    }
    // thumbnail url
    initiative.thumbnailUrl = getItemThumbnailUrl(model.item, requestOptions, token);
    // Handle Dates
    initiative.createdDate = new Date(model.item.created);
    initiative.createdDateSource = "item.created";
    initiative.updatedDate = new Date(model.item.modified);
    initiative.updatedDateSource = "item.modified";
    // Handle capabilities
    initiative.capabilities = processEntityCapabilities(((_a = model.data.settings) === null || _a === void 0 ? void 0 : _a.capabilities) || {}, InitiativeDefaultCapabilities);
    // cast b/c this takes a partial but returns a full object
    return initiative;
}
//# sourceMappingURL=computeProps.js.map