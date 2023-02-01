import { fetchUserEnrichments } from "./_internal/enrichments";
import { getProp } from "../objects";
import { getUserThumbnailUrl } from "../search";
import { parseInclude } from "../search/_internal/parseInclude";
import { getUserHomeUrl } from "../urls";
import { unique } from "../util";
import { mapBy } from "../utils";
/**
 * Enrich a User object
 * @param user
 * @param includes
 * @param requestOptions
 * @returns
 */
export async function enrichUserSearchResult(user, include, requestOptions) {
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
    include = [...DEFAULTS, ...include].filter(unique);
    // Parse the includes into a valid set of enrichments
    const specs = include.map(parseInclude);
    // Extract out the low-level enrichments needed
    const enrichments = mapBy("enrichment", specs).filter(unique);
    // fetch the enrichments
    let enriched = {};
    // Ignoring the else, because we currently have defaults, but want the guards
    // so if we remove that in the future, we don't call the fn
    /* istanbul ignore else */
    if (enrichments.length) {
        enriched = await fetchUserEnrichments(user, enrichments, requestOptions);
    }
    // map the enriched props onto the result
    specs.forEach((spec) => {
        result[spec.prop] = getProp(enriched, spec.path);
    });
    const token = requestOptions.authentication.token;
    // Handle links
    result.links.thumbnail = getUserThumbnailUrl(requestOptions.portal, user, token);
    result.links.self = getUserHomeUrl(result.id, requestOptions);
    result.links.siteRelative = `/people/${result.id}`;
    return result;
}
//# sourceMappingURL=HubUsers.js.map