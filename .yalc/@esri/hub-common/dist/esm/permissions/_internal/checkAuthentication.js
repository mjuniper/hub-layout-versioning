import { getPolicyResponseCode } from "./getPolicyResponseCode";
/**
 * Validate authentication policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
export function checkAuthentication(policy, context, entity) {
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
            code: getPolicyResponseCode(response),
            response,
        };
        checks.push(check);
    }
    return checks;
}
//# sourceMappingURL=checkAuthentication.js.map