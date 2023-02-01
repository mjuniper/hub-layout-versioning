"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServiceTypeFromUrl = exports.isMapOrFeatureServerUrl = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
tslib_1.__exportStar(require("./build-url"), exports);
tslib_1.__exportStar(require("./get-hub-locale-asset-url"), exports);
tslib_1.__exportStar(require("./get-portal-api-url"), exports);
tslib_1.__exportStar(require("./get-portal-url"), exports);
tslib_1.__exportStar(require("./hub-cdn-urlmap"), exports);
tslib_1.__exportStar(require("./upgrade-protocol"), exports);
tslib_1.__exportStar(require("./strip-protocol"), exports);
tslib_1.__exportStar(require("./_get-http-and-https-uris"), exports);
tslib_1.__exportStar(require("./_get-location"), exports);
tslib_1.__exportStar(require("./get-hub-api-url-from-portal"), exports);
tslib_1.__exportStar(require("./get-hub-url-from-portal"), exports);
tslib_1.__exportStar(require("./get-item-home-url"), exports);
tslib_1.__exportStar(require("./get-item-api-url"), exports);
tslib_1.__exportStar(require("./get-item-data-url"), exports);
tslib_1.__exportStar(require("./convert-urls-to-anchor-tags"), exports);
tslib_1.__exportStar(require("./getHubApiFromPortalUrl"), exports);
tslib_1.__exportStar(require("./getPortalBaseFromOrgUrl"), exports);
tslib_1.__exportStar(require("./getGroupHomeUrl"), exports);
tslib_1.__exportStar(require("./getUserHomeUrl"), exports);
tslib_1.__exportStar(require("./get-campaign-url"), exports);
tslib_1.__exportStar(require("./is-safe-redirect-url"), exports);
const MAP_OR_FEATURE_SERVER_URL_REGEX = /\/(map|feature)server/i;
/**
 *
 * @param url
 * @returns true if the url is of a map or feature service
 */
exports.isMapOrFeatureServerUrl = (url) => {
    return MAP_OR_FEATURE_SERVER_URL_REGEX.test(url);
};
/**
 * parses map or feature service type from URL
 * @param url map or feature service URL
 * @returns item type, either "Map Service" or "Feature Service"
 * or undefined for other types of URLs
 */
exports.getServiceTypeFromUrl = (url) => {
    const match = url.match(MAP_OR_FEATURE_SERVER_URL_REGEX);
    const mapOrFeature = match && match[1];
    return mapOrFeature && `${util_1.capitalize(mapOrFeature)} Service`;
};
//# sourceMappingURL=index.js.map