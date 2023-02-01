/**
 * Given a HubEntity, return it's HubEntityType
 * @param entity
 * @returns
 */
export function getTypeFromEntity(entity) {
    let type;
    switch (entity.type) {
        case "Hub Site Application":
        case "Site Application":
            type = "site";
            break;
        case "Hub Page":
        case "Site Page":
            type = "page";
            break;
        case "Hub Project":
            type = "project";
            break;
        case "Hub Initiative":
            type = "initiative";
            break;
    }
    return type;
}
//# sourceMappingURL=getTypeFromEntity.js.map