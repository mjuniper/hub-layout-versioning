"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAlphaGating = void 0;
const getPolicyResponseCode_1 = require("./getPolicyResponseCode");
/**
 * Validate entityOwner policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
function checkAlphaGating(policy, context, entity) {
    const checks = [];
    // Only return a check if the policy is defined
    if (policy.alpha) {
        const result = context.isAlphaOrg
            ? "granted"
            : "not-alpha-org";
        // create the check
        const check = {
            name: `user in alpha org`,
            value: context.hubLicense,
            code: getPolicyResponseCode_1.getPolicyResponseCode(result),
            response: result,
        };
        checks.push(check);
    }
    return checks;
}
exports.checkAlphaGating = checkAlphaGating;
//# sourceMappingURL=checkAlphaGating.js.map