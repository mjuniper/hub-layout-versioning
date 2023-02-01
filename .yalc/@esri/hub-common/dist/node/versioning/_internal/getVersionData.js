"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVersionData = void 0;
const objects_1 = require("../../objects");
// gets the version data (ie the part of the model that goes into the version data) from the model
function getVersionData(model, includeList) {
    return objects_1.mergeObjects(model, {}, includeList);
}
exports.getVersionData = getVersionData;
//# sourceMappingURL=getVersionData.js.map