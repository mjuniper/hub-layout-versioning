import { getTypeFromEntity, } from "../index";
import { isCapability } from "./types";
import { CapabilityPermissions } from "./getWorkspaceCapabilities";
import { checkCapabilityAccess } from "./_internal";
/**
 * Check if a capability is enabled for a given entity and if the current user has necessary permissions to access it
 * @param capability
 * @param context
 * @param entity
 * @returns
 */
export function checkCapability(capability, context, entity) {
    const entityType = getTypeFromEntity(entity);
    // Find the rule for the given entity type and capability
    const isValid = isCapability(capability);
    if (isValid) {
        const rule = CapabilityPermissions.find((e) => e.entity === entityType && e.capability === capability);
        if (rule) {
            // check each capability access rule
            return checkCapabilityAccess(rule, context, entity);
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
//# sourceMappingURL=checkCapability.js.map