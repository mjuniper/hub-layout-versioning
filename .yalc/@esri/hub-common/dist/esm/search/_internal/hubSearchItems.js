import { cloneObject } from "../../util";
// ##    ##  #######  ######## ########
// ###   ## ##     ##    ##    ##
// ####  ## ##     ##    ##    ##
// ## ## ## ##     ##    ##    ######
// ##  #### ##     ##    ##    ##
// ##   ### ##     ##    ##    ##
// ##    ##  #######     ##    ########
//
// Since Hub API is still in flux, there is no code coverage for this file
/**
 * @private
 * Execute item search against the Hub API
 * @param query
 * @param options
 * @returns
 */
/* istanbul ignore next */
export async function hubSearchItems(query, options) {
    throw new Error("Not implemented");
}
/**
 * Re-structure a jsonApi data entry into a flat object cast into
 * IHubContent
 * @param data
 * @returns
 */
/* istanbul ignore next */
export function jsonApiToHubContent(data) {
    const content = cloneObject(data.attributes);
    content.id = data.id;
    return content;
}
/* istanbul ignore next */
export function hubContentToSearchResult(content) {
    const result = {
        access: content.access,
        id: content.id,
        type: content.type,
        name: content.name,
        owner: content.owner,
        summary: content.snippet || content.description,
        createdDate: new Date(content.createdDate),
        createdDateSource: content.createdDateSource,
        updatedDate: new Date(content.updatedDate),
        updatedDateSource: content.updatedDateSource,
        thumbnailUrl: content.thumbnailUrl,
        metadata: [],
        family: content.family,
        urls: {
            portalHome: "not-implemented",
            relative: "not-implemented",
        },
    };
    // TODO: Per-type plucking of props into the `meta` hash for use in the card components
    return Promise.resolve(result);
}
//# sourceMappingURL=hubSearchItems.js.map