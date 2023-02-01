"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchHubEntity = void 0;
const initiatives_1 = require("../initiatives");
const projects_1 = require("../projects");
const sites_1 = require("../sites");
/**
 * Fetch a Hub entity by identifier (id or slug)
 * @param type
 * @param identifier
 * @param context
 * @returns
 */
async function fetchHubEntity(type, identifier, context) {
    let result;
    switch (type) {
        case "project":
            result = await projects_1.fetchProject(identifier, context.requestOptions);
            break;
        case "site":
            result = await sites_1.fetchSite(identifier, context.hubRequestOptions);
            break;
        case "initiative":
            result = await initiatives_1.fetchInitiative(identifier, context.requestOptions);
            break;
        case "page":
            throw new Error(`FetchPage not implemented`);
    }
    return result;
}
exports.fetchHubEntity = fetchHubEntity;
//# sourceMappingURL=fetchHubEntity.js.map