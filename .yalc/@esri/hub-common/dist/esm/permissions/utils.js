import { cloneObject } from "../util";
/**
 * Add a policy to an array of entity policies
 * Returns a new array
 * @param permissions
 * @param policy
 * @returns
 */
export function addPermissionPolicy(permissions = [], policy) {
    const clone = removePermissionPolicy(permissions, policy.permission, policy.collaborationId);
    clone.push(policy);
    return clone;
}
/**
 * Remove a policy from an array of entity policies
 * Returns a new array
 * @param permissions
 * @param permission
 * @param id
 * @returns
 */
export function removePermissionPolicy(permissions = [], permission, id) {
    const clone = cloneObject(permissions);
    return clone.filter((p) => p.permission !== permission || p.collaborationId !== id);
}
//# sourceMappingURL=utils.js.map