"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeQueryForPortal = void 0;
const expandPredicate_1 = require("./_internal/expandPredicate");
/**
 * Serialize IQuery into ISearchOptions for ArcGIS Portal
 * @param query
 * @returns
 */
function serializeQueryForPortal(query) {
    const filterSearchOptions = query.filters.map(serializeFilter);
    // remove any empty entries
    const nonEmptyOptions = filterSearchOptions.filter(removeEmptyEntries);
    const result = mergeSearchOptions(nonEmptyOptions, "AND");
    return result;
}
exports.serializeQueryForPortal = serializeQueryForPortal;
/**
 * Predicate to remove things from array
 * @param e
 * @returns
 */
function removeEmptyEntries(e) {
    return !(typeof e === "undefined" || e === null || e === "");
}
function mergeSearchOptions(options, operation) {
    const result = options.reduce((acc, entry) => {
        // walk the props
        Object.entries(entry).forEach(([key, value]) => {
            // if prop exists and is not empty string
            if (acc[key] && value !== "") {
                // combine via operation
                acc[key] = `${acc[key]} ${operation} ${value}`;
            }
            else {
                // just copy the value if it's not empty string
                if (value !== "") {
                    acc[key] = value;
                }
            }
        });
        return acc;
    }, { q: "" });
    return result;
}
/**
 * Serialize the filters in a FitlerGroup into a Portal Query
 * @param filter
 * @returns
 */
function serializeFilter(filter) {
    const operation = filter.operation || "AND";
    const predicates = filter.predicates.map(expandPredicate_1.expandPredicate);
    const predicateSearchOptions = predicates
        .map(serializePredicate)
        .filter((e) => e !== undefined && e !== null);
    // combine these searchOptions
    const searchOptions = mergeSearchOptions(predicateSearchOptions, operation);
    // wrap in parens if we have more than one predicate
    if (predicates.length > 1) {
        searchOptions.q = `(${searchOptions.q})`;
    }
    return searchOptions;
}
/**
 * Serialize a Filter into a Portal Query
 * @param predicate
 * @returns
 */
function serializePredicate(predicate) {
    const dateProps = ["created", "modified"];
    const boolProps = ["isopendata"];
    const passThroughProps = [
        "searchUserAccess",
        "searchUserName",
        "categoriesAsParam",
        "categoryFilter",
    ];
    const specialProps = [
        "filterType",
        "term",
        ...dateProps,
        ...boolProps,
        ...passThroughProps,
    ];
    const portalAllowList = [
        "access",
        "capabilities",
        "created",
        "categories",
        "categoriesAsParam",
        "categoryFilter",
        "description",
        "disabled",
        "email",
        "emailstatus",
        "firstname",
        "fullname",
        "group",
        "id",
        "isInvitationOnly",
        "isopendata",
        "joined",
        "lastlogin",
        "lastname",
        "memberType",
        "modified",
        "name",
        "orgid",
        "orgIds",
        "owner",
        "provider",
        "role",
        "searchUserAccess",
        "searchUserName",
        "snippet",
        "tags",
        "term",
        "title",
        "type",
        "typekeywords",
        "userlicensetype",
        "username",
    ];
    // TODO: Look at using reduce vs .map and remove the `.filter`
    const opts = Object.entries(predicate)
        .map(([key, value]) => {
        // When serializing for portal we limit predicate properties to
        // a list of known properties that the portal api accepts. This will
        // not attempt to ensure the properties are used in the correct combinations
        if (portalAllowList.includes(key)) {
            const so = { q: "" };
            if (!specialProps.includes(key) && key !== "term") {
                so.q = serializeMatchOptions(key, value);
            }
            if (dateProps.includes(key)) {
                so.q = serializeDateRange(key, value);
            }
            if (boolProps.includes(key)) {
                so.q = `${key}:${value}`;
            }
            if (passThroughProps.includes(key)) {
                so[key] = value;
            }
            if (key === "term") {
                so.q = value;
            }
            return so;
        }
    })
        .filter(removeEmptyEntries);
    // merge up all the searchOptions
    if (opts.length) {
        const searchOptions = mergeSearchOptions(opts, "AND");
        if (searchOptions.q) {
            searchOptions.q = `(${searchOptions.q})`;
        }
        return searchOptions;
    }
    else {
        return null;
    }
}
/**
 * Serialize MatchOptions into portal syntax
 * @param key
 * @param value
 * @returns
 */
function serializeMatchOptions(key, value) {
    let result = "";
    if (value.any) {
        result = `${serializeStringOrArray("OR", key, value.any)}`;
    }
    if (value.all) {
        result =
            (result ? result + " AND " : "") +
                `${serializeStringOrArray("AND", key, value.all)}`;
    }
    if (value.not) {
        // negate the entries if they are not
        result =
            (result ? result + " AND " : "") +
                `${serializeStringOrArray("OR", `-${key}`, value.not)}`;
    }
    return result;
}
/**
 * Serialize a date-range into Portal syntax
 * @param key
 * @param range
 * @returns
 */
function serializeDateRange(key, range) {
    return `${key}:[${range.from} TO ${range.to}]`;
}
/**
 * Serialize a `string` or `string[]` into a string
 * @param join
 * @param key
 * @param value
 * @returns
 */
function serializeStringOrArray(join, key, value) {
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
//# sourceMappingURL=serializeQueryForPortal.js.map