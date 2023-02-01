"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkspaceCapabilities = exports.CapabilityPermissions = void 0;
const getTypeFromEntity_1 = require("../core/getTypeFromEntity");
const ProjectBusinessRules_1 = require("../projects/_internal/ProjectBusinessRules");
const checkCapabilityAccess_1 = require("./_internal/checkCapabilityAccess");
const InitiativeBusinessRules_1 = require("../initiatives/_internal/InitiativeBusinessRules");
const SiteBusinessRules_1 = require("../sites/_internal/SiteBusinessRules");
/**
 * List of all the Capability Permissions in the Hub System
 * These are defined in the entity specific modules files
 */
exports.CapabilityPermissions = [
    ...ProjectBusinessRules_1.ProjectCapabilityPermissions,
    ...InitiativeBusinessRules_1.InitiativeCapabilityPermissions,
    ...SiteBusinessRules_1.SiteCapabilityPermissions,
];
/**
 * Return the capabilities that are granted to the current user for a given entity
 * This is used by the Hub Components to determine which Workspace Navigation Links to show
 * @param entity
 * @param context
 * @returns
 */
function getWorkspaceCapabilities(entity, context) {
    const entityType = getTypeFromEntity_1.getTypeFromEntity(entity);
    // filter to the rules for the given entity type
    const capabilityAccessRules = exports.CapabilityPermissions.filter((e) => e.entity === entityType);
    // check each capability access rule
    const responses = capabilityAccessRules.map((rule) => {
        return checkCapabilityAccess_1.checkCapabilityAccess(rule, context, entity);
    });
    // map out those capabilities that are granted so consumers can easily work with that list
    const granted = responses.filter((r) => r.access).map((r) => r.capability);
    // return the full response with the details and the granted capabilities list
    return {
        granted,
        details: responses,
    };
}
exports.getWorkspaceCapabilities = getWorkspaceCapabilities;
//# sourceMappingURL=getWorkspaceCapabilities.js.map