import { IArcGISContext } from "../../ArcGISContext";
import { IPolicyCheck, IEntityPermissionPolicy } from "../types";
/**
 * Validate user meets entity policy
 * @param policy
 * @param context
 * @returns
 */
export declare function checkEntityPolicy(policy: IEntityPermissionPolicy, context: IArcGISContext): IPolicyCheck;
