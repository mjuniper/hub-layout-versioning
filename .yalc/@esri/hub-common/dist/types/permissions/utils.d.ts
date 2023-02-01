import { IEntityPermissionPolicy, Permission } from "./types";
/**
 * Add a policy to an array of entity policies
 * Returns a new array
 * @param permissions
 * @param policy
 * @returns
 */
export declare function addPermissionPolicy(permissions: IEntityPermissionPolicy[], policy: IEntityPermissionPolicy): IEntityPermissionPolicy[];
/**
 * Remove a policy from an array of entity policies
 * Returns a new array
 * @param permissions
 * @param permission
 * @param id
 * @returns
 */
export declare function removePermissionPolicy(permissions: IEntityPermissionPolicy[], permission: Permission, id: string): IEntityPermissionPolicy[];
