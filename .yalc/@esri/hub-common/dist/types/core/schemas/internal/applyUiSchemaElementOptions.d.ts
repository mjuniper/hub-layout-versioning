import { IUiSchema, UiSchemaElementOptions } from "../types";
/**
 * Apply a set of run-time configurations into the UI schema so
 * the controls can be configured for the current environment.
 * TODO: Add Example
 * @param schema
 * @param options
 * @returns
 */
export declare function applyUiSchemaElementOptions(schema: IUiSchema, options?: UiSchemaElementOptions[]): IUiSchema;
