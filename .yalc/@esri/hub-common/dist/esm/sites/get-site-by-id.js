import { getModel } from "../models";
import { upgradeSiteSchema } from "./upgrade-site-schema";
/**
 * Get a Site Model by it's Item Id, and apply schema upgrades
 * @param {String} id Site Item Id
 * @param {IHubRequestOptions} hubRequestOptions
 */
export function getSiteById(id, hubRequestOptions) {
    return getModel(id, hubRequestOptions).then(upgradeSiteSchema);
}
//# sourceMappingURL=get-site-by-id.js.map