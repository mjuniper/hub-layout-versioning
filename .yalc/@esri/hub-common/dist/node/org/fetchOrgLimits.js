"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchMaxNumUserGroupsLimit = exports.fetchOrgLimits = void 0;
const arcgis_rest_request_1 = require("@esri/arcgis-rest-request");
/**
 * Generic function to fetch org limits
 * @param orgId
 * @param limitsType
 * @param limitName
 * @param options
 * @returns
 */
function fetchOrgLimits(orgId, limitsType, limitName, options) {
    const portal = options.authentication.portal;
    const url = `${portal}/portals/${orgId}/limits?limitsType=${limitsType}&limitName=${limitName}&f=json`;
    return arcgis_rest_request_1.request(url, options);
}
exports.fetchOrgLimits = fetchOrgLimits;
/**
 * Fetch the maximum number of groups a user can create in an org
 * @param orgId
 * @param options
 * @returns
 */
function fetchMaxNumUserGroupsLimit(orgId, options) {
    return fetchOrgLimits(orgId, "Groups", "MaxNumUserGroups", options)
        .then((response) => {
        return response.limitValue;
    })
        .catch((_) => {
        // it's possible that the org doesn't have this property set, and
        // the api will return a 500 error. So we just return the default value
        return 512;
    });
}
exports.fetchMaxNumUserGroupsLimit = fetchMaxNumUserGroupsLimit;
//# sourceMappingURL=fetchOrgLimits.js.map