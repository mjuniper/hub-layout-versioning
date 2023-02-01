/* Copyright (c) 2018-2021 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
import { UserSession } from "@esri/arcgis-rest-auth";
import { Logger } from "..";
import { cloneObject, unique } from "../util";
/**
 * Well known APIs
 * Short-forms for specifying common APIs
 * We will likely deprecate this
 */
export const SEARCH_APIS = {
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
export function expandApis(apis) {
    return apis.map(expandApi);
}
/**
 * @private
 * Convert an api "name" into a full ApiDefinition
 * @param api
 * @returns
 */
export function expandApi(api) {
    if (typeof api === "string" && api in SEARCH_APIS) {
        return SEARCH_APIS[api];
    }
    else {
        // it's an object, so we trust that it's well formed
        return api;
    }
}
/**
 * @private
 * Merge two date ranges by taking the longest span
 * @param dr1
 * @param dr2
 * @returns
 */
export function mergeDateRange(dr1, dr2) {
    // TODO: Remove with _searchContent
    const result = cloneObject(dr1);
    // feels like there is a more concise way to do this...
    if (dr2.from < dr1.from) {
        result.from = dr2.from;
    }
    if (dr2.to > dr1.to) {
        result.to = dr2.to;
    }
    return result;
}
/**
 * @private
 * Merge two [`MatchOptions`](../MatchOptions)
 *
 * Currently a naieve implementation where the arrays are simply merged
 *
 * @param mo1
 * @param mo2
 * @returns
 */
export function mergeMatchOptions(mo1, mo2) {
    // TODO: Remove with _searchContent
    const result = {};
    // None of these props are required, so we can't just
    // use Object.keys/.entries
    const props = ["any", "all", "not", "exact"];
    props.forEach((prop) => {
        const key = prop;
        const merged = [...getMatchValue(mo1, key), ...getMatchValue(mo2, key)];
        if (merged.length) {
            // remove any dupes and set on the return
            result[key] = merged.filter(unique);
        }
    });
    return result;
}
/**
 * Get the value of a property on an IMatchOptions
 *
 * This is complex b/c all the props are optional, and
 * they could be a simple string, or an array of strings.
 *
 * This function normalizes all that and returns an array,
 * which may or may not be empty
 * @param option
 * @param key
 * @returns
 */
function getMatchValue(option, key) {
    let matchValue = [];
    if (option[key]) {
        const val = option[key];
        if (Array.isArray(val)) {
            matchValue = val;
        }
        else {
            matchValue = [val];
        }
    }
    return matchValue;
}
/**
 * @private
 * Convert a field value into a MatchOptions if it's not already one
 * @param value
 * @returns
 */
export function valueToMatchOptions(value) {
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
/**
 * @private
 * Convert a RelativeDate to a DateRange<number>
 * @param relative
 * @returns
 */
export function relativeDateToDateRange(relative) {
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
/**
 * @private
 * As a final `ISearchOptions` object gets created, many such objects are created, and
 * need to be systematically "merged" so as to return consistently structured `q` and `filter`
 * values.
 * @param so1
 * @param so2
 * @param join
 * @returns
 */
export function mergeSearchOptions(so1, so2, join) {
    // TODO: Remove with _searchContent
    Logger.warn(`DEPRECATION: mergeSearchOptions will be removed. Work with IFilterGroups<"group"> and hubSearch() instead`);
    const result = cloneObject(so1);
    const { q, filter } = so2;
    if (q) {
        result.q = (result.q ? ` (${result.q} ${join} ${q})` : q).trim();
    }
    if (filter) {
        result.filter = (result.filter ? `(${result.filter} ${join} ${filter})` : filter).trim();
    }
    return result;
}
/**
 * @private
 * Serialize a `MatchOptions` into `q` or `filter` on an `ISearchOptions`
 * DEPRECATED: Serialization should be handled in filter-utils.ts
 * @param key
 * @param opts
 * @returns
 */
export function serializeMatchOptions(key, opts) {
    const result = {
        q: "",
        filter: "",
    };
    if (opts.exact) {
        // defined separately for refactoring later
        const userFilterableFields = [
            "username",
            "firstname",
            "lastname",
            "fullname",
            "email",
        ];
        const itemFilterableFields = [
            "title",
            "tags",
            "typekeywords",
            "type",
            "name",
            "owner",
        ];
        const groupFilterableFields = ["title", "typekeywords", "owner"];
        const filterableFields = [
            ...userFilterableFields,
            ...itemFilterableFields,
            ...groupFilterableFields,
        ];
        if (filterableFields.includes(key)) {
            result.filter = serializeStringOrArray("AND", key, opts.exact);
        }
        else {
            // Treat it the same as .all
            if (typeof opts.exact === "string") {
                if (!opts.all) {
                    opts.all = [];
                }
                if (typeof opts.all === "string") {
                    opts.all = [opts.all];
                }
                opts.all.push(opts.exact);
            }
            if (Array.isArray(opts.exact)) {
                if (!opts.all) {
                    opts.all = [];
                }
                if (typeof opts.all === "string") {
                    opts.all = [opts.all];
                }
                opts.all = opts.all.concat(opts.exact);
            }
        }
    }
    // Handle the other props
    if (opts.any) {
        result.q = serializeStringOrArray("OR", key, opts.any);
    }
    if (opts.all) {
        result.q =
            (result.q ? result.q + " AND " : "") +
                serializeStringOrArray("AND", key, opts.all);
    }
    if (opts.not) {
        // negate the entries if they are not
        result.q =
            (result.q ? result.q + " AND " : "") +
                serializeStringOrArray("OR", `-${key}`, opts.not);
    }
    return result;
}
/**
 * @private
 * Serialize a DateRange<number> into a Portal Query string
 * @param key
 * @param range
 * @returns
 */
export function serializeDateRange(key, range) {
    return {
        q: `${key}:[${range.from} TO ${range.to}]`,
        filter: "",
    };
}
/**
 * @private
 * Serialize a `string` or `string[]` into a string
 * @param join
 * @param key
 * @param value
 * @returns
 */
export function serializeStringOrArray(join, key, value) {
    let q = "";
    if (Array.isArray(value)) {
        q = `${key}:"${value.join(`" ${join} ${key}:"`)}"`;
        if (value.length > 1) {
            q = `(${q})`;
        }
    }
    else {
        q = `${key}:"${value}"`;
    }
    return q;
}
/**
 * Create a `.next()` function for a type
 * @param request
 * @param nextStart
 * @param total
 * @param fn
 * @returns
 */
export function getNextFunction(request, nextStart, total, fn) {
    const clonedRequest = cloneObject(request);
    // clone will not handle authentication so we do it manually
    if (request.authentication) {
        clonedRequest.authentication = UserSession.deserialize(request.authentication.serialize());
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
export function getGroupThumbnailUrl(portalUrl, group, token) {
    let thumbnailUrl = null;
    if (group.thumbnail) {
        thumbnailUrl = `${portalUrl}/community/groups/${group.id}/info/${group.thumbnail}`;
        if (token && group.access !== "public") {
            thumbnailUrl = `${thumbnailUrl}?token=${token}`;
        }
    }
    return thumbnailUrl;
}
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
export function getUserThumbnailUrl(portalUrl, user, token) {
    let thumbnailUrl = null;
    if (user.thumbnail) {
        thumbnailUrl = `${portalUrl}/community/users/${user.username}/info/${user.thumbnail}`;
        if (token && user.access !== "public") {
            thumbnailUrl = `${thumbnailUrl}?token=${token}`;
        }
    }
    return thumbnailUrl;
}
//# sourceMappingURL=utils.js.map