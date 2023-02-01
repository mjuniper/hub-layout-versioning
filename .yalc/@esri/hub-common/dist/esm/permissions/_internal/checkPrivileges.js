import { getPolicyResponseCode } from "./getPolicyResponseCode";
/**
 * Validate privilege policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
export function checkPrivileges(policy, context, entity) {
    var _a;
    let checks = [];
    // Only return a check if the policy is defined
    if ((_a = policy.privileges) === null || _a === void 0 ? void 0 : _a.length) {
        checks = policy.privileges.map((privilege) => {
            let response = "granted";
            let value = "privilege present";
            if (!context.currentUser.privileges.includes(privilege)) {
                response = "privilege-required";
                value = "privilege missing";
            }
            return {
                name: `privilege required: ${privilege}`,
                value,
                response,
                code: getPolicyResponseCode(response),
            };
        });
    }
    return checks;
}
//# sourceMappingURL=checkPrivileges.js.map