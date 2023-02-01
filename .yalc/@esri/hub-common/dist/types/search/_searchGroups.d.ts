import { IGroup } from "@esri/arcgis-rest-portal";
import { Filter, IHubSearchOptions, IFacet } from "./types";
import { ISearchResponse } from "..";
export interface IGroupSearchResult {
    groups: IGroup[];
    facets: IFacet[];
}
/**
 * @private
 * Search Groups using Filter<"group">
 *
 * Currently just returns ISearchResult<IGroup>
 * @param filter
 * @param options
 * @returns
 */
export declare function _searchGroups(filter: Filter<"group">, options: IHubSearchOptions): Promise<ISearchResponse<IGroup>>;
