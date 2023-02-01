"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesPermissionPolicies = exports.SitePermissions = exports.SiteCapabilityPermissions = exports.SiteDefaultCapabilities = void 0;
/**
 * Default capabilities for a Site. If not listed here, the capability will not be available
 * This hash is combined with the capabilities hash stored in the item data. Regardless of what
 * properties are defined in the item data, only the capabilities defined here will be available
 * @private
 */
exports.SiteDefaultCapabilities = {
    overview: true,
    details: true,
    settings: true,
};
/**
 * List of all the Site Capability Permissions
 * These are considered Hub Business Rules and are not intended
 * to be modified by consumers
 */
exports.SiteCapabilityPermissions = [
    {
        entity: "site",
        capability: "overview",
        permissions: ["hub:site:view"],
    },
    {
        entity: "site",
        capability: "details",
        permissions: ["hub:site:edit"],
    },
    {
        entity: "site",
        capability: "settings",
        permissions: ["hub:site:edit"],
    },
];
/**
 * Site Permissions
 * This feeds into the Permissions type
 */
exports.SitePermissions = [
    "hub:site:create",
    "hub:site:delete",
    "hub:site:edit",
    "hub:site:view",
];
/**
 * Site permission policies
 * @private
 */
exports.SitesPermissionPolicies = [
    {
        permission: "hub:site:create",
        subsystems: ["sites"],
        authenticated: true,
        privileges: ["portal:user:createItem"],
        licenses: ["hub-basic", "hub-premium", "enterprise-sites"],
    },
    {
        permission: "hub:site:view",
        subsystems: ["sites"],
        authenticated: false,
        licenses: ["hub-basic", "hub-premium", "enterprise-sites"],
    },
    {
        permission: "hub:site:delete",
        subsystems: ["sites"],
        authenticated: true,
        licenses: ["hub-basic", "hub-premium", "enterprise-sites"],
        entityOwner: true,
    },
    {
        permission: "hub:site:edit",
        entityEdit: true,
        subsystems: ["sites"],
        authenticated: true,
        licenses: ["hub-basic", "hub-premium", "enterprise-sites"],
    },
];
//# sourceMappingURL=SiteBusinessRules.js.map