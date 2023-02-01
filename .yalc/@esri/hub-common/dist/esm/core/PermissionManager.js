import { cloneObject, createId } from "../util";
import { checkPermission, getPermissions, addPermission, removePermission, } from "./behaviors/IWithPermissionBehavior";
/**
 * Permission Manager class that provides permission behavior for a given entity
 */
export class PermissionManager {
    constructor(permissions, context) {
        this._permissions = permissions;
        this._context = context;
    }
    /**
     * Create a new PermissionManager instance from configuration and context
     * @param permissions
     * @param context
     * @returns
     */
    static fromJson(permissions, context) {
        return new PermissionManager(permissions, context);
    }
    /**
     * Check if the user has a specific permission in the context of an entity
     * @param permission
     */
    check(permission) {
        return checkPermission(permission, this._context.currentUser, this._permissions);
    }
    /**
     * Get all the permission definitions for the specific permission
     * @param key permission to check for
     */
    get(permission) {
        return getPermissions(permission, this._permissions);
    }
    /**
     * Set a permission for the given entity
     * @param permission
     */
    add(permission) {
        if (!permission.id) {
            permission.id = createId("p");
        }
        this._permissions = addPermission(permission, this._permissions);
    }
    /**
     * Remove a permission by targetId
     * @param permission
     * @param targetId
     */
    remove(permission, targetId) {
        this._permissions = removePermission(permission, targetId, this._permissions);
    }
    /**
     * Return the current permissions as a JSON object
     * @returns {IHubPermission[]}
     */
    toJson() {
        return cloneObject(this._permissions);
    }
}
//# sourceMappingURL=PermissionManager.js.map