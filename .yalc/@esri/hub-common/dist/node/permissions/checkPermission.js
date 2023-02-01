"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermission = void 0;
const objects_1 = require("../objects");
const checkLicense_1 = require("./_internal/checkLicense");
const HubPermissionPolicies_1 = require("./HubPermissionPolicies");
const types_1 = require("./types");
const getPolicyResponseCode_1 = require("./_internal/getPolicyResponseCode");
const checkAuthentication_1 = require("./_internal/checkAuthentication");
const checkOwner_1 = require("./_internal/checkOwner");
const checkEdit_1 = require("./_internal/checkEdit");
const checkPrivileges_1 = require("./_internal/checkPrivileges");
const checkEntityPolicy_1 = require("./_internal/checkEntityPolicy");
const checkAssertions_1 = require("./_internal/checkAssertions");
/**
 * Check a permission against the system policies, and possibly an entity policy
 * @param permission
 * @param context
 * @param entity
 * @returns
 */
function checkPermission(permission, context, entity) {
    // Early Exit: Is this even a valid permission?
    if (!types_1.isPermission(permission)) {
        return {
            policy: permission,
            access: false,
            response: "invalid-permission",
            code: getPolicyResponseCode_1.getPolicyResponseCode("invalid-permission"),
            checks: [],
        };
    }
    // Get the system policy for this permission
    const systemPolicy = HubPermissionPolicies_1.getPermissionPolicy(permission);
    // TODO: handle null systemPolicy
    // Default to granted
    const response = {
        policy: permission,
        access: true,
        response: "granted",
        code: getPolicyResponseCode_1.getPolicyResponseCode("granted"),
        checks: [],
    };
    const checks = [
        checkAuthentication_1.checkAuthentication,
        checkLicense_1.checkLicense,
        checkPrivileges_1.checkPrivileges,
        checkOwner_1.checkOwner,
        checkEdit_1.checkEdit,
        checkAssertions_1.checkAssertions,
    ].reduce((acc, fn) => {
        acc = [...acc, ...fn(systemPolicy, context, entity)];
        return acc;
    }, []);
    // For system policies, all conditions must be met, so we can
    // iterate through the checks and set the response to the first failure
    // while still returning all the checks for observability
    checks.forEach((check) => {
        if (check.response !== "granted" && response.response === "granted") {
            response.response = check.response;
            response.code = check.code;
            response.access = false;
        }
    });
    response.checks = checks;
    // Entity policies are treated as "grants" so we only need to pass one
    if (entity) {
        const entityPolicies = objects_1.getWithDefault(entity, "permissions", []);
        const entityPermissionPolicies = entityPolicies.filter((e) => e.permission === permission);
        // Entity Policies are "grants" in that only one needs to pass
        // but we still want each check returned so we can see why they
        // got access or got denied
        const entityChecks = entityPermissionPolicies.map((policy) => {
            return checkEntityPolicy_1.checkEntityPolicy(policy, context);
        });
        // Process them to see if any grant access
        const grantedCheck = entityChecks.find((e) => e.response === "granted");
        // If we did not find a check that grants access, AND we've passed
        // all the system checks, then we set the response to "not-granted"
        // and set the access to false
        if (entityChecks.length &&
            !grantedCheck &&
            response.response === "granted") {
            response.access = false;
            response.response = "not-granted";
        }
        // Merge in the entity checks...
        response.checks = [...response.checks, ...entityChecks];
    }
    // return the response
    return response;
}
exports.checkPermission = checkPermission;
//# sourceMappingURL=checkPermission.js.map