import { HubEntity } from "./types/HubEntity";
import { HubEntityType } from "./types/HubEntityType";
import { IArcGISContext } from "../ArcGISContext";
/**
 * Fetch a Hub entity by identifier (id or slug)
 * @param type
 * @param identifier
 * @param context
 * @returns
 */
export declare function fetchHubEntity(type: HubEntityType, identifier: string, context: IArcGISContext): Promise<HubEntity>;
