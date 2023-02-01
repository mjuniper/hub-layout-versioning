"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePermissionPolicy = exports.addPermissionPolicy = void 0;
const util_1 = require("../util");
/**
 * Add a policy to an array of entity policies
 * Returns a new array
 * @param permissions
 * @param policy
 * @returns
 */
function addPermissionPolicy(permissions = [], policy) {
    const clone = removePermissionPolicy(permissions, policy.permission, policy.collaborationId);
    clone.push(policy);
    return clone;
}
exports.addPermissionPolicy = addPermissionPolicy;
/**
 * Remove a policy from an array of entity policies
 * Returns a new array
 * @param permissions
 * @param permission
 * @param id
 * @returns
 */
function removePermissionPolicy(permissions = [], permission, id) {
    const clone = util_1.cloneObject(permissions);
    return clone.filter((p) => p.permission !== permission || p.collaborationId !== id);
}
exports.removePermissionPolicy = removePermissionPolicy;
//# sourceMappingURL=utils.js.map