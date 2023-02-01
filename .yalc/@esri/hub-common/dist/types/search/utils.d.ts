import { IUser, UserSession } from "@esri/arcgis-rest-auth";
import { IGroup, ISearchOptions } from "@esri/arcgis-rest-portal";
import { ISearchResponse } from "../types";
import { IMatchOptions, IDateRange, IRelativeDate, IWellKnownApis, IApiDefinition, NamedApis } from "./types/types";
/**
 * Well known APIs
 * Short-forms for specifying common APIs
 * We will likely deprecate this
 */
export declare const SEARCH_APIS: IWellKnownApis;
/**
 * @private
 * Convert array of api "names" into full ApiDefinitions
 * @param apis
 * @returns
 */
export declare function expandApis(apis: Array<NamedApis | IApiDefinition>): IApiDefinition[];
/**
 * @private
 * Convert an api "name" into a full ApiDefinition
 * @param api
 * @returns
 */
export declare function expandApi(api: NamedApis | IApiDefinition): IApiDefinition;
/**
 * @private
 * Convert a field value into a MatchOptions if it's not already one
 * @param value
 * @returns
 */
export declare function valueToMatchOptions(value: string | string[] | IMatchOptions): IMatchOptions;
/**
 * @private
 * Convert a RelativeDate to a DateRange<number>
 * @param relative
 * @returns
 */
export declare function relativeDateToDateRange(relative: IRelativeDate): IDateRange<number>;
/**
 * Create a `.next()` function for a type
 * @param request
 * @param nextStart
 * @param total
 * @param fn
 * @returns
 */
export declare function getNextFunction<T>(request: ISearchOptions, nextStart: number, total: number, fn: (r: any) => Promise<ISearchResponse<T>>): (authentication?: UserSession) => Promise<ISearchResponse<T>>;
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
export declare function getGroupThumbnailUrl(portalUrl: string, group: IGroup, token?: string): string;
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
export declare function getUserThumbnailUrl(portalUrl: string, user: IUser, token?: string): string;
