// Note - we separate these imports so we can cleanly spy on things in tests
import { createModel, fetchModelFromItem, getModel, updateModel, } from "../models";
import { constructSlug, getItemBySlug, getUniqueSlug, setSlugKeyword, } from "../items/slugs";
import { isGuid, cloneObject, getItemThumbnailUrl, unique, mapBy, getProp, getFamily, getItemHomeUrl, } from "../index";
import { removeItem, getItem, } from "@esri/arcgis-rest-portal";
import { searchEntities } from "../search/_internal/searchEntities";
import { PropertyMapper } from "../core/_internal/PropertyMapper";
import { parseInclude } from "../search/_internal/parseInclude";
import { fetchItemEnrichments } from "../items/_enrichments";
import { getHubRelativeUrl } from "../content/_internal";
import { createQueryFromString } from "../search/_internal";
export const HUB_PROJECT_ITEM_TYPE = "Hub Project";
/**
 * Default values of a IHubProject
 */
const DEFAULT_PROJECT = {
    name: "No title provided",
    tags: [],
    typeKeywords: ["Hub Project"],
    status: "inactive",
};
/**
 * Default values for a new HubProject Model
 */
const DEFAULT_PROJECT_MODEL = {
    item: {
        type: HUB_PROJECT_ITEM_TYPE,
        title: "No Title Provided",
        description: "No Description Provided",
        snippet: "",
        tags: [],
        typeKeywords: ["Hub Project"],
        properties: {
            slug: "",
        },
    },
    data: {
        display: "about",
        timeline: {},
        status: "inactive",
        contacts: [],
        schemaVersion: 1,
    },
};
/**
 * Returns an Array of IPropertyMap objects
 * We could define these directly, but since the
 * properties of IHubProject map directly to properties
 * on item or data, it's slightly less verbose to
 * generate the structure.
 * @returns
 */
function getProjectPropertyMap() {
    const itemProps = [
        "created",
        "culture",
        "description",
        "extent",
        "id",
        "modified",
        "owner",
        "snippet",
        "tags",
        "typeKeywords",
        "url",
        "type",
    ];
    const dataProps = [
        "contacts",
        "display",
        "geometry",
        "headerImage",
        "layout",
        "location",
        "status",
    ];
    const map = [];
    itemProps.forEach((entry) => {
        map.push({ objectKey: entry, modelKey: `item.${entry}` });
    });
    dataProps.forEach((entry) => {
        map.push({ objectKey: entry, modelKey: `data.${entry}` });
    });
    // Deeper mappings
    map.push({
        objectKey: "slug",
        modelKey: "item.properties.slug",
    });
    map.push({
        objectKey: "orgUrlKey",
        modelKey: "item.properties.orgUrlKey",
    });
    map.push({
        objectKey: "name",
        modelKey: "item.title",
    });
    return map;
}
/**
 * Create a new Hub Project item
 *
 * Minimal properties are name and org
 *
 * @param project
 * @param requestOptions
 */
export async function createProject(partialProject, requestOptions) {
    // merge incoming with the default
    // this expansion solves the typing somehow
    const project = Object.assign(Object.assign({}, DEFAULT_PROJECT), partialProject);
    // Create a slug from the title if one is not passed in
    if (!project.slug) {
        project.slug = constructSlug(project.name, project.orgUrlKey);
    }
    // Ensure slug is  unique
    project.slug = await getUniqueSlug({ slug: project.slug }, requestOptions);
    // add slug to keywords
    project.typeKeywords = setSlugKeyword(project.typeKeywords, project.slug);
    // Map project object onto a default project Model
    const mapper = new PropertyMapper(getProjectPropertyMap());
    // create model from object, using the default model as a starting point
    let model = mapper.objectToModel(project, cloneObject(DEFAULT_PROJECT_MODEL));
    // create the item
    model = await createModel(model, requestOptions);
    // map the model back into a IHubProject
    const newProject = mapper.modelToObject(model, {});
    // and return it
    return newProject;
}
/**
 * Update a Hub Project
 * @param project
 * @param requestOptions
 */
export async function updateProject(project, requestOptions) {
    // verify that the slug is unique, excluding the current project
    project.slug = await getUniqueSlug({ slug: project.slug, existingId: project.id }, requestOptions);
    // get the backing item & data
    const model = await getModel(project.id, requestOptions);
    // create the PropertyMapper
    const mapper = new PropertyMapper(getProjectPropertyMap());
    // Note: Although we are fetching the model, and applying changes onto it,
    // we are not attempting to handle "concurrent edit" conflict resolution
    // but this is where we would apply that sort of logic
    const modelToUpdate = mapper.objectToModel(project, model);
    // update the backing item
    const updatedModel = await updateModel(modelToUpdate, requestOptions);
    // now map back into a project and return that
    const updatedProject = mapper.modelToObject(updatedModel, project);
    // the casting is needed because modelToObject returns a `Partial<T>`
    // where as this function returns a `T`
    return updatedProject;
}
/**
 * Get a Hub Project by id or slug
 * @param identifier item id or slug
 * @param requestOptions
 */
export function fetchProject(identifier, requestOptions) {
    let getPrms;
    if (isGuid(identifier)) {
        // get item by id
        getPrms = getItem(identifier, requestOptions);
    }
    else {
        getPrms = getItemBySlug(identifier, requestOptions);
    }
    return getPrms.then((item) => {
        if (!item)
            return null;
        return convertItemToProject(item, requestOptions);
    });
}
/**
 * Remove a Hub Project
 * @param id
 * @param requestOptions
 */
export async function destroyProject(id, requestOptions) {
    const ro = Object.assign(Object.assign({}, requestOptions), { id });
    await removeItem(ro);
    return;
}
/**
 * Search for Projects, and get IHubProject results
 *
 * Different from `hubSearch` in that this returns the IHubProjects
 *
 * @param filter
 * @param options
 * @returns
 */
export async function searchProjects(query, options) {
    let qry;
    if (typeof query === "string") {
        qry = createQueryFromString(query, "term", "item");
    }
    else {
        qry = cloneObject(query);
    }
    const scopingFilters = [
        {
            predicates: [
                {
                    type: "Hub Project",
                },
            ],
        },
    ];
    // add filters from the passed in query
    qry.filters = [...scopingFilters, ...qry.filters];
    return searchEntities(qry, convertItemToProject, options);
}
/**
 * Convert an Hub Project Item into a Hub Project, fetching any additional
 * information that may be required
 * @param item
 * @param auth
 * @returns
 */
export async function convertItemToProject(item, requestOptions) {
    const model = await fetchModelFromItem(item, requestOptions);
    const mapper = new PropertyMapper(getProjectPropertyMap());
    let token;
    if (requestOptions.authentication) {
        const session = requestOptions.authentication;
        token = session.token;
    }
    const prj = mapper.modelToObject(model, {});
    prj.thumbnailUrl = getItemThumbnailUrl(model.item, requestOptions, token);
    return prj;
}
/**
 * Fetch project specific enrichments
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
export async function enrichProjectSearchResult(item, include, requestOptions) {
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
    // Handle links
    // TODO: Link handling should be an enrichment
    result.links.thumbnail = getItemThumbnailUrl(item, requestOptions);
    result.links.self = getItemHomeUrl(result.id, requestOptions);
    result.links.siteRelative = getHubRelativeUrl(result.type, result.id, item.typeKeywords);
    return result;
}
//# sourceMappingURL=HubProjects.js.map