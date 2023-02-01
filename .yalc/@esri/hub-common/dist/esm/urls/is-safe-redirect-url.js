import { __rest } from "tslib";
import { domainExists } from "../sites/domains/domain-exists";
const SAFE_REDIRECT_URL = new RegExp("^https?:\\/\\/([a-z0-9-]+\\.)*(arcgis|esri)\\.com");
const HTTP_PROTOCOL = new RegExp("^https?:$");
/**
 * Determines if a given URL is safe to redirect to.
 * All URLs to *.esri.com and *.arcgis.com are considered
 * safe. Non esri/arcgis domains must have a domain record.
 * @param options.url url A URL
 * @param ...options An IHubRequestOptions object
 * @returns a promise that resolves a boolean
 */
export async function isSafeRedirectUrl(options) {
    const { url } = options, hubRequestOptions = __rest(options, ["url"]);
    let isSafe;
    try {
        isSafe = SAFE_REDIRECT_URL.test(url);
        if (!isSafe) {
            const { protocol, hostname } = new URL(url);
            if (!HTTP_PROTOCOL.test(protocol)) {
                throw new Error("invalid protocol");
            }
            isSafe = await domainExists(hostname, hubRequestOptions);
        }
    }
    catch (e) {
        isSafe = false;
    }
    return isSafe;
}
//# sourceMappingURL=is-safe-redirect-url.js.map