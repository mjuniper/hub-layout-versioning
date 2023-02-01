import { IUser, IPortal } from "@esri/arcgis-rest-portal";
import { IEnrichmentErrorInfo, IHubRequestOptions } from "../../types";
/**
 * Possible additional properties available through enrichments
 */
export interface IUserEnrichments {
    org?: IPortal;
    /**
     * Any errors encountered when fetching enrichments
     * see https://github.com/ArcGIS/hub-indexer/blob/master/docs/errors.md#response-formatting-for-errors
     */
    errors?: IEnrichmentErrorInfo[];
}
export declare type UserEnrichment = keyof IUserEnrichments;
/**
 * Merging of the Enrichment and the User
 */
export interface IUserAndEnrichments extends IUserEnrichments {
    user: IUser;
}
/**
 * Fetch enrichments for Users
 * @param group
 * @param enrichments
 * @param requestOptions
 * @returns
 */
export declare function fetchUserEnrichments(user: IUser, enrichments: UserEnrichment[], requestOptions?: IHubRequestOptions): Promise<IUserAndEnrichments>;
