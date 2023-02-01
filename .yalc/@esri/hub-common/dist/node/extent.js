"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExtentCenter = exports.extentToPolygon = exports.isValidExtent = exports.isBBox = exports.getOrgExtentAsBBox = exports.getGeographicOrgExtent = exports.GLOBAL_EXTENT = exports.extentToBBox = exports.createExtent = exports.bboxToString = exports.bBoxToExtent = void 0;
const objects_1 = require("./objects");
const arcgis_rest_request_1 = require("@esri/arcgis-rest-request");
/**
 * Turns an bounding box coordinate array into an extent object
 * @param bBox bounding box coordinate array
 * @returns extent object
 */
exports.bBoxToExtent = (bBox) => {
    const [[xmin, ymin], [xmax, ymax]] = bBox;
    return createExtent(xmin, ymin, xmax, ymax);
};
/**
 * Given a Bbox, convert it to a string. Some api endpoints expect a string
 *
 * @param {BBox} extent
 * @return {*}  {string}
 */
exports.bboxToString = (extent) => {
    return extent.map((a) => a.join(", ")).join(", ");
};
function createExtent(xmin, ymin, xmax, ymax, wkid = 4326) {
    return {
        xmin,
        ymin,
        xmax,
        ymax,
        // type: 'extent',
        spatialReference: {
            wkid,
        },
    };
}
exports.createExtent = createExtent;
/**
 * Turns an extent object into a bounding box coordinate array
 * @param extent extent
 */
function extentToBBox(extent) {
    return [
        [extent.xmin, extent.ymin],
        [extent.xmax, extent.ymax],
    ];
}
exports.extentToBBox = extentToBBox;
exports.GLOBAL_EXTENT = {
    xmin: -180,
    ymin: -90,
    xmax: 180,
    ymax: 90,
    spatialReference: {
        wkid: 4326,
    },
};
/**
 * Gets the geographic extent for an org
 * @param hubRequestOptions
 */
function getGeographicOrgExtent(hubRequestOptions) {
    const portal = hubRequestOptions.portalSelf;
    const orgExtent = portal.defaultExtent;
    const geometryServiceUrl = objects_1.getProp(portal, "helperServices.geometry.url");
    // Define a default global extent object
    if (!geometryServiceUrl) {
        return Promise.resolve(exports.GLOBAL_EXTENT);
    }
    if (!orgExtent) {
        return Promise.resolve(exports.GLOBAL_EXTENT);
    }
    const url = `${geometryServiceUrl}/project`;
    // geometry params...
    const geometryParam = {
        geometryType: "esriGeometryEnvelope",
        geometries: [orgExtent],
    };
    const options = {
        httpMethod: "POST",
        params: {
            geometries: JSON.stringify(geometryParam),
            transformForward: false,
            transformation: "",
            inSR: orgExtent.spatialReference.wkid,
            outSR: 4326,
            f: "json",
        },
    };
    // add in auth if it's passed
    if (hubRequestOptions.authentication) {
        options.authentication = hubRequestOptions.authentication;
    }
    return arcgis_rest_request_1.request(url, options)
        .then((response) => {
        const geom = response.geometries[0];
        return {
            xmin: geom.xmin,
            ymin: geom.ymin,
            xmax: geom.xmax,
            ymax: geom.ymax,
            spatialReference: {
                wkid: 4326,
            },
        };
    })
        .catch((ex) => {
        return exports.GLOBAL_EXTENT;
    });
}
exports.getGeographicOrgExtent = getGeographicOrgExtent;
/**
 * Get the default org extent as a bbox for use on item.extent
 * @param {IHubRequestOptions} hubRequestOptions
 */
function getOrgExtentAsBBox(hubRequestOptions) {
    return getGeographicOrgExtent(hubRequestOptions).then((extent) => extentToBBox(extent));
}
exports.getOrgExtentAsBBox = getOrgExtentAsBBox;
/**
 * checks if the extent is a valid BBox (2 element array of coordinate pair arrays)
 * @param extent
 * @returns
 */
exports.isBBox = (extent) => {
    return (Array.isArray(extent) &&
        Array.isArray(extent[0]) &&
        Array.isArray(extent[1]));
};
function isExtentJSON(extent) {
    return ["xmin", "ymin", "xmax", "ymax"].every((key) => typeof extent[key] === "number");
}
/**
 * Check if the given extent is in a known format
 * @param  {Object} extent extent in any format
 * @return {Boolean}       indicator
 */
function isValidExtent(extent) {
    return !!extent && [exports.isBBox, isExtentJSON].some((test) => test(extent));
}
exports.isValidExtent = isValidExtent;
/**
 * Convert an extent object into a polygon object
 * @param extent
 * @returns
 */
exports.extentToPolygon = (extent) => {
    const { xmin, ymin, xmax, ymax, spatialReference } = extent;
    const rings = [
        [
            [xmin, ymax],
            [xmax, ymax],
            [xmax, ymin],
            [xmin, ymin],
            [xmin, ymax],
        ],
    ];
    return {
        rings,
        spatialReference,
    };
};
/**
 * Get the center of an extent as a point
 * @param extent
 * @returns
 */
exports.getExtentCenter = (extent) => {
    const { xmin, ymin, xmax, ymax, spatialReference } = extent;
    const x = (xmax - xmin) / 2 + xmin;
    const y = (ymax - ymin) / 2 + ymin;
    return { x, y, spatialReference };
};
//# sourceMappingURL=extent.js.map