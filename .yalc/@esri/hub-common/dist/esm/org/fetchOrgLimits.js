import { request } from "@esri/arcgis-rest-request";
/**
 * Generic function to fetch org limits
 * @param orgId
 * @param limitsType
 * @param limitName
 * @param options
 * @returns
 */
export function fetchOrgLimits(orgId, limitsType, limitName, options) {
    const portal = options.authentication.portal;
    const url = `${portal}/portals/${orgId}/limits?limitsType=${limitsType}&limitName=${limitName}&f=json`;
    return request(url, options);
}
/**
 * Fetch the maximum number of groups a user can create in an org
 * @param orgId
 * @param options
 * @returns
 */
export function fetchMaxNumUserGroupsLimit(orgId, options) {
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
//# sourceMappingURL=fetchOrgLimits.js.map