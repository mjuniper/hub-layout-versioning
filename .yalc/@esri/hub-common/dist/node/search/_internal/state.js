"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFacetState = exports.serializeSortState = exports.serializeMultiSelectFacetState = exports.applyMultiSelectFacetState = exports.serializeSingleSelectFacetState = exports.applySingleSelectFacetState = exports.applyFacetState = exports.applySortState = void 0;
const util_1 = require("../../util");
/**
 * @private
 * Apply the sortState to SortOptions
 *
 * @param sortOptions
 * @param sortState
 * @returns
 */
function applySortState(sortOptions, sortState) {
    const updated = util_1.cloneObject(sortOptions);
    if (sortState) {
        const [label, attribute, order] = sortState.split("|");
        updated.label = label;
        updated.attribute = attribute;
        updated.order = order;
    }
    return updated;
}
exports.applySortState = applySortState;
/**
 * @private
 * Apply FacetState to a Facet
 * @param facet
 * @param state
 * @returns
 */
function applyFacetState(facet, state) {
    let updated = util_1.cloneObject(facet);
    switch (facet.display) {
        case "single-select":
            updated = applySingleSelectFacetState(facet, state);
            break;
        case "multi-select":
            updated = applyMultiSelectFacetState(facet, state);
            break;
        case "date-range":
            break;
        case "histogram":
            break;
        default:
            // no default behavior
            break;
    }
    return updated;
}
exports.applyFacetState = applyFacetState;
/**
 * @private
 * Apply the Facet State onto a single-select facet
 *
 * Intentionally mutates the facet.
 * @param facet
 * @param state
 * @returns
 */
function applySingleSelectFacetState(facet, state) {
    const updated = util_1.cloneObject(facet);
    updated.options = updated.options.map((o) => {
        o.selected = o.key === state[facet.key];
        return o;
    });
    return updated;
}
exports.applySingleSelectFacetState = applySingleSelectFacetState;
/**
 * @private
 * Serialize single-select facet into IFacetState
 * @param facet
 * @returns
 */
function serializeSingleSelectFacetState(facet) {
    const state = {};
    const selected = facet.options.find((o) => o.selected);
    if (selected) {
        state[facet.key] = selected.key;
    }
    else {
        state[facet.key] = null;
    }
    return state;
}
exports.serializeSingleSelectFacetState = serializeSingleSelectFacetState;
/**
 * @private
 * Apply the Facet State onto a multi-select Facet
 *
 * Intentionally mutates the facet.
 * @param facet
 * @param state
 * @returns
 */
function applyMultiSelectFacetState(facet, state) {
    var _a;
    const updated = util_1.cloneObject(facet);
    const selectedKeys = ((_a = state[facet.key]) === null || _a === void 0 ? void 0 : _a.split(",")) || [];
    updated.options = updated.options.map((o) => {
        o.selected = selectedKeys.includes(o.key);
        return o;
    });
    return updated;
}
exports.applyMultiSelectFacetState = applyMultiSelectFacetState;
/**
 * @private
 * Serialize multi-select facet into IFacetState
 * @param facet
 * @returns
 */
function serializeMultiSelectFacetState(facet) {
    const state = {};
    const selected = facet.options.filter((o) => o.selected);
    const value = selected.map((o) => o.key).join(",");
    if (value.length) {
        state[facet.key] = value;
    }
    else {
        state[facet.key] = null;
    }
    return state;
}
exports.serializeMultiSelectFacetState = serializeMultiSelectFacetState;
/**
 * @private
 * Serialize the state of the SortOption into a key/value pair
 *
 * Called from the Sort component
 * @param sort
 * @returns
 */
function serializeSortState(sort) {
    return `${sort.label}|${sort.attribute}|${sort.order}`;
}
exports.serializeSortState = serializeSortState;
/**
 * @private
 * Serialize the state of a facet into a key/value pair
 *
 * Called from the various facet components
 * @param facet
 * @returns
 */
function serializeFacetState(facet) {
    let state = {};
    switch (facet.display) {
        case "single-select":
            state = serializeSingleSelectFacetState(facet);
            break;
        case "multi-select":
            state = serializeMultiSelectFacetState(facet);
            break;
        case "date-range":
            break;
        case "histogram":
            break;
        default:
            // no default behavior
            break;
    }
    return state;
}
exports.serializeFacetState = serializeFacetState;
//# sourceMappingURL=state.js.map