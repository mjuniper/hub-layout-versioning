import { getPolicyResponseCode } from "./getPolicyResponseCode";
/**
 * Validate entityOwner policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
export function checkAlphaGating(policy, context, entity) {
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
            code: getPolicyResponseCode(result),
            response: result,
        };
        checks.push(check);
    }
    return checks;
}
//# sourceMappingURL=checkAlphaGating.js.map