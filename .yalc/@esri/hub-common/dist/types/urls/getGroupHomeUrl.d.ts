import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IPortal } from "@esri/arcgis-rest-portal";
import { IHubRequestOptions } from "../types";
/**
 * Return the URL of the group's page in the Portal Home application
 * @param groupId The group's ID
 * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
 * @returns URL to the groups's url, defaults to `https://www.arcgis.com/home/group.html?id={group.id}`
 */
export declare function getGroupHomeUrl(groupId: string, portalUrlOrObject?: string | IPortal | IHubRequestOptions | IRequestOptions): string;
