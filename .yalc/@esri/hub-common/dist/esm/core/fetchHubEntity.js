import { fetchInitiative } from "../initiatives";
import { fetchProject } from "../projects";
import { fetchSite } from "../sites";
/**
 * Fetch a Hub entity by identifier (id or slug)
 * @param type
 * @param identifier
 * @param context
 * @returns
 */
export async function fetchHubEntity(type, identifier, context) {
    let result;
    switch (type) {
        case "project":
            result = await fetchProject(identifier, context.requestOptions);
            break;
        case "site":
            result = await fetchSite(identifier, context.hubRequestOptions);
            break;
        case "initiative":
            result = await fetchInitiative(identifier, context.requestOptions);
            break;
        case "page":
            throw new Error(`FetchPage not implemented`);
    }
    return result;
}
//# sourceMappingURL=fetchHubEntity.js.map