import { IArcGISContext } from "../ArcGISContext";
import { HubPermission, IHubPermission } from "./types/IHubPermission";
/**
 * Permission Manager class that provides permission behavior for a given entity
 */
export declare class PermissionManager {
    private _permissions;
    private _context;
    private constructor();
    /**
     * Create a new PermissionManager instance from configuration and context
     * @param permissions
     * @param context
     * @returns
     */
    static fromJson(permissions: IHubPermission[], context: IArcGISContext): PermissionManager;
    /**
     * Check if the user has a specific permission in the context of an entity
     * @param permission
     */
    check(permission: HubPermission): boolean;
    /**
     * Get all the permission definitions for the specific permission
     * @param key permission to check for
     */
    get(permission: HubPermission): IHubPermission[];
    /**
     * Set a permission for the given entity
     * @param permission
     */
    add(permission: IHubPermission): void;
    /**
     * Remove a permission by targetId
     * @param permission
     * @param targetId
     */
    remove(permission: HubPermission, targetId: string): void;
    /**
     * Return the current permissions as a JSON object
     * @returns {IHubPermission[]}
     */
    toJson(): IHubPermission[];
}
