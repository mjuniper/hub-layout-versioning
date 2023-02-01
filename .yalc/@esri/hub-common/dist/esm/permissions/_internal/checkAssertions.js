import { checkAssertion } from "./checkAssertion";
/**
 * Validate entityOwner policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
export function checkAssertions(policy, context, entity) {
    let checks = [];
    // Only return a check if the policy is defined
    if (policy.assertions) {
        // iterate over the assertions, creating a check for each entry
        checks = policy.assertions.map((assertion) => {
            return checkAssertion(assertion, entity, context);
        });
    }
    return checks;
}
//# sourceMappingURL=checkAssertions.js.map