import { EntityCapabilities, ICapabilityPermission } from "../../capabilities";
import { IPermissionPolicy } from "../../permissions";
/**
 * Default capabilities for a Project. If not listed here, the capability will not be available
 * This hash is combined with the capabilities hash stored in the item data. Regardless of what
 * properties are defined in the item data, only the capabilities defined here will be available
 * @private
 */
export declare const ProjectDefaultCapabilities: EntityCapabilities;
/**
 * List of all the Project Capability Permissions
 * These are considered Hub Business Rules and are not intended
 * to be modified by consumers
 * @private
 */
export declare const ProjectCapabilityPermissions: ICapabilityPermission[];
/**
 * Project Permission Policies
 * These define the requirements any user must meet to perform related actions
 * @private
 */
export declare const ProjectPermissions: readonly ["hub:project:create", "hub:project:delete", "hub:project:edit", "hub:project:view"];
/**
 * Project permission policies
 * @private
 */
export declare const ProjectPermissionPolicies: IPermissionPolicy[];
