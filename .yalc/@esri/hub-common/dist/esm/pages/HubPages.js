import { getFamily } from "../content";
import { getHubRelativeUrl } from "../content/_internal";
import { fetchItemEnrichments } from "../items/_enrichments";
import { getProp } from "../objects";
import { getItemThumbnailUrl } from "../resources";
import { parseInclude } from "../search/_internal/parseInclude";
import { getItemHomeUrl } from "../urls";
import { unique } from "../util";
import { mapBy } from "../utils";
/**
 * Fetch Page specific Enrichments
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
export async function enrichPageSearchResult(item, include, requestOptions) {
    // Create the basic structure
    const result = {
        access: item.access,
        id: item.id,
        type: item.type,
        name: item.title,
        owner: item.owner,
        typeKeywords: item.typeKeywords,
        tags: item.tags,
        categories: item.categories,
        summary: item.snippet || item.description,
        createdDate: new Date(item.created),
        createdDateSource: "item.created",
        updatedDate: new Date(item.modified),
        updatedDateSource: "item.modified",
        family: getFamily(item.type),
        links: {
            self: "not-implemented",
            siteRelative: "not-implemented",
            thumbnail: "not-implemented",
        },
    };
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
        // TODO: Look into caching for the requests in fetchItemEnrichments
        enriched = await fetchItemEnrichments(item, enrichments, requestOptions);
    }
    // map the enriched props onto the result
    specs.forEach((spec) => {
        result[spec.prop] = getProp(enriched, spec.path);
    });
    // Handle Links
    result.links.thumbnail = getItemThumbnailUrl(item, requestOptions);
    result.links.self = getItemHomeUrl(result.id, requestOptions);
    result.links.siteRelative = getHubRelativeUrl(result.type, result.id, item.typeKeywords);
    return result;
}
//# sourceMappingURL=HubPages.js.map