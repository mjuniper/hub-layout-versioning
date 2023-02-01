import { registerBrowserApp } from "../items/registerBrowserApp";
import { getProp } from "../objects";
import { _getHttpAndHttpsUris } from "../urls";
/**
 * Register the Site item as an application so we can oauth against it
 * @param {string} siteId Item Id of the site
 * @param {Array} uris Arrayf valid uris for the site
 * @param {IHubRequestOptions} hubRequestOptions
 */
export function registerSiteAsApplication(model, hubRequestOptions) {
    // PORTAL-ENV: we can't register sites as `arcgisonline` because it will bust sign in on the portal
    if (hubRequestOptions.isPortal)
        return Promise.resolve({});
    const uris = [model.data.values.defaultHostname];
    if (getProp(model, "data.values.customHostname")) {
        uris.push(model.data.values.customHostname);
    }
    // get both the http and https versions of the urls, just to cover all the bases
    const redirectUris = uris.reduce((acc, uri) => {
        return acc.concat(_getHttpAndHttpsUris(uri));
    }, []);
    return registerBrowserApp(model.item.id, redirectUris, hubRequestOptions);
}
//# sourceMappingURL=registerSiteAsApplication.js.map