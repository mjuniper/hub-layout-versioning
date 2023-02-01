import { IArcGISContext } from "../../ArcGISContext";
import { IPolicyAssertion, IPolicyCheck } from "../types";
/**
 * Check a specific EntityAssertion
 * Exported purely for testing. Not exported from the package.
 * @param assertion
 * @param entity
 * @param context
 * @returns
 */
export declare function checkAssertion(assertion: IPolicyAssertion, entity: Record<string, any>, context: IArcGISContext): IPolicyCheck;
