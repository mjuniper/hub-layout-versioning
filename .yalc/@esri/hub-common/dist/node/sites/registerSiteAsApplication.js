"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSiteAsApplication = void 0;
const registerBrowserApp_1 = require("../items/registerBrowserApp");
const objects_1 = require("../objects");
const urls_1 = require("../urls");
/**
 * Register the Site item as an application so we can oauth against it
 * @param {string} siteId Item Id of the site
 * @param {Array} uris Arrayf valid uris for the site
 * @param {IHubRequestOptions} hubRequestOptions
 */
function registerSiteAsApplication(model, hubRequestOptions) {
    // PORTAL-ENV: we can't register sites as `arcgisonline` because it will bust sign in on the portal
    if (hubRequestOptions.isPortal)
        return Promise.resolve({});
    const uris = [model.data.values.defaultHostname];
    if (objects_1.getProp(model, "data.values.customHostname")) {
        uris.push(model.data.values.customHostname);
    }
    // get both the http and https versions of the urls, just to cover all the bases
    const redirectUris = uris.reduce((acc, uri) => {
        return acc.concat(urls_1._getHttpAndHttpsUris(uri));
    }, []);
    return registerBrowserApp_1.registerBrowserApp(model.item.id, redirectUris, hubRequestOptions);
}
exports.registerSiteAsApplication = registerSiteAsApplication;
//# sourceMappingURL=registerSiteAsApplication.js.map