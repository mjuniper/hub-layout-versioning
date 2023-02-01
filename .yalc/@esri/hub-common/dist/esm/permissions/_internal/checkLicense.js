import { getPolicyResponseCode } from "./getPolicyResponseCode";
/**
 * Validate license policy
 * @param policy
 * @param response
 * @param context
 * @returns
 */
export function checkLicense(policy, context, entity) {
    var _a;
    const checks = [];
    // Only return a check if the policy is defined
    if ((_a = policy.licenses) === null || _a === void 0 ? void 0 : _a.length) {
        let result = "granted";
        if (!policy.licenses.includes(context.hubLicense)) {
            result = "not-available";
            // can we show an upgrade ux?
            if (policy.licenses[0] === "hub-premium" &&
                context.hubLicense === "hub-basic") {
                result = "not-licensed"; // implies it could be licensed
            }
        }
        const check = {
            name: `license in ${policy.licenses.join(", ")}`,
            value: context.hubLicense,
            code: getPolicyResponseCode(result),
            response: result,
        };
        checks.push(check);
    }
    return checks;
}
//# sourceMappingURL=checkLicense.js.map