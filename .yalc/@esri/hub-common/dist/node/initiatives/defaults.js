"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_INITIATIVE_MODEL = exports.DEFAULT_INITIATIVE = exports.HUB_INITIATIVE_ITEM_TYPE = void 0;
exports.HUB_INITIATIVE_ITEM_TYPE = "Hub Initiative";
/**
 * Default values of a IHubInitiative
 */
exports.DEFAULT_INITIATIVE = {
    name: "No title provided",
    tags: [],
    typeKeywords: ["Hub Initiative"],
    catalog: { schemaVersion: 0 },
    permissions: [],
    schemaVersion: 3,
};
/**
 * Default values for a new HubInitiative Model
 */
exports.DEFAULT_INITIATIVE_MODEL = {
    item: {
        type: exports.HUB_INITIATIVE_ITEM_TYPE,
        title: "No Title Provided",
        description: "No Description Provided",
        snippet: "",
        tags: [],
        typeKeywords: ["Hub Initiative"],
        properties: {
            slug: "",
            schemaVersion: 3,
        },
    },
    data: {},
};
//# sourceMappingURL=defaults.js.map