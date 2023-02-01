import { EntityCapabilities, ICapabilityPermission } from "../../capabilities";
import { IPermissionPolicy } from "../../permissions";
/**
 * Default capabilities for a Initiative. If not listed here, the capability will not be available
 * This hash is combined with the capabilities hash stored in the item data. Regardless of what
 * properties are defined in the item data, only the capabilities defined here will be available
 * @private
 */
export declare const InitiativeDefaultCapabilities: EntityCapabilities;
/**
 * List of all the Initiative Capability Permissions
 * These are considered Hub Business Rules and are not intended
 * to be modified by consumers
 * @private
 */
export declare const InitiativeCapabilityPermissions: ICapabilityPermission[];
/**
 * Initiative Permission Policies
 * These define the requirements any user must meet to perform related actions
 * @private
 */
export declare const InitiativePermissions: readonly ["hub:initiative:create", "hub:initiative:delete", "hub:initiative:edit", "hub:initiative:view"];
/**
 * Initiative permission policies
 * @private
 */
export declare const InitiativePermissionPolicies: IPermissionPolicy[];
