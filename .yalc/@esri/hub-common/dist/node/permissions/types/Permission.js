"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPermission = void 0;
const ProjectBusinessRules_1 = require("../../projects/_internal/ProjectBusinessRules");
const SiteBusinessRules_1 = require("../../sites/_internal/SiteBusinessRules");
const InitiativeBusinessRules_1 = require("../../initiatives/_internal/InitiativeBusinessRules");
/**
 * Defines the values for Permissions
 * It's critical that the arrays defined in the modules use `as const`
 * otherwise Permission devolves into just a string type
 */
const validPermissions = [
    ...SiteBusinessRules_1.SitePermissions,
    ...ProjectBusinessRules_1.ProjectPermissions,
    ...InitiativeBusinessRules_1.InitiativePermissions,
];
/**
 * Validate a Permission
 * @param permission
 * @returns
 */
function isPermission(maybePermission) {
    return validPermissions.includes(maybePermission);
}
exports.isPermission = isPermission;
//# sourceMappingURL=Permission.js.map