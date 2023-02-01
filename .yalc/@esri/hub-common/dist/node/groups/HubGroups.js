"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrichGroupSearchResult = void 0;
const enrichments_1 = require("./_internal/enrichments");
const objects_1 = require("../objects");
const search_1 = require("../search");
const parseInclude_1 = require("../search/_internal/parseInclude");
const urls_1 = require("../urls");
const util_1 = require("../util");
const utils_1 = require("../utils");
/**
 * Enrich a generic search result
 * @param group
 * @param includes
 * @param requestOptions
 * @returns
 */
async function enrichGroupSearchResult(group, include, requestOptions) {
    // Create the basic structure
    const result = {
        access: group.access,
        id: group.id,
        type: "Group",
        name: group.title,
        owner: group.owner,
        summary: group.snippet || group.description,
        createdDate: new Date(group.created),
        createdDateSource: "group.created",
        updatedDate: new Date(group.modified),
        updatedDateSource: "group.modified",
        family: "team",
        links: {
            self: "not-implemented",
            siteRelative: "not-implemented",
            thumbnail: "not-implemented",
        },
    };
    // Informal Enrichments - basically adding type-specific props
    // derived directly from the entity
    result.isSharedUpdate = (group.capabilities || []).includes("updateitemcontrol");
    result.membershipAccess = group.membershipAccess;
    result.isOpenData = !!group.isOpenData;
    // default includes
    const DEFAULTS = [];
    // merge includes
    include = [...DEFAULTS, ...include].filter(util_1.unique);
    // Parse the includes into a valid set of enrichments
    const specs = include.map(parseInclude_1.parseInclude);
    // Extract out the low-level enrichments needed
    const enrichments = utils_1.mapBy("enrichment", specs).filter(util_1.unique);
    // fetch the enrichments
    let enriched = {};
    if (enrichments.length) {
        enriched = await enrichments_1.fetchGroupEnrichments(group, enrichments, requestOptions);
    }
    // map the enriched props onto the result
    specs.forEach((spec) => {
        result[spec.prop] = objects_1.getProp(enriched, spec.path);
    });
    // Handle links
    result.links.thumbnail = search_1.getGroupThumbnailUrl(requestOptions.portal, group);
    result.links.self = urls_1.getGroupHomeUrl(result.id, requestOptions);
    result.links.siteRelative = `/teams/${result.id}`;
    return result;
}
exports.enrichGroupSearchResult = enrichGroupSearchResult;
//# sourceMappingURL=HubGroups.js.map