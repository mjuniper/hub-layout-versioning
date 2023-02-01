import { IGroup } from "@esri/arcgis-rest-portal";
import { IEnrichmentErrorInfo, IHubRequestOptions } from "../../types";
import { IGroupMembershipSummary } from "../types";
/**
 * Possible additional properties available through enrichments
 */
export interface IGroupEnrichments {
    contentCount?: number;
    membershipSummary?: IGroupMembershipSummary;
    /**
     * Any errors encountered when fetching enrichments
     * see https://github.com/ArcGIS/hub-indexer/blob/master/docs/errors.md#response-formatting-for-errors
     */
    errors?: IEnrichmentErrorInfo[];
}
export declare type GroupEnrichment = keyof IGroupEnrichments;
/**
 * Merging of the Enrichment and the Group
 */
export interface IGroupAndEnrichments extends IGroupEnrichments {
    group: IGroup;
}
/**
 * Fetch enrichments for Groups
 * @param group
 * @param enrichments
 * @param requestOptions
 * @returns
 */
export declare function fetchGroupEnrichments(group: IGroup, enrichments: GroupEnrichment[], requestOptions?: IHubRequestOptions): Promise<IGroupAndEnrichments>;
