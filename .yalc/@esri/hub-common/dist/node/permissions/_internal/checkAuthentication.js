"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuthentication = void 0;
const getPolicyResponseCode_1 = require("./getPolicyResponseCode");
/**
 * Validate authentication policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
function checkAuthentication(policy, context, entity) {
    const checks = [];
    // Only return a check if the policy is defined
    if (policy.hasOwnProperty("authenticated")) {
        let response = "granted";
        if (policy.authenticated && !context.isAuthenticated) {
            response = "not-authenticated";
        }
        // create the check
        const check = {
            name: "authentication",
            value: `required: ${policy.authenticated}`,
            code: getPolicyResponseCode_1.getPolicyResponseCode(response),
            response,
        };
        checks.push(check);
    }
    return checks;
}
exports.checkAuthentication = checkAuthentication;
//# sourceMappingURL=checkAuthentication.js.map