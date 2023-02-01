import { IArcGISContext } from "../../ArcGISContext";
import { IContainsResponse, IDeepCatalogInfo } from "../../search";
/**
 * Check if a particular entity is contained in a catalog.
 *
 * Unlike `Catalog.contains(...)`, this function can checks multiple catalogs to validate
 * transitive containment.
 *
 * Scenario:
 * - Site `00a`'s Catalog contains Initiative `00b`.
 * - Initiative `00b`'s Catalog contains Project `00c`.
 * - Project `00c`'s catalog contains Dataset `00d`.
 *
 * Problem: Validate that `00d` should be displayed in the context of `00a`.
 *
 * Logic:
 * - Check if `00d` is contained in `00c`'s catalog
 * - Check if `00c` is contained in `00b`'s catalog
 * - Check if `00b` is contained in `00a`'s catalog
 * If all three are true, then `00d` is considered contained in `00a`'s catalog.
 *
 * @param identifier
 * @param options
 * @returns
 */
export declare function deepContains(identifier: string, hierarchy: IDeepCatalogInfo[], context: IArcGISContext): Promise<IContainsResponse>;
