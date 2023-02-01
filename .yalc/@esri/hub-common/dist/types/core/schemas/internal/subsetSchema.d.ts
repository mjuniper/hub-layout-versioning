import { IConfigurationSchema } from "../types";
/**
 * Subset a json schema to only those properties specified.
 * @param schema
 * @param props
 * @returns
 */
export declare function subsetSchema(schema: IConfigurationSchema, props: string[]): IConfigurationSchema;
