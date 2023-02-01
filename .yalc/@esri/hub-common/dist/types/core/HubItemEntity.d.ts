import { IGroup } from "@esri/arcgis-rest-portal";
import { IArcGISContext } from "../ArcGISContext";
import { Capability, ICapabilityAccessResponse } from "../capabilities";
import { IPermissionAccessResponse, IEntityPermissionPolicy, Permission } from "../permissions";
import { IWithSharingBehavior, IWithStoreBehavior, IWithFeaturedImageBehavior, IWithPermissionBehavior, IWithCapabilityBehavior } from "./behaviors";
import { IWithThumbnailBehavior } from "./behaviors/IWithThumbnailBehavior";
import { IHubItemEntity, SettableAccessLevel } from "./types";
/**
 * Base class for all Hub Entities backed by items
 */
export declare abstract class HubItemEntity<T extends IHubItemEntity> implements IWithStoreBehavior<T>, IWithSharingBehavior, IWithThumbnailBehavior, IWithFeaturedImageBehavior, IWithPermissionBehavior, IWithCapabilityBehavior {
    protected context: IArcGISContext;
    protected entity: T;
    protected isDestroyed: boolean;
    protected thumbnailCache: {
        file: any;
        filename: string;
    };
    constructor(entity: T, context: IArcGISContext);
    /**
     * Check if current user has a specific permission, accounting for
     * both system and entity level policies
     * @param permission
     * @returns
     */
    checkPermission(permission: Permission): IPermissionAccessResponse;
    /**
     * Get all policies related to a specific permission
     * @param permission
     * @returns
     */
    getPermissionPolicies(permission: Permission): IEntityPermissionPolicy[];
    /**
     * Add a policy to the entity
     * @param policy
     */
    addPermissionPolicy(policy: IEntityPermissionPolicy): void;
    /**
     * Remove a policy from the entity
     * @param permission
     * @param id
     */
    removePermissionPolicy(permission: Permission, id: string): void;
    /**
     * Check if the current user can access a specific capability
     * @param capability
     */
    checkCapability(capability: Capability): ICapabilityAccessResponse;
    /**
     * Return the entity id
     */
    get id(): string;
    /**
     * Return the entity owner
     */
    get owner(): string;
    /**
     * Return the backing entity as an object literal
     * @returns
     */
    toJson(): T;
    abstract update(changes: Partial<T>): void;
    abstract save(): Promise<void>;
    abstract delete(): Promise<void>;
    /**
     * Can the current user edit the Entity?
     * In order to edit an item, the user must be the owner of the item
     * or be a member of a shared editing group, to which the item is shared.
     * @returns
     */
    get canEdit(): boolean;
    /**
     * Can the current user delete the Entity?
     * In order to delete an item, the user must be the owner of the item or a full org_admin
     * in the owner's organization.
     * @returns
     */
    get canDelete(): boolean;
    /**
     * Share the Entity with the specified group id
     * @param groupId
     */
    shareWithGroup(groupId: string): Promise<void>;
    /**
     * Unshare the Entity with the specified group id
     * @param groupId
     */
    unshareWithGroup(groupId: string): Promise<void>;
    /**
     * Set the access level of the backing item
     * @param access
     */
    setAccess(access: SettableAccessLevel): Promise<void>;
    /**
     * Return a list of groups the Entity is shared to.
     * @returns
     */
    sharedWith(): Promise<IGroup[]>;
    /**
     * Hook that subclasses should call to invoke shared post-save behavior
     */
    afterSave(): Promise<void>;
    /**
     * Store thumbnail information to be sent with the next `.save()` call
     * @param file
     * @param filename
     */
    setThumbnail(file: any, filename: string): void;
    /**
     * Return the full url to the thumbnail, optionally with a width parameter
     * @param width
     */
    getThumbnailUrl(width?: number): string;
    /**
     * Set a featured image on the Entity, if one already exists it is cleared out before the new one is set
     * to keep the number of resources in control
     * @param file
     */
    setFeaturedImage(file: any): Promise<void>;
    /**
     * Remove the featured image from the item
     */
    clearFeaturedImage(): Promise<void>;
}
