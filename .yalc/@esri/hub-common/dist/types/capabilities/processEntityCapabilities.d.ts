import { EntityCapabilities } from "./types";
/**
 * Take an entity's capabilities and merge them with the default capabilities ensuring that only the capabilities defined in the business rules are allowed through.
 * @param entityCapabilities
 * @param defaultCapabilities
 * @returns
 */
export declare function processEntityCapabilities(entityCapabilities: EntityCapabilities, defaultCapabilities: EntityCapabilities): EntityCapabilities;
