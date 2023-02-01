import { EntityType, IQuery } from "../types";
/**
 * @private
 * Construct a query from a string
 * @param value
 * @param predicateKey
 * @param targetEntity
 * @returns
 */
export declare function createQueryFromString(value: string, predicateKey: string, targetEntity: EntityType): IQuery;
