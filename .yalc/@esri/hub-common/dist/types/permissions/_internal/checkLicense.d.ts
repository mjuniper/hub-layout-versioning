import { IArcGISContext } from "../../ArcGISContext";
import { IPermissionPolicy, IPolicyCheck } from "../types";
/**
 * Validate license policy
 * @param policy
 * @param response
 * @param context
 * @returns
 */
export declare function checkLicense(policy: IPermissionPolicy, context: IArcGISContext, entity?: Record<string, any>): IPolicyCheck[];
