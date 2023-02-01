"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrichInitiativeSearchResult = exports.convertItemToInitiative = exports.deleteInitiative = exports.fetchInitiative = exports.updateInitiative = exports.createInitiative = void 0;
// Note - we separate these imports so we can cleanly spy on things in tests
const models_1 = require("../models");
const slugs_1 = require("../items/slugs");
const index_1 = require("../index");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const PropertyMapper_1 = require("../core/_internal/PropertyMapper");
const parseInclude_1 = require("../search/_internal/parseInclude");
const _enrichments_1 = require("../items/_enrichments");
const _internal_1 = require("../content/_internal");
const defaults_1 = require("./defaults");
const getPropertyMap_1 = require("./_internal/getPropertyMap");
const computeProps_1 = require("./_internal/computeProps");
/**
 * @private
 * Create a new Hub Initiative item
 *
 * Minimal properties are name and orgUrlKey
 *
 * @param partialInitiative
 * @param requestOptions
 */
async function createInitiative(partialInitiative, requestOptions) {
    // merge incoming with the default
    // this expansion solves the typing somehow
    const initiative = Object.assign(Object.assign({}, defaults_1.DEFAULT_INITIATIVE), partialInitiative);
    // Create a slug from the title if one is not passed in
    if (!initiative.slug) {
        initiative.slug = slugs_1.constructSlug(initiative.name, initiative.orgUrlKey);
    }
    // Ensure slug is  unique
    initiative.slug = await slugs_1.getUniqueSlug({ slug: initiative.slug }, requestOptions);
    // add slug to keywords
    initiative.typeKeywords = slugs_1.setSlugKeyword(initiative.typeKeywords, initiative.slug);
    // Map initiative object onto a default initiative Model
    const mapper = new PropertyMapper_1.PropertyMapper(getPropertyMap_1.getPropertyMap());
    // create model from object, using the default model as a starting point
    let model = mapper.objectToModel(initiative, index_1.cloneObject(defaults_1.DEFAULT_INITIATIVE_MODEL));
    // create the item
    model = await models_1.createModel(model, requestOptions);
    // map the model back into a IHubInitiative
    let newInitiative = mapper.modelToObject(model, {});
    newInitiative = computeProps_1.computeProps(model, newInitiative, requestOptions);
    // and return it
    return newInitiative;
}
exports.createInitiative = createInitiative;
/**
 * @private
 * Update a Hub Initiative
 * @param initiative
 * @param requestOptions
 */
async function updateInitiative(initiative, requestOptions) {
    // verify that the slug is unique, excluding the current initiative
    initiative.slug = await slugs_1.getUniqueSlug({ slug: initiative.slug, existingId: initiative.id }, requestOptions);
    // get the backing item & data
    const model = await models_1.getModel(initiative.id, requestOptions);
    // create the PropertyMapper
    const mapper = new PropertyMapper_1.PropertyMapper(getPropertyMap_1.getPropertyMap());
    // Note: Although we are fetching the model, and applying changes onto it,
    // we are not attempting to handle "concurrent edit" conflict resolution
    // but this is where we would apply that sort of logic
    const modelToUpdate = mapper.objectToModel(initiative, model);
    // update the backing item
    const updatedModel = await models_1.updateModel(modelToUpdate, requestOptions);
    // now map back into an initiative and return that
    let updatedInitiative = mapper.modelToObject(updatedModel, initiative);
    updatedInitiative = computeProps_1.computeProps(model, updatedInitiative, requestOptions);
    // the casting is needed because modelToObject returns a `Partial<T>`
    // where as this function returns a `T`
    return updatedInitiative;
}
exports.updateInitiative = updateInitiative;
/**
 * @private
 * Get a Hub Initiative by id or slug
 * @param identifier item id or slug
 * @param requestOptions
 */
function fetchInitiative(identifier, requestOptions) {
    let getPrms;
    if (index_1.isGuid(identifier)) {
        // get item by id
        getPrms = arcgis_rest_portal_1.getItem(identifier, requestOptions);
    }
    else {
        getPrms = slugs_1.getItemBySlug(identifier, requestOptions);
    }
    return getPrms.then((item) => {
        if (!item)
            return null;
        return convertItemToInitiative(item, requestOptions);
    });
}
exports.fetchInitiative = fetchInitiative;
/**
 * @private
 * Remove a Hub Initiative
 * @param id
 * @param requestOptions
 */
async function deleteInitiative(id, requestOptions) {
    const ro = Object.assign(Object.assign({}, requestOptions), { id });
    await arcgis_rest_portal_1.removeItem(ro);
    return;
}
exports.deleteInitiative = deleteInitiative;
/**
 * @private
 * Convert an Hub Initiative Item into a Hub Initiative, fetching any additional
 * information that may be required
 * @param item
 * @param auth
 * @returns
 */
async function convertItemToInitiative(item, requestOptions) {
    const model = await models_1.fetchModelFromItem(item, requestOptions);
    const mapper = new PropertyMapper_1.PropertyMapper(getPropertyMap_1.getPropertyMap());
    const prj = mapper.modelToObject(model, {});
    return computeProps_1.computeProps(model, prj, requestOptions);
}
exports.convertItemToInitiative = convertItemToInitiative;
/**
 * @private
 * Fetch Initiative specific enrichments
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
async function enrichInitiativeSearchResult(item, include, requestOptions) {
    // Create the basic structure
    const result = {
        access: item.access,
        id: item.id,
        type: item.type,
        name: item.title,
        owner: item.owner,
        summary: item.snippet || item.description,
        createdDate: new Date(item.created),
        createdDateSource: "item.created",
        updatedDate: new Date(item.modified),
        updatedDateSource: "item.modified",
        family: index_1.getFamily(item.type),
        links: {
            self: "not-implemented",
            siteRelative: "not-implemented",
            thumbnail: "not-implemented",
        },
    };
    // default includes
    const DEFAULTS = [];
    // merge includes
    include = [...DEFAULTS, ...include].filter(index_1.unique);
    // Parse the includes into a valid set of enrichments
    const specs = include.map(parseInclude_1.parseInclude);
    // Extract out the low-level enrichments needed
    const enrichments = index_1.mapBy("enrichment", specs).filter(index_1.unique);
    // fetch the enrichments
    let enriched = {};
    if (enrichments.length) {
        // TODO: Look into caching for the requests in fetchItemEnrichments
        enriched = await _enrichments_1.fetchItemEnrichments(item, enrichments, requestOptions);
    }
    // map the enriched props onto the result
    specs.forEach((spec) => {
        result[spec.prop] = index_1.getProp(enriched, spec.path);
    });
    // Handle links
    // TODO: Link handling should be an enrichment
    result.links.thumbnail = index_1.getItemThumbnailUrl(item, requestOptions);
    result.links.self = index_1.getItemHomeUrl(result.id, requestOptions);
    result.links.siteRelative = _internal_1.getHubRelativeUrl(result.type, result.id, item.typeKeywords);
    return result;
}
exports.enrichInitiativeSearchResult = enrichInitiativeSearchResult;
//# sourceMappingURL=HubInitiatives.js.map