import { mergeObjects } from "../../objects";
// gets the version data (ie the part of the model that goes into the version data) from the model
export function getVersionData(model, includeList) {
    return mergeObjects(model, {}, includeList);
}
//# sourceMappingURL=getVersionData.js.map