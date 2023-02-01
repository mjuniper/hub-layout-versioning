import { IPermissionPolicy, Permission } from "./types";
/**
 * All the permission policies for the Hub
 */
export declare const HubPermissionsPolicies: IPermissionPolicy[];
/**
 * Get the policies defined for a specific permission
 * @param permission
 * @returns
 */
export declare function getPermissionPolicy(permission: Permission): IPermissionPolicy;
