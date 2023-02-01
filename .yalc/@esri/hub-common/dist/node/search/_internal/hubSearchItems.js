"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hubContentToSearchResult = exports.jsonApiToHubContent = exports.hubSearchItems = void 0;
const util_1 = require("../../util");
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
async function hubSearchItems(query, options) {
    throw new Error("Not implemented");
}
exports.hubSearchItems = hubSearchItems;
/**
 * Re-structure a jsonApi data entry into a flat object cast into
 * IHubContent
 * @param data
 * @returns
 */
/* istanbul ignore next */
function jsonApiToHubContent(data) {
    const content = util_1.cloneObject(data.attributes);
    content.id = data.id;
    return content;
}
exports.jsonApiToHubContent = jsonApiToHubContent;
/* istanbul ignore next */
function hubContentToSearchResult(content) {
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
exports.hubContentToSearchResult = hubContentToSearchResult;
//# sourceMappingURL=hubSearchItems.js.map