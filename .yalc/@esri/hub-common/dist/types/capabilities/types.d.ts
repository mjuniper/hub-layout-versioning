import { HubEntityType, IPermissionAccessResponse, Permission } from "../index";
import { IAccessResponse } from "../core/types/IAccessResponse";
/**
 * Hub System Capabilities
 */
declare const validCapabilities: readonly ["collaboration", "details", "discussions", "events", "followers", "overview", "settings", "teams"];
/**
 * Defines the possible values for Capability
 */
export declare type Capability = typeof validCapabilities[number];
/**
 * Validate a capability. This is used because the libary can be used outside of typescript and we want to be able to return a message is the string passed in is not a valid capability
 * @param Capability
 * @returns
 */
export declare function isCapability(maybeCapability: string): boolean;
/**
 * Hash of with keys constrained to Capability
 */
export declare type EntityCapabilities = {
    [key in Capability]?: boolean;
};
/**
 * Defines the permissions required to access a specific capability, for a specific entity type
 */
export interface ICapabilityPermission {
    entity: HubEntityType;
    capability: Capability;
    permissions: Permission[];
}
/**
 * Response from checking a Capability
 */
export interface ICapabilityAccessResponse extends IAccessResponse {
    /**
     * Capability being checked
     */
    capability: Capability;
    /**
     * Individual permission check responses. Used for observability
     */
    responses: IPermissionAccessResponse[];
}
/**
 * All capability checks for an Entity's workspace
 */
export interface IWorkspaceCapabilityResponse {
    /**
     * Array of capabilities the current user has access to, in the context of a given entity
     */
    granted: Capability[];
    /**
     * Detailed checks for each capability. Used for observability
     */
    details: ICapabilityAccessResponse[];
}
export {};
