/**
 * Defines the values for Permissions
 * It's critical that the arrays defined in the modules use `as const`
 * otherwise Permission devolves into just a string type
 */
declare const validPermissions: readonly ["hub:site:create", "hub:site:delete", "hub:site:edit", "hub:site:view", "hub:project:create", "hub:project:delete", "hub:project:edit", "hub:project:view", "hub:initiative:create", "hub:initiative:delete", "hub:initiative:edit", "hub:initiative:view"];
/**
 * Defines the possible values for Permissions
 */
export declare type Permission = typeof validPermissions[number];
/**
 * Validate a Permission
 * @param permission
 * @returns
 */
export declare function isPermission(maybePermission: string): boolean;
export {};
