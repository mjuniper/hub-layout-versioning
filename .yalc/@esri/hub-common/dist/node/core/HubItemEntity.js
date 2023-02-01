"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubItemEntity = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const capabilities_1 = require("../capabilities");
const HubError_1 = require("../HubError");
const items_1 = require("../items");
const setItemThumbnail_1 = require("../items/setItemThumbnail");
const permissions_1 = require("../permissions");
const resources_1 = require("../resources");
const util_1 = require("../util");
const sharedWith_1 = require("./_internal/sharedWith");
const FEATURED_IMAGE_FILENAME = "featuredImage.png";
/**
 * Base class for all Hub Entities backed by items
 */
class HubItemEntity {
    constructor(entity, context) {
        this.isDestroyed = false;
        this.thumbnailCache = null;
        this.context = context;
        this.entity = entity;
    }
    /**
     * Check if current user has a specific permission, accounting for
     * both system and entity level policies
     * @param permission
     * @returns
     */
    checkPermission(permission) {
        return permissions_1.checkPermission(permission, this.context, this.entity);
    }
    /**
     * Get all policies related to a specific permission
     * @param permission
     * @returns
     */
    getPermissionPolicies(permission) {
        const permissions = this.entity.permissions || [];
        return permissions.filter((p) => p.permission === permission);
    }
    /**
     * Add a policy to the entity
     * @param policy
     */
    addPermissionPolicy(policy) {
        this.entity.permissions = permissions_1.addPermissionPolicy(this.entity.permissions, policy);
    }
    /**
     * Remove a policy from the entity
     * @param permission
     * @param id
     */
    removePermissionPolicy(permission, id) {
        this.entity.permissions = permissions_1.removePermissionPolicy(this.entity.permissions, permission, id);
    }
    /**
     * Check if the current user can access a specific capability
     * @param capability
     */
    checkCapability(capability) {
        return capabilities_1.checkCapability(capability, this.context, this.entity);
    }
    // Although we don't expose all the properties, we do expose a few for convenience
    /**
     * Return the entity id
     */
    get id() {
        return this.entity.id;
    }
    /**
     * Return the entity owner
     */
    get owner() {
        return this.entity.owner;
    }
    //#region IWithStoreBehavior
    /**
     * Return the backing entity as an object literal
     * @returns
     */
    toJson() {
        if (this.isDestroyed) {
            throw new Error("Entity is already destroyed.");
        }
        return util_1.cloneObject(this.entity);
    }
    /**
     * Can the current user edit the Entity?
     * In order to edit an item, the user must be the owner of the item
     * or be a member of a shared editing group, to which the item is shared.
     * @returns
     */
    get canEdit() {
        return this.entity.canEdit;
    }
    /**
     * Can the current user delete the Entity?
     * In order to delete an item, the user must be the owner of the item or a full org_admin
     * in the owner's organization.
     * @returns
     */
    get canDelete() {
        return this.entity.canDelete;
    }
    //#endregion IWithStoreBehavior
    //#region IWithSharingBehavior
    /**
     * Share the Entity with the specified group id
     * @param groupId
     */
    async shareWithGroup(groupId) {
        await arcgis_rest_portal_1.shareItemWithGroup({
            id: this.entity.id,
            groupId,
            owner: this.entity.owner,
            authentication: this.context.session,
        });
    }
    /**
     * Unshare the Entity with the specified group id
     * @param groupId
     */
    async unshareWithGroup(groupId) {
        await arcgis_rest_portal_1.unshareItemWithGroup({
            id: this.entity.id,
            groupId,
            owner: this.entity.owner,
            authentication: this.context.session,
        });
    }
    /**
     * Set the access level of the backing item
     * @param access
     */
    async setAccess(access) {
        await arcgis_rest_portal_1.setItemAccess({
            id: this.entity.id,
            access,
            authentication: this.context.session,
        });
        // if this succeeded, update the entity
        this.entity.access = access;
    }
    /**
     * Return a list of groups the Entity is shared to.
     * @returns
     */
    async sharedWith() {
        // delegate to a util that merges the three arrays returned from the api, into a single array
        return sharedWith_1.sharedWith(this.entity.id, this.context.requestOptions);
    }
    //#endregion
    /**
     * Hook that subclasses should call to invoke shared post-save behavior
     */
    async afterSave() {
        // Handle Thumbnails
        // check if there is a thumbnail in the cache
        if (this.thumbnailCache) {
            // save the thumbnail
            await setItemThumbnail_1.setItemThumbnail(this.entity.id, this.thumbnailCache.file, this.thumbnailCache.filename, this.context.userRequestOptions);
            // Note: updating the thumbnail alone does not update the modified date of the item
            // thus we can just set props on the entity w/o re-fetching
            this.entity.thumbnail = `thumbnail/${this.thumbnailCache.filename}`;
            this.entity.thumbnailUrl = this.getThumbnailUrl();
            // clear the thumbnail cache
            this.thumbnailCache = null;
        }
    }
    //#region IWithThumbnailBehavior
    /**
     * Store thumbnail information to be sent with the next `.save()` call
     * @param file
     * @param filename
     */
    setThumbnail(file, filename) {
        // subclass is responsible for handling the implementation during the `.save()` call
        this.thumbnailCache = { file, filename };
    }
    /**
     * Return the full url to the thumbnail, optionally with a width parameter
     * @param width
     */
    getThumbnailUrl(width = 200) {
        const minimalItem = {
            id: this.entity.id,
            access: this.entity.access,
            thumbnail: this.entity.thumbnail,
        };
        const opts = {
            token: this.context.session.token,
            width,
        };
        return resources_1.getItemThumbnailUrl(minimalItem, this.context.requestOptions, opts);
    }
    //#endregion IWithThumbnailBehavior
    //#region IWithFeaturedImageBehavior
    /**
     * Set a featured image on the Entity, if one already exists it is cleared out before the new one is set
     * to keep the number of resources in control
     * @param file
     */
    async setFeaturedImage(file) {
        var _a;
        // If we have a featured image then clear it out.
        if ((_a = this.entity.view) === null || _a === void 0 ? void 0 : _a.featuredImageUrl) {
            await this.clearFeaturedImage();
        }
        // add the new featured image
        const featuredImageUrl = await items_1.uploadImageResource(this.entity.id, this.entity.owner, file, FEATURED_IMAGE_FILENAME, this.context.userRequestOptions);
        // If successful, update the entity
        this.entity.view = Object.assign(Object.assign({}, this.entity.view), { featuredImageUrl });
        // save the entity
        await this.save();
    }
    /**
     * Remove the featured image from the item
     */
    async clearFeaturedImage() {
        try {
            // remove the resource
            const response = await arcgis_rest_portal_1.removeItemResource(Object.assign({ id: this.entity.id, owner: this.entity.owner, resource: FEATURED_IMAGE_FILENAME }, this.context.userRequestOptions));
            // if not successful throw an error
            if (response && !response.success) {
                throw new HubError_1.default("Clear Item Featured Image", "Unknown error clearing featured image.");
            }
            // If successful, clear the featured image url
            this.entity.view.featuredImageUrl = null;
            // save the entity
            await this.save();
        }
        catch (err) {
            if (err instanceof Error) {
                throw new HubError_1.default("Clear Item Featured Image", err.message, err);
            }
            else {
                throw new HubError_1.default("Clear Item Featured Image", "Unknown error clearing featured image.");
            }
        }
    }
}
exports.HubItemEntity = HubItemEntity;
//# sourceMappingURL=HubItemEntity.js.map