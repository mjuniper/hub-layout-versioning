"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCapabilityAccess = void 0;
const permissions_1 = require("../../permissions");
/**
 * Check an individual capability access rule
 * @param rule
 * @param context
 * @param entity
 * @returns
 */
function checkCapabilityAccess(rule, context, entity) {
    // check if the capability is disabled for the entity; we default to false
    const value = entity.capabilities[rule.capability] || false;
    // if disabled, then access is denied
    if (!value) {
        return {
            capability: rule.capability,
            access: false,
            code: "disabled",
            response: "not-available",
            message: `Owner ${entity.owner} has disabled ${rule.capability} capability.`,
            responses: [],
        };
    }
    else {
        // check each permission in the rule
        const chks = rule.permissions.map((permission) => {
            return permissions_1.checkPermission(permission, context, entity);
        });
        // default to last check
        let accessCheck = chks[chks.length - 1];
        // if all checks are true, then access is granted
        const access = chks.every((chk) => chk.access);
        if (!access) {
            // get the first failed check and use it's values in the response
            accessCheck = chks.find((chk) => !chk.access);
        }
        // construct the response
        return {
            capability: rule.capability,
            access: accessCheck.access,
            code: accessCheck.code,
            response: accessCheck.response,
            message: accessCheck.message,
            responses: chks,
        };
    }
}
exports.checkCapabilityAccess = checkCapabilityAccess;
//# sourceMappingURL=checkCapabilityAccess.js.map