import { IHubRequestOptions } from "../types";
/**
 * Get a Site Model by it's Item Id, and apply schema upgrades
 * @param {String} id Site Item Id
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function getSiteById(id: string, hubRequestOptions: IHubRequestOptions): Promise<import("../types").IModel>;
