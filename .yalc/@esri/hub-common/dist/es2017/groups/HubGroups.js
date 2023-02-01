import { fetchGroupEnrichments } from "./_internal/enrichments";
import { getProp } from "../objects";
import { getGroupThumbnailUrl } from "../search";
import { parseInclude } from "../search/_internal/parseInclude";
import { getGroupHomeUrl } from "../urls";
import { unique } from "../util";
import { mapBy } from "../utils";
/**
 * Enrich a generic search result
 * @param group
 * @param includes
 * @param requestOptions
 * @returns
 */
export async function enrichGroupSearchResult(group, include, requestOptions) {
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
    include = [...DEFAULTS, ...include].filter(unique);
    // Parse the includes into a valid set of enrichments
    const specs = include.map(parseInclude);
    // Extract out the low-level enrichments needed
    const enrichments = mapBy("enrichment", specs).filter(unique);
    // fetch the enrichments
    let enriched = {};
    if (enrichments.length) {
        enriched = await fetchGroupEnrichments(group, enrichments, requestOptions);
    }
    // map the enriched props onto the result
    specs.forEach((spec) => {
        result[spec.prop] = getProp(enriched, spec.path);
    });
    // Handle links
    result.links.thumbnail = getGroupThumbnailUrl(requestOptions.portal, group);
    result.links.self = getGroupHomeUrl(result.id, requestOptions);
    result.links.siteRelative = `/teams/${result.id}`;
    return result;
}
//# sourceMappingURL=HubGroups.js.map