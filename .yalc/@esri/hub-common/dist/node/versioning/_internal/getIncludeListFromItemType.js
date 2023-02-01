"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncludeListFromItemType = void 0;
const content_1 = require("../../content");
const _internal_1 = require("../../content/_internal");
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
//# sourceMappingURL=getIncludeListFromItemType.js.map