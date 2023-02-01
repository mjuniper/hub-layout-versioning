import { EntityType, IHubCatalog } from "./IHubCatalog";
/**
 * Sort Option to be displayed in a UI
 */
export interface ISortOption {
    label: string;
    attribute: string;
    defaultOrder: string;
    order: string;
}
/**
 * Defines a span of time by specifying a `from` and `to` Date
 * as either a number or a ISO string
 */
export interface IDateRange<T> {
    type?: "date-range";
    from: T;
    to: T;
}
/**
 * Relative Date will be convertd to a `IDateRange` at run-time
 */
export interface IRelativeDate {
    type: "relative-date";
    num: number;
    unit: "minutes" | "hours" | "days" | "weeks" | "months" | "years";
}
/**
 * Define how values should be matched
 */
export interface IMatchOptions {
    /**
     * return results which have ANY of the listed values
     * for the specified field
     */
    any?: string | string[];
    /**
     * return resutls which have ALL of the listed values
     * for the specified field
     */
    all?: string | string[];
    /**
     * return results which do not have any of the listed
     * values for the specified field
     */
    not?: string | string[];
    /**
     * Depending on the API being searched, `exact` will
     * attempt to structure the query such that it is an
     * exact match. For Portal API, this may involve using
     * the `filter` parameter, if the specific field can
     * be used with that parameter
     */
    exact?: string | string[];
}
export interface IWellKnownApis {
    arcgis: IApiDefinition;
    arcgisQA: IApiDefinition;
    arcgisDEV: IApiDefinition;
    hub: IApiDefinition;
    hubQA: IApiDefinition;
    hubDEV: IApiDefinition;
}
export declare type NamedApis = keyof IWellKnownApis;
export interface IApiDefinition {
    label?: string;
    url: string;
    type: "arcgis" | "arcgis-hub";
}
/**
 * Base options when checking catalog containment
 */
export interface IContainsOptions {
    /**
     * Entity type of the identifier
     * Specifing this will allow us to skip a lookup
     */
    entityType?: EntityType;
}
/**
 * Basic information about a catalog
 */
export interface ICatalogInfo extends Partial<IDeepCatalogInfo> {
}
/**
 * Cacheable information about a catalog
 */
export interface IDeepCatalogInfo {
    id: string;
    entityType: EntityType;
    catalog?: IHubCatalog;
}
/**
 * When checking containment, we want to be able to cache the response
 * so we return enough information to do that
 */
export interface IContainsResponse {
    identifier: string;
    isContained: boolean;
    /**
     * Cacheable information about the catalogs
     */
    catalogInfo?: Record<string, ICatalogInfo>;
    /**
     * How long did it take to check containment?
     */
    duration?: number;
}
