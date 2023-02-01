import { IWorkspaceCapabilityResponse, ICapabilityPermission } from "./types";
import { HubEntity } from "../core";
import { IArcGISContext } from "../ArcGISContext";
/**
 * List of all the Capability Permissions in the Hub System
 * These are defined in the entity specific modules files
 */
export declare const CapabilityPermissions: ICapabilityPermission[];
/**
 * Return the capabilities that are granted to the current user for a given entity
 * This is used by the Hub Components to determine which Workspace Navigation Links to show
 * @param entity
 * @param context
 * @returns
 */
export declare function getWorkspaceCapabilities(entity: HubEntity, context: IArcGISContext): IWorkspaceCapabilityResponse;
