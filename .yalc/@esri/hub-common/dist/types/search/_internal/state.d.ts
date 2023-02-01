import { IFacet, IFacetState, ISortOption } from "../types";
/**
 * @private
 * Apply the sortState to SortOptions
 *
 * @param sortOptions
 * @param sortState
 * @returns
 */
export declare function applySortState(sortOptions: ISortOption, sortState: string): ISortOption;
/**
 * @private
 * Apply FacetState to a Facet
 * @param facet
 * @param state
 * @returns
 */
export declare function applyFacetState(facet: IFacet, state: IFacetState): IFacet;
/**
 * @private
 * Apply the Facet State onto a single-select facet
 *
 * Intentionally mutates the facet.
 * @param facet
 * @param state
 * @returns
 */
export declare function applySingleSelectFacetState(facet: IFacet, state: IFacetState): IFacet;
/**
 * @private
 * Serialize single-select facet into IFacetState
 * @param facet
 * @returns
 */
export declare function serializeSingleSelectFacetState(facet: IFacet): IFacetState;
/**
 * @private
 * Apply the Facet State onto a multi-select Facet
 *
 * Intentionally mutates the facet.
 * @param facet
 * @param state
 * @returns
 */
export declare function applyMultiSelectFacetState(facet: IFacet, state: IFacetState): IFacet;
/**
 * @private
 * Serialize multi-select facet into IFacetState
 * @param facet
 * @returns
 */
export declare function serializeMultiSelectFacetState(facet: IFacet): IFacetState;
/**
 * @private
 * Serialize the state of the SortOption into a key/value pair
 *
 * Called from the Sort component
 * @param sort
 * @returns
 */
export declare function serializeSortState(sort: ISortOption): string;
/**
 * @private
 * Serialize the state of a facet into a key/value pair
 *
 * Called from the various facet components
 * @param facet
 * @returns
 */
export declare function serializeFacetState(facet: IFacet): IFacetState;
