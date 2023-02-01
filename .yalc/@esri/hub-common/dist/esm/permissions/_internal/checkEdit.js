import { getWithDefault } from "../../objects";
import { getPolicyResponseCode } from "./getPolicyResponseCode";
/**
 * Validate entityEdit policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
export function checkEdit(policy, context, entity) {
    const checks = [];
    // Only return a check if the policy is defined
    if (policy.hasOwnProperty("entityEdit")) {
        let response = "granted";
        if (!entity) {
            // fail b/c no entity
            response = "entity-required";
        }
        else {
            if (policy.entityEdit && !entity.canEdit) {
                response = "no-edit-access";
            }
            else if (!policy.entityEdit && entity.canEdit) {
                response = "edit-access";
            }
        }
        // create the check
        const check = {
            name: "entity edit required",
            value: `entity.canEdit: ${getWithDefault(entity, "canEdit", false)}`,
            code: getPolicyResponseCode(response),
            response,
        };
        checks.push(check);
    }
    return checks;
}
//# sourceMappingURL=checkEdit.js.map