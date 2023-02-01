"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDraft = void 0;
const objects_1 = require("../../objects");
/**
 * Builds a draft with a subset of the model properties
 * @param {*} model - item model
 * @param {*} includeList - list of property paths to include in draft object
 */
function buildDraft(model, includeList) {
    return objects_1.mergeObjects(model, {}, includeList);
}
exports.buildDraft = buildDraft;
//# sourceMappingURL=build-draft.js.map