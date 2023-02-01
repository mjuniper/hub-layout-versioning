import { cloneObject, mergeObjects } from "../index";
import { isSiteType } from "../content";
import { isPageType } from "../content/_internal";
// applies the version to the model
export function applyVersion(model, version, includeList) {
    return mergeObjects(version.data, cloneObject(model), includeList);
}
export function getIncludeListFromItemType(model) {
    const defaultIncludeList = [
        'data.values.layout',
        'data.values.theme',
        'data.values.headContent'
    ];
    let includeList;
    if (isSiteType(model.item.type, model.item.typeKeywords)) {
        includeList = defaultIncludeList;
    }
    else if (isPageType(model.item.type, model.item.typeKeywords)) {
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
//# sourceMappingURL=utils.js.map