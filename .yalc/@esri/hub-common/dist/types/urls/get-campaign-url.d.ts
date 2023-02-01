import { IHubRequestOptions } from "../types";
import { IPortal } from "@esri/arcgis-rest-portal";
import { IRequestOptions } from "@esri/arcgis-rest-request";
interface IBuildHubCampaignUrl {
    portal: string | IPortal | IHubRequestOptions | IRequestOptions;
    uri: string;
    meta: any;
    redirectUrl: string;
}
/**
 * Builds a Hub "campaign" URL used as a single entry-point into
 * Hub from external links, i.e. push notifications, emails, sms, etc,
 * from which we can capture campaign-related telemetry before redirecting
 * the user off to a provided destination.
 * @param options.portal A string IPortal IHubRequestOptions or IRequestOptions object
 * @param options.uri A URI that provides additional context for how to parse the provide meta
 * @param options.meta An object of metadata for the campaign URL
 * @param options.redirectURL A redirect URL
 * @returns string A campaign URL
 */
export declare function getCampaignUrl(options: IBuildHubCampaignUrl): string;
export {};
