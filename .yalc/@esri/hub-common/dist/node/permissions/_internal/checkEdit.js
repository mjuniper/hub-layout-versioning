"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEdit = void 0;
const objects_1 = require("../../objects");
const getPolicyResponseCode_1 = require("./getPolicyResponseCode");
/**
 * Validate entityEdit policy
 * @param policy
 * @param context
 * @param entity
 * @returns
 */
function checkEdit(policy, context, entity) {
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
            value: `entity.canEdit: ${objects_1.getWithDefault(entity, "canEdit", false)}`,
            code: getPolicyResponseCode_1.getPolicyResponseCode(response),
            response,
        };
        checks.push(check);
    }
    return checks;
}
exports.checkEdit = checkEdit;
//# sourceMappingURL=checkEdit.js.map