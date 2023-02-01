"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrichUserSearchResult = void 0;
const enrichments_1 = require("./_internal/enrichments");
const objects_1 = require("../objects");
const search_1 = require("../search");
const parseInclude_1 = require("../search/_internal/parseInclude");
const urls_1 = require("../urls");
const util_1 = require("../util");
const utils_1 = require("../utils");
/**
 * Enrich a User object
 * @param user
 * @param includes
 * @param requestOptions
 * @returns
 */
async function enrichUserSearchResult(user, include, requestOptions) {
    // Create the basic structure
    const result = {
        access: user.access,
        id: user.username,
        type: "User",
        name: user.fullName,
        owner: user.username,
        summary: user.description,
        createdDate: new Date(user.created),
        createdDateSource: "user.created",
        updatedDate: new Date(user.modified),
        updatedDateSource: "user.modified",
        family: "people",
        links: {
            self: "not-implemented",
            siteRelative: "not-implemented",
            thumbnail: "not-implemented",
        },
    };
    // Informal Enrichments - basically adding type-specific props
    // derived directly from the entity
    // default includes
    const DEFAULTS = ["org.name AS orgName"];
    // merge includes
    include = [...DEFAULTS, ...include].filter(util_1.unique);
    // Parse the includes into a valid set of enrichments
    const specs = include.map(parseInclude_1.parseInclude);
    // Extract out the low-level enrichments needed
    const enrichments = utils_1.mapBy("enrichment", specs).filter(util_1.unique);
    // fetch the enrichments
    let enriched = {};
    // Ignoring the else, because we currently have defaults, but want the guards
    // so if we remove that in the future, we don't call the fn
    /* istanbul ignore else */
    if (enrichments.length) {
        enriched = await enrichments_1.fetchUserEnrichments(user, enrichments, requestOptions);
    }
    // map the enriched props onto the result
    specs.forEach((spec) => {
        result[spec.prop] = objects_1.getProp(enriched, spec.path);
    });
    const token = requestOptions.authentication.token;
    // Handle links
    result.links.thumbnail = search_1.getUserThumbnailUrl(requestOptions.portal, user, token);
    result.links.self = urls_1.getUserHomeUrl(result.id, requestOptions);
    result.links.siteRelative = `/people/${result.id}`;
    return result;
}
exports.enrichUserSearchResult = enrichUserSearchResult;
//# sourceMappingURL=HubUsers.js.map