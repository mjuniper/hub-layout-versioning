import { IArcGISContext } from "../../ArcGISContext";
import { IPermissionPolicy, IPolicyCheck } from "../types";
/**
 * Validate authentication policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
export declare function checkAuthentication(policy: IPermissionPolicy, context: IArcGISContext, entity?: Record<string, any>): IPolicyCheck[];
