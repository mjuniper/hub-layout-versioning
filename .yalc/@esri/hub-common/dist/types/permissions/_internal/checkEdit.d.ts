import { IArcGISContext } from "../../ArcGISContext";
import { IPermissionPolicy, IPolicyCheck } from "../types";
/**
 * Validate entityEdit policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
export declare function checkEdit(policy: IPermissionPolicy, context: IArcGISContext, entity?: Record<string, any>): IPolicyCheck[];
