"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectDataTypeFromExtension = exports.detectDataTypeFromHeader = exports.pingFeatureService = exports.pingUrl = exports.getFeatureServiceItem = exports.getFeatureLayerItem = exports.getFeatureServiceTitle = exports.isFeatureLayer = exports.isService = exports.isFeatureService = exports.isUrl = exports.getFileName = exports.shouldHaveDataUrl = void 0;
const types_1 = require("../../types");
const utils_1 = require("../../utils");
const FEATURE_SERVICE_URL_REGEX = /(feature)server(\/|\/(\d+))?$/i;
const SERVICE_URL_REGEX = /\/[a-zA-Z]+server(\/|\/(\d+))?$/i;
/**
 * Feature service / Doc Links Should not have data urls. Let"s exclude them from that.
 *
 * @export
 * @param {string} itemType What type of item is it?
 * @return {*}  {boolean}
 */
function shouldHaveDataUrl(itemType) {
    // Specifically we want to avoid FS / DL from having a data url.
    return !["Feature Service", "Document Link"].includes(itemType);
}
exports.shouldHaveDataUrl = shouldHaveDataUrl;
/**
 * Get the file name out of a url. Will return either the
 * hostname, or the pathname if it exists
 *
 * @export
 * @param {string} url Url to get a file name out of
 * @return {*}  {string}
 */
function getFileName(url) {
    let filename;
    try {
        const parsed = new URL(url);
        // If the URL pathname exists, return its last segment,
        // otherwise return the hostname
        filename =
            parsed.pathname !== "/"
                ? parsed.pathname.split("/").pop()
                : parsed.hostname;
    }
    catch (e) {
        throw new Error(`Error getting file name from data url`);
    }
    return filename;
}
exports.getFileName = getFileName;
/**
 * Is this a valid url?
 *
 * @param {string} url Url to validate
 * @return {*}  {boolean}
 */
function isUrl(url) {
    // Use try / catch as a simple string "test" will cause new URL() to throw an error.
    try {
        const result = new URL(url);
        // Cast to bool.
        return !!result;
    }
    catch (e) {
        utils_1.Logger.error(`Error parsing URL`);
        return false;
    }
}
exports.isUrl = isUrl;
/**
 * Tests if url string is a feature service / layer.
 *
 * @param {string} url URL to test
 * @return {*}  {boolean}
 */
function isFeatureService(url) {
    return FEATURE_SERVICE_URL_REGEX.test(url);
}
exports.isFeatureService = isFeatureService;
/**
 * Tests if url string is a service (map, feature, image, etc)
 *
 * @param {string} url Url to test
 * @return {*}  {boolean}
 */
function isService(url) {
    return SERVICE_URL_REGEX.test(url);
}
exports.isService = isService;
/**
 * Is the service a feature service AND is it a layer specifically
 *
 * @param {string} url
 * @return {*}  {boolean}
 */
function isFeatureLayer(url) {
    const results = url.match(FEATURE_SERVICE_URL_REGEX);
    return results && !!results[3];
}
exports.isFeatureLayer = isFeatureLayer;
/**
 * Gets item title from url as a fall back
 *
 * @param {string} url item url
 * @return {*}  {string}
 */
function getFeatureServiceTitle(url) {
    return url.match(/\/services\/(.+)\/(feature|map|image)server/i)[1];
}
exports.getFeatureServiceTitle = getFeatureServiceTitle;
/**
 * Gets item info out of a feature layer item.
 *
 * @export
 * @param url Item URL
 * @param body Item body.
 * @return Item info (title, description, extent, url)
 */
function getFeatureLayerItem(url, body) {
    return {
        title: body.name,
        description: body.description,
        extent: body.extent,
        url,
    };
}
exports.getFeatureLayerItem = getFeatureLayerItem;
/**
 * Gets item info out of a feature service response (which is not a specific layer)
 *
 * @export
 * @param {*} url
 * @param {*} body
 * @return {*}
 */
function getFeatureServiceItem(url, body) {
    const description = body.serviceDescription || body.description;
    const title = getFeatureServiceTitle(url);
    const extent = body.fullExtent || body.initialExtent;
    return { title, description, extent, url };
}
exports.getFeatureServiceItem = getFeatureServiceItem;
/**
 * Ping a non FS url and return response status && headers
 *
 * @export
 * @param {string} url Non FS URL
 * @return {*}  {Promise<{ ok: boolean, headers: Headers }>}
 */
async function pingUrl(url) {
    const response = await fetch(url, { method: "HEAD" });
    return {
        ok: response.ok,
        headers: response.headers,
    };
}
exports.pingUrl = pingUrl;
/**
 * Ping a FS URL and handle matters such as "hidden" success failures.
 *
 * @export
 * @param {string} url
 * @return {*}  {Promise<{ ok: boolean, item?: any }>}
 */
async function pingFeatureService(url) {
    // make sure the response is in json format
    const parsed = new URL(url);
    parsed.searchParams.set("f", "json");
    // Since the feature service can return a 200 response with error (e.g. for
    // non-existing layer), we can only request the full metadata by a GET, not HEAD
    // request
    const response = await fetch(parsed.href);
    if (!response.ok) {
        return { ok: false };
    }
    const body = await response.json();
    // Exit if the request returns an error
    if (body.error) {
        return { ok: false };
    }
    const getItem = isFeatureLayer(url)
        ? getFeatureLayerItem
        : getFeatureServiceItem;
    const item = getItem(url, body);
    return {
        ok: true,
        item,
    };
}
exports.pingFeatureService = pingFeatureService;
function detectDataTypeFromHeader(headers) {
    let contentType = headers.get("Content-Type");
    let dataType;
    if (!contentType) {
        return;
    }
    // Only get the "media-type"
    contentType = contentType.split(";").shift();
    if (contentType === "text/csv") {
        dataType = types_1.ItemType.CSV;
    }
    else if (contentType === "application/vnd.ms-excel" ||
        contentType ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        dataType = types_1.ItemType["Microsoft Excel"];
    }
    else if (contentType === "application/pdf") {
        dataType = types_1.ItemType.PDF;
    }
    else if (contentType === "image/jpeg" ||
        contentType === "image/jpg" ||
        contentType === "image/png") {
        dataType = types_1.ItemType.Image;
    }
    else if (contentType === "application/geo+json") {
        dataType = types_1.ItemType.GeoJson;
    }
    return dataType;
}
exports.detectDataTypeFromHeader = detectDataTypeFromHeader;
function detectDataTypeFromExtension(url) {
    const contentType = url.toLowerCase().split(".").pop();
    let dataType;
    if (contentType === "csv") {
        dataType = types_1.ItemType.CSV;
    }
    else if (contentType === "xls" || contentType === "xlsx") {
        dataType = types_1.ItemType["Microsoft Excel"];
    }
    else if (contentType === "pdf") {
        dataType = types_1.ItemType.PDF;
    }
    else if (contentType === "jpeg" ||
        contentType === "jpg" ||
        contentType === "png") {
        dataType = types_1.ItemType.Image;
    }
    else if (contentType === "geojson") {
        dataType = types_1.ItemType.GeoJson;
    }
    return dataType;
}
exports.detectDataTypeFromExtension = detectDataTypeFromExtension;
//# sourceMappingURL=_validate-url-helpers.js.map