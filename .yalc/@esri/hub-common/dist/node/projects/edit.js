"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHubProjectEditorConfig = exports.deleteProject = exports.updateProject = exports.createProject = void 0;
// Note - we separate these imports so we can cleanly spy on things in tests
const models_1 = require("../models");
const slugs_1 = require("../items/slugs");
const index_1 = require("../index");
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const PropertyMapper_1 = require("../core/_internal/PropertyMapper");
const defaults_1 = require("./defaults");
const schemas_1 = require("../core/schemas");
const internal_1 = require("../core/schemas/internal");
const applyUiSchemaElementOptions_1 = require("../core/schemas/internal/applyUiSchemaElementOptions");
const computeProps_1 = require("./_internal/computeProps");
const getPropertyMap_1 = require("./_internal/getPropertyMap");
/**
 * @private
 * Create a new Hub Project item
 *
 * Minimal properties are name and org
 *
 * @param project
 * @param requestOptions
 */
async function createProject(partialProject, requestOptions) {
    // merge incoming with the default
    // this expansion solves the typing somehow
    const project = Object.assign(Object.assign({}, defaults_1.DEFAULT_PROJECT), partialProject);
    // Create a slug from the title if one is not passed in
    if (!project.slug) {
        project.slug = slugs_1.constructSlug(project.name, project.orgUrlKey);
    }
    // Ensure slug is  unique
    project.slug = await slugs_1.getUniqueSlug({ slug: project.slug }, requestOptions);
    // add slug to keywords
    project.typeKeywords = slugs_1.setSlugKeyword(project.typeKeywords, project.slug);
    // Map project object onto a default project Model
    const mapper = new PropertyMapper_1.PropertyMapper(getPropertyMap_1.getPropertyMap());
    // create model from object, using the default model as a starting point
    let model = mapper.objectToModel(project, index_1.cloneObject(defaults_1.DEFAULT_PROJECT_MODEL));
    // create the item
    model = await models_1.createModel(model, requestOptions);
    // map the model back into a IHubProject
    let newProject = mapper.modelToObject(model, {});
    newProject = computeProps_1.computeProps(model, newProject, requestOptions);
    // and return it
    return newProject;
}
exports.createProject = createProject;
/**
 * @private
 * Update a Hub Project
 * @param project
 * @param requestOptions
 */
async function updateProject(project, requestOptions) {
    // verify that the slug is unique, excluding the current project
    project.slug = await slugs_1.getUniqueSlug({ slug: project.slug, existingId: project.id }, requestOptions);
    // get the backing item & data
    const model = await models_1.getModel(project.id, requestOptions);
    // create the PropertyMapper
    const mapper = new PropertyMapper_1.PropertyMapper(getPropertyMap_1.getPropertyMap());
    // Note: Although we are fetching the model, and applying changes onto it,
    // we are not attempting to handle "concurrent edit" conflict resolution
    // but this is where we would apply that sort of logic
    const modelToUpdate = mapper.objectToModel(project, model);
    // update the backing item
    const updatedModel = await models_1.updateModel(modelToUpdate, requestOptions);
    // now map back into a project and return that
    let updatedProject = mapper.modelToObject(updatedModel, project);
    updatedProject = computeProps_1.computeProps(model, updatedProject, requestOptions);
    // the casting is needed because modelToObject returns a `Partial<T>`
    // where as this function returns a `T`
    return updatedProject;
}
exports.updateProject = updateProject;
/**
 * @private
 * Remove a Hub Project
 * @param id
 * @param requestOptions
 */
async function deleteProject(id, requestOptions) {
    const ro = Object.assign(Object.assign({}, requestOptions), { id });
    await arcgis_rest_portal_1.removeItem(ro);
    return;
}
exports.deleteProject = deleteProject;
/**
 * Get the editor config for for the HubProject entity.
 * @param i18nScope Translation scope to be interpolated into the schemas
 * @param type
 * @param options Optional hash of Element component options
 * @returns
 */
async function getHubProjectEditorConfig(i18nScope, type, options = []) {
    // schema is always the entire schema
    let schema = index_1.cloneObject(schemas_1.HubProjectSchema);
    // uiSchema is the complete (edit) schema, unless otherwise specified
    let uiSchema = index_1.cloneObject(schemas_1.HubProjectEditUiSchema);
    // by default we don't need to filter the schema b/c it's the entire schema
    let filterSchema = false;
    // if another schema is requested, we need to use that UI schema
    // and the subset the overall schema down to just the properties
    // used in the UI schema
    switch (type) {
        case "create":
            uiSchema = index_1.cloneObject(schemas_1.HubProjectCreateUiSchema);
            filterSchema = true;
            break;
    }
    if (filterSchema) {
        // filter out properties not used in the UI schema
        schema = internal_1.filterSchemaToUiSchema(schema, uiSchema);
    }
    // interpolate the i18n scope into the uiSchema
    uiSchema = index_1.interpolate(uiSchema, { i18nScope });
    // apply the options
    uiSchema = applyUiSchemaElementOptions_1.applyUiSchemaElementOptions(uiSchema, options);
    return Promise.resolve({ schema, uiSchema });
}
exports.getHubProjectEditorConfig = getHubProjectEditorConfig;
//# sourceMappingURL=edit.js.map