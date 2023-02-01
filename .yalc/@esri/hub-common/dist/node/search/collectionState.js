"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCollectionState = exports.applyCollectionState = void 0;
const util_1 = require("../util");
const state_1 = require("./_internal/state");
/**
 * Apply ICollectionState to an ICollection
 *
 * Typically used in a Gallery or Catalog component to
 * set the inital state, based on values deserialized
 * from a query string
 * @param collection
 * @param state
 * @returns
 */
function applyCollectionState(collection, state) {
    const updated = util_1.cloneObject(collection);
    // Apply default query
    if (state.query) {
        updated.defaultQuery = state.query;
    }
    // Apply Sort State
    updated.sortOption = state_1.applySortState(updated.sortOption, state.sort);
    // Look for state props for the facets and apply them
    updated.facets = updated.facets.map((facet) => {
        // see if there is a key for this facet on the state
        if (Object.keys(state).includes(facet.key)) {
            const facetState = {};
            facetState[facet.key] = state[facet.key];
            return state_1.applyFacetState(facet, facetState);
        }
        else {
            // Ensure all options are not selected
            // because they were not included in the state
            facet.options.forEach((opt) => {
                opt.selected = false;
            });
            return facet;
        }
    });
    //
    return updated;
}
exports.applyCollectionState = applyCollectionState;
/**
 * Serialize the current state of a collection into a hash that
 * can be converted into a query string
 * @param collection
 * @returns
 */
function serializeCollectionState(collection) {
    const state = {};
    if (collection.defaultQuery) {
        state.query = collection.defaultQuery;
    }
    if (collection.sortOption) {
        state.sort = state_1.serializeSortState(collection.sortOption);
    }
    const facetState = (collection.facets || []).reduce((s, facet) => {
        return Object.assign(Object.assign({}, s), state_1.serializeFacetState(facet));
    }, {});
    return Object.assign(Object.assign({}, state), facetState);
}
exports.serializeCollectionState = serializeCollectionState;
//# sourceMappingURL=collectionState.js.map