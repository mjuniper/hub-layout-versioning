import { isUpdateGroup, includes } from "../utils";
import { getProp } from "../objects";
import { hasBasePriv } from "./has-base-priv";
/**
 * Checks if user has access to edit an item in Hub
 * @param {IItem} item
 * @param {IUser} user
 * @returns {boolean}
 */
export function canEditItem(item, user) {
    let res = false;
    const itemControls = ["admin", "update"];
    const { itemControl, owner, orgId: itemOrgId } = item;
    const { roleId, role, username, groups: userGroups, orgId: userOrgId } = user;
    const hasItemControl = includes(itemControls, itemControl);
    const isOwner = !!owner && owner === username;
    const isOrgItem = !!itemOrgId && itemOrgId === userOrgId;
    const isItemOrgAdmin = !!isOrgItem && !roleId && role === "org_admin";
    const hasPlatformControl = hasItemControl || isOwner || isItemOrgAdmin;
    const hasPriv = hasBasePriv(user);
    if (hasPriv && hasPlatformControl) {
        res = true;
    }
    else if (hasPriv) {
        const itemGroups = [
            ...(getProp(item, "groupIds") || []),
            getProp(item, "properties.collaborationGroupId")
        ];
        const isGroupEditable = (group) => isUpdateGroup(group) && includes(itemGroups, group.id);
        res = userGroups.some(isGroupEditable);
    }
    return res;
}
//# sourceMappingURL=can-edit-item.js.map