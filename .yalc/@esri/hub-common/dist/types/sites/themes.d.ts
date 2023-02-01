import { IPortal } from "@esri/arcgis-rest-portal";
import { IHubSiteTheme } from "../core";
/**
 * Default Site Theme
 */
export declare const DEFAULT_THEME: IHubSiteTheme;
/**
 * Return the default theme, extended with values from the Org's shared theme
 * @param {Object} portalSelf Org's Portal object
 */
export declare function getOrgDefaultTheme(portalSelf: IPortal): IHubSiteTheme;
