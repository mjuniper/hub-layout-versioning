"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectPermissionPolicies = exports.ProjectPermissions = exports.ProjectCapabilityPermissions = exports.ProjectDefaultCapabilities = void 0;
/**
 * Default capabilities for a Project. If not listed here, the capability will not be available
 * This hash is combined with the capabilities hash stored in the item data. Regardless of what
 * properties are defined in the item data, only the capabilities defined here will be available
 * @private
 */
exports.ProjectDefaultCapabilities = {
    overview: true,
    details: true,
    settings: true,
};
/**
 * List of all the Project Capability Permissions
 * These are considered Hub Business Rules and are not intended
 * to be modified by consumers
 * @private
 */
exports.ProjectCapabilityPermissions = [
    {
        entity: "project",
        capability: "overview",
        permissions: ["hub:project:view"],
    },
    {
        entity: "project",
        capability: "details",
        permissions: ["hub:project:edit"],
    },
    {
        entity: "project",
        capability: "settings",
        permissions: ["hub:project:edit"],
    },
];
/**
 * Project Permission Policies
 * These define the requirements any user must meet to perform related actions
 * @private
 */
exports.ProjectPermissions = [
    "hub:project:create",
    "hub:project:delete",
    "hub:project:edit",
    "hub:project:view",
];
/**
 * Project permission policies
 * @private
 */
exports.ProjectPermissionPolicies = [
    {
        permission: "hub:project:create",
        subsystems: ["projects"],
        authenticated: true,
        privileges: ["portal:user:createItem"],
        licenses: ["hub-premium"],
    },
    {
        permission: "hub:project:view",
        subsystems: ["projects"],
        authenticated: false,
        licenses: ["hub-premium"],
    },
    {
        permission: "hub:project:edit",
        authenticated: true,
        subsystems: ["projects"],
        entityEdit: true,
        licenses: ["hub-premium"],
    },
    {
        permission: "hub:project:delete",
        authenticated: true,
        subsystems: ["projects"],
        entityOwner: true,
        licenses: ["hub-premium"],
    },
];
//# sourceMappingURL=ProjectBusinessRules.js.map