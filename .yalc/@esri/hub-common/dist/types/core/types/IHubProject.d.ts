import { IHubTimeline, IHubItemEntity } from "./index";
import { IWithLayout, IWithPermissions, IWithSlug, IWithCatalog } from "../traits/index";
/**
 * Defines the properties of a Hub Project object
 */
export interface IHubProject extends IHubItemEntity, IWithSlug, IWithCatalog, IWithLayout, IWithPermissions {
    /**
     * Timeline for the project
     */
    timeline?: IHubTimeline;
    /**
     * Project Status
     */
    status: PROJECT_STATUSES;
}
export declare enum PROJECT_STATUSES {
    notStarted = "notStarted",
    inProgress = "inProgress",
    complete = "complete"
}
