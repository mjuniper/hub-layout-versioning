"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPermissionPolicy = exports.HubPermissionsPolicies = void 0;
const InitiativeBusinessRules_1 = require("../initiatives/_internal/InitiativeBusinessRules");
const ProjectBusinessRules_1 = require("../projects/_internal/ProjectBusinessRules");
const SiteBusinessRules_1 = require("../sites/_internal/SiteBusinessRules");
// Examples of possible Permission Policies
// const DiscussionPermissionPolicies: IPermissionPolicy[] = [
//   {
//     permission: "discussions:channel:create",
//     authenticated: true,
//     subsystems: ["discussions"],
//     licenses: ["hub-basic", "hub-premium"],
//   },
//   {
//     permission: "discussions:channel:createprivate",
//     subsystems: ["discussions"],
//     authenticated: true,
//     licenses: ["hub-basic", "hub-premium"],
//     assertions: [
//       {
//         property: "entity:group.typekeywords",
//         assertion: "without",
//         value: "cannotDiscuss",
//       },
//       {
//         property: "context:currentUser",
//         assertion: "is-group-admin",
//         value: "entity:group.id",
//       },
//     ],
//   },
//   {
//     permission: "discussions:channel:create",
//     subsystems: ["discussions"],
//     authenticated: true,
//     licenses: ["hub-basic", "hub-premium"],
//     assertions: [
//       {
//         property: "entity:typeKeywords",
//         assertion: "without",
//         value: "cannotDiscuss",
//       },
//     ],
//   },
//   {
//     permission: "discussions:post:create",
//     subsystems: ["discussions"],
//     authenticated: true,
//     licenses: ["hub-basic", "hub-premium"],
//     assertions: [
//       {
//         property: "entity:typeKeywords",
//         assertion: "without",
//         value: "cannotDiscuss",
//       },
//     ],
//   },
// ];
/**
 * All the permission policies for the Hub
 */
exports.HubPermissionsPolicies = [
    ...SiteBusinessRules_1.SitesPermissionPolicies,
    ...ProjectBusinessRules_1.ProjectPermissionPolicies,
    ...InitiativeBusinessRules_1.InitiativePermissionPolicies,
];
/**
 * Get the policies defined for a specific permission
 * @param permission
 * @returns
 */
function getPermissionPolicy(permission) {
    return exports.HubPermissionsPolicies.find((p) => p.permission === permission);
}
exports.getPermissionPolicy = getPermissionPolicy;
//# sourceMappingURL=HubPermissionPolicies.js.map