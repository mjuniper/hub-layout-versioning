"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResourceNameFromVersionId = void 0;
const getPrefix_1 = require("./getPrefix");
const constants_1 = require("./constants");
// gets the resource name from the version name
function getResourceNameFromVersionId(versionId) {
    return getPrefix_1.getPrefix(`${versionId}/${constants_1.VERSION_RESOURCE_NAME}`);
}
exports.getResourceNameFromVersionId = getResourceNameFromVersionId;
//# sourceMappingURL=getResourceNameFromVersionId.js.map