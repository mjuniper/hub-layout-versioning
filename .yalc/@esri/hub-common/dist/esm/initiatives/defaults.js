export const HUB_INITIATIVE_ITEM_TYPE = "Hub Initiative";
/**
 * Default values of a IHubInitiative
 */
export const DEFAULT_INITIATIVE = {
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
export const DEFAULT_INITIATIVE_MODEL = {
    item: {
        type: HUB_INITIATIVE_ITEM_TYPE,
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