"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyVersion = void 0;
const index_1 = require("../../index");
// applies the version to the model
function applyVersion(model, version, includeList) {
    return index_1.mergeObjects(version.data, index_1.cloneObject(model), includeList);
}
exports.applyVersion = applyVersion;
//# sourceMappingURL=applyVersion.js.map