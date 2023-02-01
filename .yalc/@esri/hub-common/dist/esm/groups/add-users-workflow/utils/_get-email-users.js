import { _canEmailUser } from "./_can-email-user";
import { _getInviteUsers } from "./_get-invite-users";
/**
 * @private
 *
 * A user can be emailed if they are invited (not auto-added)
 * and the _canEmailUser condition is met
 */
export function _getEmailUsers(users, requestingUser, includeSelf = false) {
    const invitedUsers = _getInviteUsers(users, requestingUser);
    const emailUsers = invitedUsers.filter(user => _canEmailUser(user, requestingUser));
    if (includeSelf) {
        emailUsers.push(requestingUser);
    }
    return emailUsers;
}
//# sourceMappingURL=_get-email-users.js.map