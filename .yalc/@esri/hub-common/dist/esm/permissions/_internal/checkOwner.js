import { getPolicyResponseCode } from "./getPolicyResponseCode";
/**
 * Validate entityOwner policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
export function checkOwner(policy, context, entity) {
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
            code: getPolicyResponseCode(response),
            response,
        };
        checks.push(check);
    }
    return checks;
}
//# sourceMappingURL=checkOwner.js.map