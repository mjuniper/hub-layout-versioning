import { IUiSchema } from "../types";
/**
 * Get all the property names from a UI schema.
 *
 * Used to subset a json schema to only those properties used in a UI Schema
 * @param uiSchema
 * @returns
 */
export declare function getUiSchemaProps(uiSchema: IUiSchema): string[];
