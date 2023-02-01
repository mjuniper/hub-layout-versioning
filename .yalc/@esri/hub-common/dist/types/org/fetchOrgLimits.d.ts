import { IUserRequestOptions } from "@esri/arcgis-rest-auth";
export declare type OrgLimitType = "ScheduleTask" | "Collaboration" | "Community" | "Groups" | "Content";
/**
 * Definiton of the org limits response.
 */
export interface IOrgLimit {
    /**
     * Preset limit types
     */
    type: OrgLimitType;
    /**
     * Not constrained as there are too many to list
     */
    name: string;
    /**
     * value of the limit
     */
    limitValue: number;
}
/**
 * Generic function to fetch org limits
 * @param orgId
 * @param limitsType
 * @param limitName
 * @param options
 * @returns
 */
export declare function fetchOrgLimits(orgId: string, limitsType: OrgLimitType, limitName: string, options: IUserRequestOptions): Promise<IOrgLimit>;
/**
 * Fetch the maximum number of groups a user can create in an org
 * @param orgId
 * @param options
 * @returns
 */
export declare function fetchMaxNumUserGroupsLimit(orgId: string, options: IUserRequestOptions): Promise<number>;
