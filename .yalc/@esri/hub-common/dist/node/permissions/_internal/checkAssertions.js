"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAssertions = void 0;
const checkAssertion_1 = require("./checkAssertion");
/**
 * Validate entityOwner policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
function checkAssertions(policy, context, entity) {
    let checks = [];
    // Only return a check if the policy is defined
    if (policy.assertions) {
        // iterate over the assertions, creating a check for each entry
        checks = policy.assertions.map((assertion) => {
            return checkAssertion_1.checkAssertion(assertion, entity, context);
        });
    }
    return checks;
}
exports.checkAssertions = checkAssertions;
//# sourceMappingURL=checkAssertions.js.map