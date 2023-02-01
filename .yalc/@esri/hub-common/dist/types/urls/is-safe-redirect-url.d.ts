import { IHubRequestOptions } from "../types";
interface IIsSafeRedirectUrlOptions extends IHubRequestOptions {
    url: string;
}
/**
 * Determines if a given URL is safe to redirect to.
 * All URLs to *.esri.com and *.arcgis.com are considered
 * safe. Non esri/arcgis domains must have a domain record.
 * @param options.url url A URL
 * @param ...options An IHubRequestOptions object
 * @returns a promise that resolves a boolean
 */
export declare function isSafeRedirectUrl(options: IIsSafeRedirectUrlOptions): Promise<boolean>;
export {};
