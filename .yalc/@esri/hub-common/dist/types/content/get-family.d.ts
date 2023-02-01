import { HubFamily } from "../types";
/**
 * return the Hub family given an item's type
 * @param type item type
 * @returns Hub family
 */
export declare function getFamily(type: string): HubFamily;
/**
 * return the types associated with a provided Hub Family
 * Overrides are provided to match getFamily implementation
 * @param type item type
 * @returns Hub family
 */
export declare function getFamilyTypes(family: HubFamily): string[];
