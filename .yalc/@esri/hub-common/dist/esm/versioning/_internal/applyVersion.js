import { cloneObject, mergeObjects } from "../../index";
// applies the version to the model
export function applyVersion(model, version, includeList) {
    return mergeObjects(version.data, cloneObject(model), includeList);
}
//# sourceMappingURL=applyVersion.js.map