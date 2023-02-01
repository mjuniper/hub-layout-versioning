"use strict";
/* Copyright (c) 2018-2021 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserThumbnailUrl = exports.getGroupThumbnailUrl = exports.getNextFunction = exports.relativeDateToDateRange = exports.valueToMatchOptions = exports.expandApi = exports.expandApis = exports.SEARCH_APIS = void 0;
const arcgis_rest_auth_1 = require("@esri/arcgis-rest-auth");
const util_1 = require("../util");
/**
 * Well known APIs
 * Short-forms for specifying common APIs
 * We will likely deprecate this
 */
exports.SEARCH_APIS = {
    arcgis: {
        label: "ArcGIS Online",
        url: "https://www.arcgis.com",
        type: "arcgis",
    },
    arcgisQA: {
        label: "ArcGIS Online QAEXT",
        url: "https://qaext.arcgis.com",
        type: "arcgis",
    },
    arcgisDEV: {
        label: "ArcGIS Online DEVEXT",
        url: "https://devext.arcgis.com",
        type: "arcgis",
    },
    hub: {
        label: "ArcGIS Hub",
        url: "https://hub.arcgis.com/api",
        type: "arcgis-hub",
    },
    hubDEV: {
        label: "ArcGIS Hub DEV",
        url: "https://hubdev.arcgis.com/api",
        type: "arcgis-hub",
    },
    hubQA: {
        label: "ArcGIS Hub QA",
        url: "https://hubqa.arcgis.com/api",
        type: "arcgis-hub",
    },
};
/**
 * @private
 * Convert array of api "names" into full ApiDefinitions
 * @param apis
 * @returns
 */
function expandApis(apis) {
    return apis.map(expandApi);
}
exports.expandApis = expandApis;
/**
 * @private
 * Convert an api "name" into a full ApiDefinition
 * @param api
 * @returns
 */
function expandApi(api) {
    if (typeof api === "string" && api in exports.SEARCH_APIS) {
        return exports.SEARCH_APIS[api];
    }
    else {
        // it's an object, so we trust that it's well formed
        return api;
    }
}
exports.expandApi = expandApi;
/**
 * @private
 * Convert a field value into a MatchOptions if it's not already one
 * @param value
 * @returns
 */
function valueToMatchOptions(value) {
    let result = {};
    if (Array.isArray(value)) {
        result = {
            any: value,
        };
    }
    else {
        if (typeof value === "string") {
            result = {
                any: [value],
            };
        }
        if (typeof value === "object") {
            result = value;
        }
    }
    return result;
}
exports.valueToMatchOptions = valueToMatchOptions;
/**
 * @private
 * Convert a RelativeDate to a DateRange<number>
 * @param relative
 * @returns
 */
function relativeDateToDateRange(relative) {
    // hash of offsets
    const offsetMs = {
        min: 1000 * 60,
        hours: 1000 * 60 * 60,
        days: 1000 * 60 * 60 * 24,
        weeks: 1000 * 60 * 60 * 24 * 7,
    };
    const now = new Date();
    // default
    const result = {
        type: "date-range",
        from: now.getTime(),
        to: now.getTime(),
    };
    //
    switch (relative.unit) {
        case "hours":
        case "days":
        case "weeks":
            result.from = result.to - offsetMs[relative.unit] * relative.num;
            break;
        case "months":
            // get the current month and subtract num
            // NOTE: when the previous month has fewer days than this month
            // setMonth() will return a date w/in the current month
            // example: 3/30 -> 3/2 b/c there is no 2/28
            now.setMonth(now.getMonth() - relative.num);
            result.from = now.getTime();
            break;
        case "years":
            now.setFullYear(now.getFullYear() - relative.num);
            result.from = now.getTime();
            break;
    }
    return result;
}
exports.relativeDateToDateRange = relativeDateToDateRange;
/**
 * Create a `.next()` function for a type
 * @param request
 * @param nextStart
 * @param total
 * @param fn
 * @returns
 */
function getNextFunction(request, nextStart, total, fn) {
    const clonedRequest = util_1.cloneObject(request);
    // clone will not handle authentication so we do it manually
    if (request.authentication) {
        clonedRequest.authentication = arcgis_rest_auth_1.UserSession.deserialize(request.authentication.serialize());
    }
    // figure out the start
    clonedRequest.start = nextStart > -1 ? nextStart : total + 1;
    return (authentication) => {
        if (authentication) {
            clonedRequest.authentication = authentication;
        }
        return fn(clonedRequest);
    };
}
exports.getNextFunction = getNextFunction;
/**
 * Construct a the full url to a group thumbnail
 *
 * - If the group has a thumbnail, construct the full url
 * - If the group is not public, append on the token (if passed in)
 * @param portalUrl
 * @param group
 * @param token
 * @returns
 */
function getGroupThumbnailUrl(portalUrl, group, token) {
    let thumbnailUrl = null;
    if (group.thumbnail) {
        thumbnailUrl = `${portalUrl}/community/groups/${group.id}/info/${group.thumbnail}`;
        if (token && group.access !== "public") {
            thumbnailUrl = `${thumbnailUrl}?token=${token}`;
        }
    }
    return thumbnailUrl;
}
exports.getGroupThumbnailUrl = getGroupThumbnailUrl;
/**
 * Construct a the full url to a user thumbnail
 *
 * - If the user has a thumbnail, construct the full url
 * - If the user is not public, append on the token
 * @param portalUrl
 * @param user
 * @param token
 * @returns
 */
function getUserThumbnailUrl(portalUrl, user, token) {
    let thumbnailUrl = null;
    if (user.thumbnail) {
        thumbnailUrl = `${portalUrl}/community/users/${user.username}/info/${user.thumbnail}`;
        if (token && user.access !== "public") {
            thumbnailUrl = `${thumbnailUrl}?token=${token}`;
        }
    }
    return thumbnailUrl;
}
exports.getUserThumbnailUrl = getUserThumbnailUrl;
//# sourceMappingURL=utils.js.map