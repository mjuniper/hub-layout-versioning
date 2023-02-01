"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PROJECT_MODEL = exports.DEFAULT_PROJECT = exports.HUB_PROJECT_ITEM_TYPE = void 0;
const core_1 = require("../core");
exports.HUB_PROJECT_ITEM_TYPE = "Hub Project";
/**
 * Default values of a IHubProject
 */
exports.DEFAULT_PROJECT = {
    name: "No title provided",
    tags: [],
    typeKeywords: ["Hub Project"],
    status: core_1.PROJECT_STATUSES.notStarted,
    catalog: { schemaVersion: 0 },
    permissions: [],
    schemaVersion: 1,
};
/**
 * Default values for a new HubProject Model
 */
exports.DEFAULT_PROJECT_MODEL = {
    item: {
        type: exports.HUB_PROJECT_ITEM_TYPE,
        title: "No Title Provided",
        description: "",
        snippet: "",
        tags: [],
        typeKeywords: ["Hub Project"],
        properties: {
            slug: "",
            schemaVersion: 1,
        },
    },
    data: {
        display: "about",
        timeline: {},
        status: core_1.PROJECT_STATUSES.notStarted,
        contacts: [],
        view: {
            showMap: true,
        },
        permissions: [],
    },
};
//# sourceMappingURL=defaults.js.map