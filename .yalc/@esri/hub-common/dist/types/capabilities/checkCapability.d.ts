import { HubEntity, IArcGISContext } from "../index";
import { Capability, ICapabilityAccessResponse } from "./types";
/**
 * Check if a capability is enabled for a given entity and if the current user has necessary permissions to access it
 * @param capability
 * @param context
 * @param entity
 * @returns
 */
export declare function checkCapability(capability: Capability, context: IArcGISContext, entity: HubEntity): ICapabilityAccessResponse;
