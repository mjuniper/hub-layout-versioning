import { IHubRequestOptions, IModel } from "../types";
/**
 * Register the Site item as an application so we can oauth against it
 * @param {string} siteId Item Id of the site
 * @param {Array} uris Arrayf valid uris for the site
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function registerSiteAsApplication(model: IModel, hubRequestOptions: IHubRequestOptions): Promise<any>;
