import { PROJECT_STATUSES } from "../core";
export const HUB_PROJECT_ITEM_TYPE = "Hub Project";
/**
 * Default values of a IHubProject
 */
export const DEFAULT_PROJECT = {
    name: "No title provided",
    tags: [],
    typeKeywords: ["Hub Project"],
    status: PROJECT_STATUSES.notStarted,
    catalog: { schemaVersion: 0 },
    permissions: [],
    schemaVersion: 1,
};
/**
 * Default values for a new HubProject Model
 */
export const DEFAULT_PROJECT_MODEL = {
    item: {
        type: HUB_PROJECT_ITEM_TYPE,
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
        status: PROJECT_STATUSES.notStarted,
        contacts: [],
        view: {
            showMap: true,
        },
        permissions: [],
    },
};
//# sourceMappingURL=defaults.js.map