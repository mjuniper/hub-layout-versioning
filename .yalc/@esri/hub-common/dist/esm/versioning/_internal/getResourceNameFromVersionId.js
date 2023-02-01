import { getPrefix } from "./getPrefix";
import { VERSION_RESOURCE_NAME } from "./constants";
// gets the resource name from the version name
export function getResourceNameFromVersionId(versionId) {
    return getPrefix(`${versionId}/${VERSION_RESOURCE_NAME}`);
}
//# sourceMappingURL=getResourceNameFromVersionId.js.map