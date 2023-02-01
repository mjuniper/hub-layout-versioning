"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchVersions = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const _internal_1 = require("./_internal");
/**
 * Return an array containing the versions of the item
 * @param id
 * @param requestOptions
 * @returns
 */
async function searchVersions(id, requestOptions) {
    const resources = await arcgis_rest_portal_1.getItemResources(id, Object.assign(Object.assign({}, requestOptions), { params: { sortField: 'created', sortOrder: 'desc' } }));
    // the resources api does not support q - so we fetch all of them and do the filtering here
    return resources.resources
        .filter((resource) => resource.resource.match(/^hubVersion_[a-zA-Z0-9_\s]*\/version.json/))
        .map(_internal_1.versionMetadataFromResource);
}
exports.searchVersions = searchVersions;
// // site specific stuff
// // export async function getSiteByVersion (siteId: string, versionName: string, requestOptions: any) {
// //   // if version not supplied, return site item, if supplied get item and version and munge them
// //   const site: any = await getSiteById(siteId, requestOptions);
// //   if (versionName) {
// //     const versionResource = await getVersion(siteId, versionName, requestOptions);
// //     site.data.values.layout = applyVersion(versionResource, site);
// //   }
// //   return site;
// // }
// export async function publishSiteVersion (site: any, version: IVersion, requestOptions: IHubRequestOptions) {
//   // we expect the site to contain the changes that we want to apply to the version
//   // but we also need the versionResource so we can preserve the created and creator props
//   await updateVersion(site, version, requestOptions);
//   // add a prop to the site indicating the published version
//   let typeKeywords: string[] = getProp(site, 'item.typeKeywords') || [];
//   typeKeywords = typeKeywords.filter(keyword => !keyword.match(/^hubSiteLayoutVersionPublished:/));
//   typeKeywords.push(`hubSiteLayoutVersionPublished:${version.id}`);
//   site.item.typeKeywords = typeKeywords;
//   // save the site
//   // TODO: requestOptions takes allowList and updateVersions props...
//   return updateSite(site, requestOptions as any);
// }
//# sourceMappingURL=searchVersions.js.map