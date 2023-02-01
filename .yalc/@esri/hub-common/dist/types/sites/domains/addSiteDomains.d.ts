import { IHubRequestOptions, IModel } from "../../types";
/**
 * Given a Site Model, register the domains with the Domain Service.
 *
 * This should only be used when creating a site. To update domains related
 * to a site, use the `addDomain` and `removeDomain` functions directly
 *
 * @param {Object} model site model
 * @param {IHubRequestOptions} hubRequestOptions
 */
export declare function addSiteDomains(model: IModel, hubRequestOptions: IHubRequestOptions): Promise<any[]>;
