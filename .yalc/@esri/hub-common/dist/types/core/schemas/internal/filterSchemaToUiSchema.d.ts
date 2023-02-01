import { IConfigurationSchema, IUiSchema } from "../types";
/**
 * Subset a json schema to only those properties needed by the uiSchema
 * @param schema
 * @param uiSchema
 * @returns
 */
export declare function filterSchemaToUiSchema(schema: IConfigurationSchema, uiSchema: IUiSchema): IConfigurationSchema;
