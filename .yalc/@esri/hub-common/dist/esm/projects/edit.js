// Note - we separate these imports so we can cleanly spy on things in tests
import { createModel, getModel, updateModel } from "../models";
import { constructSlug, getUniqueSlug, setSlugKeyword } from "../items/slugs";
import { cloneObject, interpolate, } from "../index";
import { removeItem } from "@esri/arcgis-rest-portal";
import { PropertyMapper } from "../core/_internal/PropertyMapper";
import { DEFAULT_PROJECT, DEFAULT_PROJECT_MODEL } from "./defaults";
import { HubProjectEditUiSchema, HubProjectCreateUiSchema, HubProjectSchema, } from "../core/schemas";
import { filterSchemaToUiSchema } from "../core/schemas/internal";
import { applyUiSchemaElementOptions } from "../core/schemas/internal/applyUiSchemaElementOptions";
import { computeProps } from "./_internal/computeProps";
import { getPropertyMap } from "./_internal/getPropertyMap";
/**
 * @private
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
    const mapper = new PropertyMapper(getPropertyMap());
    // create model from object, using the default model as a starting point
    let model = mapper.objectToModel(project, cloneObject(DEFAULT_PROJECT_MODEL));
    // create the item
    model = await createModel(model, requestOptions);
    // map the model back into a IHubProject
    let newProject = mapper.modelToObject(model, {});
    newProject = computeProps(model, newProject, requestOptions);
    // and return it
    return newProject;
}
/**
 * @private
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
    const mapper = new PropertyMapper(getPropertyMap());
    // Note: Although we are fetching the model, and applying changes onto it,
    // we are not attempting to handle "concurrent edit" conflict resolution
    // but this is where we would apply that sort of logic
    const modelToUpdate = mapper.objectToModel(project, model);
    // update the backing item
    const updatedModel = await updateModel(modelToUpdate, requestOptions);
    // now map back into a project and return that
    let updatedProject = mapper.modelToObject(updatedModel, project);
    updatedProject = computeProps(model, updatedProject, requestOptions);
    // the casting is needed because modelToObject returns a `Partial<T>`
    // where as this function returns a `T`
    return updatedProject;
}
/**
 * @private
 * Remove a Hub Project
 * @param id
 * @param requestOptions
 */
export async function deleteProject(id, requestOptions) {
    const ro = Object.assign(Object.assign({}, requestOptions), { id });
    await removeItem(ro);
    return;
}
/**
 * Get the editor config for for the HubProject entity.
 * @param i18nScope Translation scope to be interpolated into the schemas
 * @param type
 * @param options Optional hash of Element component options
 * @returns
 */
export async function getHubProjectEditorConfig(i18nScope, type, options = []) {
    // schema is always the entire schema
    let schema = cloneObject(HubProjectSchema);
    // uiSchema is the complete (edit) schema, unless otherwise specified
    let uiSchema = cloneObject(HubProjectEditUiSchema);
    // by default we don't need to filter the schema b/c it's the entire schema
    let filterSchema = false;
    // if another schema is requested, we need to use that UI schema
    // and the subset the overall schema down to just the properties
    // used in the UI schema
    switch (type) {
        case "create":
            uiSchema = cloneObject(HubProjectCreateUiSchema);
            filterSchema = true;
            break;
    }
    if (filterSchema) {
        // filter out properties not used in the UI schema
        schema = filterSchemaToUiSchema(schema, uiSchema);
    }
    // interpolate the i18n scope into the uiSchema
    uiSchema = interpolate(uiSchema, { i18nScope });
    // apply the options
    uiSchema = applyUiSchemaElementOptions(uiSchema, options);
    return Promise.resolve({ schema, uiSchema });
}
//# sourceMappingURL=edit.js.map