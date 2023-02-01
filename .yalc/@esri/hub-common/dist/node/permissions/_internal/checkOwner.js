"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOwner = void 0;
const getPolicyResponseCode_1 = require("./getPolicyResponseCode");
/**
 * Validate entityOwner policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
function checkOwner(policy, context, entity) {
    const checks = [];
    // Only return a check if the policy is defined
    if (policy.entityOwner) {
        let response = "granted";
        let name = "entity owner required";
        if (!entity) {
            // fail b/c no entity
            response = "entity-required";
        }
        else {
            name = `entity owner required: ${entity.owner}`;
            if (entity.owner !== context.currentUser.username) {
                response = "not-owner";
            }
        }
        // create the check
        const check = {
            name,
            value: `current user: ${context.currentUser.username}`,
            code: getPolicyResponseCode_1.getPolicyResponseCode(response),
            response,
        };
        checks.push(check);
    }
    return checks;
}
exports.checkOwner = checkOwner;
//# sourceMappingURL=checkOwner.js.map