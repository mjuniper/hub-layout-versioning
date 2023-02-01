"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hubSearch = void 0;
const HubError_1 = require("../HubError");
const objects_1 = require("../objects");
const util_1 = require("../util");
const utils_1 = require("./utils");
const _internal_1 = require("./_internal");
/**
 * Main entrypoint for searching via Hub
 *
 * Default's to search ArcGIS Portal but can delegate
 * to Hub API when it's available.
 * @param query
 * @param options
 * @returns
 */
async function hubSearch(query, options) {
    // Validate inputs
    if (!query) {
        throw new HubError_1.default("hubSearch", "Query is required.");
    }
    if (!query.filters || !query.filters.length) {
        throw new HubError_1.default("hubSearch", "Query must contain at least one Filter.");
    }
    if (!options.requestOptions) {
        throw new HubError_1.default("hubSearch", "requestOptions: IHubRequestOptions is required.");
    }
    // Ensure includes is an array
    if (!options.include) {
        options.include = [];
    }
    // Get the type of the first filterGroup
    const filterType = query.targetEntity;
    // get the API
    const apiType = utils_1.expandApi(options.api || "arcgis").type;
    const fnHash = {
        arcgis: {
            item: _internal_1.portalSearchItems,
            group: _internal_1.portalSearchGroups,
            user: _internal_1.portalSearchUsers,
        },
        "arcgis-hub": {
            item: _internal_1.hubSearchItems,
        },
    };
    const fn = objects_1.getProp(fnHash, `${apiType}.${filterType}`);
    if (!fn) {
        throw new HubError_1.default(`hubSearch`, `Search via "${filterType}" filter against "${apiType}" api is not implemented. Please ensure "targetEntity" is defined on the query.`);
    }
    return fn(util_1.cloneObject(query), options);
}
exports.hubSearch = hubSearch;
//# sourceMappingURL=hubSearch.js.map