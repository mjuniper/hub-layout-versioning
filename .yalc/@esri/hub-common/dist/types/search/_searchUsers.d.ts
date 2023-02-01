import { IUser, UserSession } from "@esri/arcgis-rest-auth";
import { Filter, IHubSearchOptions, ISearchResponse } from "..";
/**
 * Extends IHubSearchOptions to make auth mandatory
 */
export interface IAuthenticatedHubSearchOptions extends IHubSearchOptions {
    authentication: UserSession;
}
/**
 * Extends `IUser` with url optional props for the user's
 * profile and thumbnail
 */
export interface IHubUser extends IUser {
    profileUrl?: string;
    thumbnailUrl?: string;
}
/**
 * @private
 * Search for Users via the Portal API.
 *
 * **Note** Authentication is required
 *
 * Another trivial comment to force a release
 *
 * Note: in the future, there may be options to search via
 * a Hub specific API
 * @param filter
 * @param options
 * @returns
 */
export declare function _searchUsers(filter: Filter<"user">, options: IAuthenticatedHubSearchOptions): Promise<ISearchResponse<IHubUser>>;
