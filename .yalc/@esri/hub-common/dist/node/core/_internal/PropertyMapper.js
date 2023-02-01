"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapModelToObject = exports.mapObjectToModel = exports.PropertyMapper = void 0;
const objects_1 = require("../../objects");
const util_1 = require("../../util");
/**
 * @private
 * Manage forward and backward property mappings to
 * streamline conversion between the Hub entities, and
 * the backing IModel
 */
class PropertyMapper {
    /**
     * Pass in the mappings between the Entity and
     * it's backing structure (model or otherwise)
     * @param mappings
     */
    constructor(mappings) {
        this.mappings = mappings;
    }
    /**
     * Map properties from a model on to the entity object.
     *
     * Used when constructing an entity can from a fetched model,
     * in which case the entity should be an empty object (`{}`).
     *
     * Can also be used to apply changes to an entity from a model,
     * in which case an existing entity can be passed in.
     * @param model
     * @param object
     * @returns
     */
    modelToObject(model, object) {
        const obj = mapModelToObject(model, object, this.mappings);
        // Additional Read-Only Model Level Property Mappings
        // ------------------------------
        // canEdit and canDelete
        // ------------------------------
        // use setProp to side-step typechecking
        objects_1.setProp("canEdit", ["admin", "update"].includes(model.item.itemControl), obj);
        objects_1.setProp("canDelete", model.item.itemControl === "admin", obj);
        return obj;
    }
    /**
     * Map properties from an entity object onto a model.
     *
     * Typically the model will already exist, and this
     * method is used to transfer changes to the model
     * prior to storage.
     * @param object
     * @param model
     * @returns
     */
    objectToModel(object, model) {
        return mapObjectToModel(object, model, this.mappings);
    }
}
exports.PropertyMapper = PropertyMapper;
/**
 * Generic function to apply properties from an Object
 * (i.e. IHubProject) onto a Model that can be persisted to an Item
 * @param object
 * @param model
 * @param mappings
 * @returns
 */
function mapObjectToModel(object, model, mappings) {
    return mapProps(object, "objectKey", model, "modelKey", mappings);
}
exports.mapObjectToModel = mapObjectToModel;
/**
 * Generic function to apply properties from a Model
 * onto an Object (i.e. IHubProject etc)
 * @param model
 * @param object
 * @param mappings
 * @returns
 */
function mapModelToObject(model, object, mappings) {
    return mapProps(model, "modelKey", object, "objectKey", mappings);
}
exports.mapModelToObject = mapModelToObject;
/**
 * Internal function to map between objects
 * @param source
 * @param sourceKey
 * @param target
 * @param targetKey
 * @param mappings
 * @returns
 */
function mapProps(source, sourceKey, target, targetKey, mappings) {
    // clone the target
    const clone = util_1.cloneObject(target);
    // walk the property map array
    mappings.forEach((entry) => {
        // Verbose b/c typescript hates the use of property indexing with generics
        // i.e. entry<T>[sourceKey] make typescript angry
        const sourcePath = objects_1.getProp(entry, sourceKey);
        const targetPath = objects_1.getProp(entry, targetKey);
        // get the value from the source
        const sourceVal = objects_1.getProp(source, sourcePath);
        // if it's not null or undefined
        if (sourceVal !== null && sourceVal !== undefined) {
            // set it
            objects_1.deepSet(clone, targetPath, sourceVal);
        }
    });
    return clone;
}
//# sourceMappingURL=PropertyMapper.js.map