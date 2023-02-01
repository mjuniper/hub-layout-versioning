export const HUB_SITE_ITEM_TYPE = "Hub Site Application";
/**
 * Default values of a IHubSite
 */
export const DEFAULT_SITE = {
    name: "No title provided",
    tags: [],
    typeKeywords: ["Hub Site", "hubSite"],
    catalog: { schemaVersion: 0 },
    permissions: [],
    schemaVersion: 1,
};
/**
 * Default values for a new HubProject Model
 */
export const DEFAULT_SITE_MODEL = {
    item: {
        type: HUB_SITE_ITEM_TYPE,
        title: "No Title Provided",
        description: "",
        snippet: "",
        tags: [],
        typeKeywords: ["Hub Site", "hubSite"],
        properties: {
            slug: "",
            schemaVersion: 1,
        },
    },
    data: {
        layout: {},
    },
};
//# sourceMappingURL=defaults.js.map