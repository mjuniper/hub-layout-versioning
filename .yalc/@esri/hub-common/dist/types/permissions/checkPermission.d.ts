import { IArcGISContext } from "../ArcGISContext";
import { IPermissionAccessResponse, Permission } from "./types";
/**
 * Check a permission against the system policies, and possibly an entity policy
 * @param permission
 * @param context
 * @param entity
 * @returns
 */
export declare function checkPermission(permission: Permission, context: IArcGISContext, entity?: Record<string, any>): IPermissionAccessResponse;
