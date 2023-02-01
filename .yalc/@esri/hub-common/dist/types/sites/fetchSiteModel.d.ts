import { IHubRequestOptions } from "../types";
/**
 * Returns site model given various kinds of identifier
 *
 * @param identifier - a site item ID, site hostname, enterprise site slug, or full site URL
 * @param hubRequestOptions
 */
export declare function fetchSiteModel(identifier: string, hubRequestOptions: IHubRequestOptions): Promise<import("../types").IModel>;
