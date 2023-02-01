import { getItemThumbnailUrl } from "../../resources";
import { SiteDefaultCapabilities } from "./SiteBusinessRules";
import { processEntityCapabilities } from "../../capabilities";
/**
 * Given a model and a site, set various computed properties that can't be directly mapped
 * @private
 * @param model
 * @param site
 * @param requestOptions
 * @returns
 */
export function computeProps(model, site, requestOptions) {
    var _a;
    let token;
    if (requestOptions.authentication) {
        const session = requestOptions.authentication;
        token = session.token;
    }
    // thumbnail url
    site.thumbnailUrl = getItemThumbnailUrl(model.item, requestOptions, token);
    // Handle Dates
    site.createdDate = new Date(model.item.created);
    site.createdDateSource = "item.created";
    site.updatedDate = new Date(model.item.modified);
    site.updatedDateSource = "item.modified";
    // Handle capabilities
    // NOTE: This does not currently contain the older "capabilities" values!
    site.capabilities = processEntityCapabilities(((_a = model.data.settings) === null || _a === void 0 ? void 0 : _a.capabilities) || {}, SiteDefaultCapabilities);
    // cast b/c this takes a partial but returns a full site
    return site;
}
//# sourceMappingURL=computeProps.js.map