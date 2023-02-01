"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCapability = void 0;
const index_1 = require("../index");
const types_1 = require("./types");
const getWorkspaceCapabilities_1 = require("./getWorkspaceCapabilities");
const _internal_1 = require("./_internal");
/**
 * Check if a capability is enabled for a given entity and if the current user has necessary permissions to access it
 * @param capability
 * @param context
 * @param entity
 * @returns
 */
function checkCapability(capability, context, entity) {
    const entityType = index_1.getTypeFromEntity(entity);
    // Find the rule for the given entity type and capability
    const isValid = types_1.isCapability(capability);
    if (isValid) {
        const rule = getWorkspaceCapabilities_1.CapabilityPermissions.find((e) => e.entity === entityType && e.capability === capability);
        if (rule) {
            // check each capability access rule
            return _internal_1.checkCapabilityAccess(rule, context, entity);
        }
        else {
            // No rule found
            return {
                capability,
                access: false,
                code: "disabled",
                response: "not-available",
                message: `Capability "${capability}" is not defined for ${entityType}.`,
                responses: [],
            };
        }
    }
    else {
        // Invlaid Capability
        return {
            capability,
            access: false,
            code: "disabled",
            response: "invalid-capability",
            message: `Value "${capability}" is not a valid Hub Capability.`,
            responses: [],
        };
    }
}
exports.checkCapability = checkCapability;
//# sourceMappingURL=checkCapability.js.map