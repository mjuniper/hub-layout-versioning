import { IArcGISContext } from "../../ArcGISContext";
import { HubEntity } from "../../core";
import { ICapabilityAccessResponse, ICapabilityPermission } from "../types";
/**
 * Check an individual capability access rule
 * @param rule
 * @param context
 * @param entity
 * @returns
 */
export declare function checkCapabilityAccess(rule: ICapabilityPermission, context: IArcGISContext, entity: HubEntity): ICapabilityAccessResponse;
