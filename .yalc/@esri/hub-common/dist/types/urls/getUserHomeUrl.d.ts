import { IRequestOptions } from "@esri/arcgis-rest-request";
import { IPortal } from "@esri/arcgis-rest-portal";
import { IHubRequestOptions } from "../types";
/**
 * Return the URL of the user's page in the Portal Home application
 * @param username The username
 * @param portalUrlOrObject a portal base or API URL, a portal object, or request options containing either of those
 * @returns URL to the user's profile, defaults to `https://www.arcgis.com/home/user.html?user={username}`
 */
export declare function getUserHomeUrl(username: string, portalUrlOrObject?: string | IPortal | IHubRequestOptions | IRequestOptions): string;
