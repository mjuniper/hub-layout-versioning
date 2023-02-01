"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncludeListFromItemType = exports.applyVersion = void 0;
const index_1 = require("../index");
const content_1 = require("../content");
const _internal_1 = require("../content/_internal");
// applies the version to the model
function applyVersion(model, version, includeList) {
    return index_1.mergeObjects(version.data, index_1.cloneObject(model), includeList);
}
exports.applyVersion = applyVersion;
function getIncludeListFromItemType(model) {
    const defaultIncludeList = [
        'data.values.layout',
        'data.values.theme',
        'data.values.headContent'
    ];
    let includeList;
    if (content_1.isSiteType(model.item.type, model.item.typeKeywords)) {
        includeList = defaultIncludeList;
    }
    else if (_internal_1.isPageType(model.item.type, model.item.typeKeywords)) {
        includeList = [
            'data.values.layout',
            'data.values.headContent'
        ];
    }
    else {
        throw TypeError("item type does not support versioning");
    }
    return includeList;
}
exports.getIncludeListFromItemType = getIncludeListFromItemType;
//# sourceMappingURL=utils.js.map