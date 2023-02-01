import { IWithSlug, IWithPermissions, IWithCatalog } from "../traits";
import { IHubItemEntity } from "./IHubItemEntity";
/**
 * DRAFT: Under development and more properties will likely be added
 * @internal
 */
export interface IHubInitiative extends IHubItemEntity, IWithSlug, IWithCatalog, IWithPermissions {
}
