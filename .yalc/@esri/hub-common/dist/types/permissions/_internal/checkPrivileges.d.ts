import { IArcGISContext } from "../../ArcGISContext";
import { IPermissionPolicy, IPolicyCheck } from "../types";
/**
 * Validate privilege policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
export declare function checkPrivileges(policy: IPermissionPolicy, context: IArcGISContext, entity?: Record<string, any>): IPolicyCheck[];
