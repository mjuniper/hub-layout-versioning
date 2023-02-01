"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerBrowserApp = void 0;
const arcgis_rest_request_1 = require("@esri/arcgis-rest-request");
const urls_1 = require("../urls");
/**
 * Register an Item as an application, enabling oAuth flows at custom
 * domains. Only item types with "Application" in the name are valid
 * with this API call.
 * @param {string} itemId Item Id of item to create an application for
 * @param {Array} redirectUris Array of valid redirect uris for the app
 * @param {string} appType Defaults to "browser"
 * @param {IRequestOptions} requestOptions
 */
function registerBrowserApp(itemId, redirectUris, requestOptions) {
    const url = `${urls_1.getPortalApiUrl(requestOptions)}/oauth2/registerApp`;
    const options = {
        method: "POST",
        authentication: requestOptions.authentication,
        params: {
            itemId,
            appType: "browser",
            redirect_uris: JSON.stringify(redirectUris),
        },
    };
    return arcgis_rest_request_1.request(url, options);
}
exports.registerBrowserApp = registerBrowserApp;
//# sourceMappingURL=registerBrowserApp.js.map