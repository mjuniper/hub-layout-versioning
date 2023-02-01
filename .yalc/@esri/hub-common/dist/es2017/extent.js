import { getProp } from "./objects";
import { request } from "@esri/arcgis-rest-request";
/**
 * Turns an bounding box coordinate array into an extent object
 * @param bBox bounding box coordinate array
 * @returns extent object
 */
export const bBoxToExtent = (bBox) => {
    const [[xmin, ymin], [xmax, ymax]] = bBox;
    return createExtent(xmin, ymin, xmax, ymax);
};
export function createExtent(xmin, ymin, xmax, ymax, wkid = 4326) {
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
/**
 * Turns an extent object into a bounding box coordinate array
 * @param extent extent
 */
export function extentToBBox(extent) {
    return [
        [extent.xmin, extent.ymin],
        [extent.xmax, extent.ymax],
    ];
}
export const GLOBAL_EXTENT = {
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
export function getGeographicOrgExtent(hubRequestOptions) {
    const portal = hubRequestOptions.portalSelf;
    const orgExtent = portal.defaultExtent;
    const geometryServiceUrl = getProp(portal, "helperServices.geometry.url");
    // Define a default global extent object
    if (!geometryServiceUrl) {
        return Promise.resolve(GLOBAL_EXTENT);
    }
    if (!orgExtent) {
        return Promise.resolve(GLOBAL_EXTENT);
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
    return request(url, options)
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
        return GLOBAL_EXTENT;
    });
}
/**
 * Get the default org extent as a bbox for use on item.extent
 * @param {IHubRequestOptions} hubRequestOptions
 */
export function getOrgExtentAsBBox(hubRequestOptions) {
    return getGeographicOrgExtent(hubRequestOptions).then((extent) => extentToBBox(extent));
}
/**
 * checks if the extent is a valid BBox (2 element array of coordinate pair arrays)
 * @param extent
 * @returns
 */
export const isBBox = (extent) => {
    return (Array.isArray(extent) &&
        Array.isArray(extent[0]) &&
        Array.isArray(extent[1]));
};
export function isExtentCoordinateArray(extent) {
    /* tslint:disable no-console */
    console.warn("DEPRECATED: use isBBox() instead");
    /* tslint:enable no-console */
    return isBBox(extent);
}
function isExtentJSON(extent) {
    return ["xmin", "ymin", "xmax", "ymax"].every((key) => typeof extent[key] === "number");
}
/**
 * Check if the given extent is in a known format
 * @param  {Object} extent extent in any format
 * @return {Boolean}       indicator
 */
export function isValidExtent(extent) {
    return (!!extent &&
        [isExtentCoordinateArray, isExtentJSON].some((test) => test(extent)));
}
/* istanbul ignore next DEPRECATED, remove at next breaking change */
export const bBoxToPolygon = (bBox) => {
    /* tslint:disable no-console */
    console.warn("DEPRECATED: use extentToPolygon(bBoxToExtent(bBox)) instead");
    return extentToPolygon(bBoxToExtent(bBox));
};
/**
 * Convert an extent object into a polygon object
 * @param extent
 * @returns
 */
export const extentToPolygon = (extent) => {
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
export const getExtentCenter = (extent) => {
    const { xmin, ymin, xmax, ymax, spatialReference } = extent;
    const x = (xmax - xmin) / 2 + xmin;
    const y = (ymax - ymin) / 2 + ymin;
    return { x, y, spatialReference };
};
//# sourceMappingURL=extent.js.map