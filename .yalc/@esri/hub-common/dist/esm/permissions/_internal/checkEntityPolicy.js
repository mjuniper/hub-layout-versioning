import { getProp } from "../../objects";
import { getPolicyResponseCode } from "./getPolicyResponseCode";
/**
 * Validate user meets entity policy
 * @param policy
 * @param context
 * @returns
 */
export function checkEntityPolicy(policy, context) {
    const user = context.currentUser || { groups: [] };
    const userGroups = user.groups || [];
    let response = "not-granted";
    const type = policy.collaborationType;
    const id = policy.collaborationId;
    if (type === "user") {
        if (id === user.username) {
            response = "granted";
        }
        else {
            response = "not-granted";
        }
    }
    if (type === "org") {
        if (id === user.orgId) {
            response = "granted";
        }
        else {
            response = "not-org-member";
        }
    }
    if (type === "group") {
        if (userGroups.find((g) => g.id === id)) {
            response = "granted";
        }
        else {
            response = "not-group-member";
        }
    }
    if (type === "group-admin") {
        const group = userGroups.find((g) => g.id === id);
        const memberType = getProp(group, "userMembership.memberType");
        if (["admin", "owner"].includes(memberType)) {
            response = "granted";
        }
        else {
            response = "not-group-admin";
        }
    }
    if (type === "authenticated") {
        if (context.isAuthenticated) {
            response = "granted";
        }
        else {
            response = "not-authenticated";
        }
    }
    if (type === "anonymous") {
        response = "granted";
    }
    const check = {
        name: "entity:policy",
        value: `${policy.collaborationType}:${policy.collaborationId}`,
        response,
        code: getPolicyResponseCode(response),
    };
    return check;
}
//# sourceMappingURL=checkEntityPolicy.js.map