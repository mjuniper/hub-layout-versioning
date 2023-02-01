import { IArcGISContext } from "../../ArcGISContext";
import { IPermissionPolicy, IPolicyCheck } from "../types";
/**
 * Validate entityOwner policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
export declare function checkAlphaGating(policy: IPermissionPolicy, context: IArcGISContext, entity?: Record<string, any>): IPolicyCheck[];
