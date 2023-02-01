import { IModel } from "../../types";
/**
 * @private
 * Manage forward and backward property mappings to
 * streamline conversion between the Hub entities, and
 * the backing IModel
 */
export declare class PropertyMapper<T> {
    mappings: IPropertyMap[];
    /**
     * Pass in the mappings between the Entity and
     * it's backing structure (model or otherwise)
     * @param mappings
     */
    constructor(mappings: IPropertyMap[]);
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
    modelToObject(model: IModel, object: T): T;
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
    objectToModel(object: T, model: IModel): IModel;
}
/**
 * Property Map Entry that provides a cross-walk
 * between a property path (`name`) on the "object"
 * to a property path on a model (`item.title`).
 *
 * This enables autmatic mapping of properties between
 * the two types of objects.
 */
export interface IPropertyMap {
    objectKey: string;
    modelKey: string;
}
/**
 * Generic function to apply properties from an Object
 * (i.e. IHubProject) onto a Model that can be persisted to an Item
 * @param object
 * @param model
 * @param mappings
 * @returns
 */
export declare function mapObjectToModel<T>(object: T, model: IModel, mappings: IPropertyMap[]): IModel;
/**
 * Generic function to apply properties from a Model
 * onto an Object (i.e. IHubProject etc)
 * @param model
 * @param object
 * @param mappings
 * @returns
 */
export declare function mapModelToObject<T>(model: IModel, object: T, mappings: IPropertyMap[]): T;
