import { EntityCapabilities, ICapabilityPermission } from "../../capabilities";
import { IPermissionPolicy } from "../../permissions/types";
/**
 * Default capabilities for a Site. If not listed here, the capability will not be available
 * This hash is combined with the capabilities hash stored in the item data. Regardless of what
 * properties are defined in the item data, only the capabilities defined here will be available
 * @private
 */
export declare const SiteDefaultCapabilities: EntityCapabilities;
/**
 * List of all the Site Capability Permissions
 * These are considered Hub Business Rules and are not intended
 * to be modified by consumers
 */
export declare const SiteCapabilityPermissions: ICapabilityPermission[];
/**
 * Site Permissions
 * This feeds into the Permissions type
 */
export declare const SitePermissions: readonly ["hub:site:create", "hub:site:delete", "hub:site:edit", "hub:site:view"];
/**
 * Site permission policies
 * @private
 */
export declare const SitesPermissionPolicies: IPermissionPolicy[];
