import { addItemResource, getItemResource, getItemResources, removeItemResource, updateItemResource } from "@esri/arcgis-rest-portal";
import { createId, getProp, getSiteById, mergeObjects, objectToJsonBlob } from "@esri/hub-common";
import { updateSite } from "@esri/hub-sites";

const LAYOUT_RESOURCE_NAME = '/layout.json';

// extracts the version name from the resource name which will look like hubSiteVersion_<versionName>/layout.json
function getVersionNameFromResourceName (resourceName: string) {
  return resourceName.replace(getPrefix(''), '').replace(LAYOUT_RESOURCE_NAME, '');
}

// gets the resource name from the version name
function getResourceNameFromVersionName(versionName: string) {
  return getPrefix(versionName + LAYOUT_RESOURCE_NAME);
}

// gets the prefix from the version name
function getPrefix(versionName: string) {
  return `hubSiteVersion_${versionName}`;
}

// TODO: actually use types (i'm using a bunch of : any)

export async function getSiteLayoutVersions (siteId: string, requestOptions: any) {
  const resources = await getItemResources(siteId, { ...requestOptions, params: { sortField: 'created', sortOrder: 'desc' } });
  
  // the resources api does not support q - so we fetch all of them and do the filtering here

  return resources.resources
  .filter((resource: any) => resource.resource.match(/^hubSiteVersion_[a-zA-Z0-9_\s]*\/layout.json/))
  .map((resource: any) => {
    const name = getVersionNameFromResourceName(resource.resource);
    // this is sorta strange, but the created property actually seems to be the updated date
    const updated = resource.created;
    delete resource.created;
    return { ...resource, name, updated };
  });
}

export async function getSiteByVersion (siteId: string, versionName: string, requestOptions: any) {
  // if version not supplied, return site item, if supplied get item and version and munge them
  const site: any = await getSiteById(siteId, requestOptions);
  if (versionName) {
    const layout = await getSiteLayoutVersion(siteId, versionName, requestOptions);
    site.data.values.layout = mergeObjects(layout, site.data.values.layout);
  }
  return site;
}

export async function getSiteLayoutVersion (siteId: string, versionName: string, requestOptions: any) {
  return getItemResource(siteId, { ...requestOptions, fileName: getResourceNameFromVersionName(versionName), readAs: 'json' });
}

export async function createSiteLayoutVersion (site: string, layout: any, name=createId(), requestOptions: any) {
  // TODO: we need to check whether the version name already exists

  // const includeList = _includeListFromItemType(siteOrPageModel.item);
  // const draft = buildDraft(siteOrPageModel, includeList);

  const prefix = getPrefix(name);
  const now = Date.now();
  layout.created = now;
  layout.updated = now;
  layout.name = name;
  const versionBlob = objectToJsonBlob(layout);
  const resourceName = 'layout.json';

  await addItemResource({
    id: getProp(site as any, 'item.id'),
    owner: getProp(site as any, "item.owner"),
    prefix,
    name: resourceName,
    resource: versionBlob,
    private: false,
    portal: requestOptions.portal,
    authentication: requestOptions.authentication,
  });

  return name;
}

export async function updateSiteLayoutVersion (site: any, layout: any, name: string, requestOptions: any) {
  // TODO: we need to check whether the version name already exists

  // const includeList = _includeListFromItemType(siteOrPageModel.item);
  // const draft = buildDraft(siteOrPageModel, includeList);

  const prefix = getPrefix(name);
  layout.updated = Date.now();
  layout.name = name;
  const versionBlob = objectToJsonBlob(layout);
  const resourceName = 'layout.json';

  await updateItemResource({
    id: getProp(site, 'item.id'),
    owner: getProp(site, "item.owner"),
    prefix,
    name: resourceName,
    resource: versionBlob,
    private: false,
    portal: requestOptions.portal,
    authentication: requestOptions.authentication,
  });

  return name;
}

export async function deleteSiteLayoutVersion (site: any, versionName: string, requestOptions: any) {
  return removeItemResource({
    id: getProp(site, 'item.id'),
    owner: getProp(site, "item.owner"),
    resource: getResourceNameFromVersionName(versionName),
    portal: requestOptions.portal,
    authentication: requestOptions.authentication
  });
}

export async function publishSiteLayoutVersion (site: any, versionName: string, requestOptions: any) {
  // TODO: does it make sense that we take a site model and a version name
  // .... i'm not sure it does but this is where i ended up on this first pass
  // TODO: we might need to refactor this so we can pass in a layout or a layoutName
  // save the draft
  const layoutName = getProp(site, 'data.values.layout.name');
  const createOrUpdate = !!layoutName ? updateSiteLayoutVersion : createSiteLayoutVersion;
  const name = await createOrUpdate(site, site.data.values.layout, versionName, requestOptions);
  versionName = layoutName || name;

  // // munge them
  // TODO: so now we ended up expecting a site that is already munged with a layout but that does not feel right
  // site = cloneObject(site);
  // site.data.values = mergeObjects({ layout }, site.data.values);

  // add a prop to the site indicating the published version?
  let typeKeywords: string[] = getProp(site, 'item.typeKeywords') || [];
  typeKeywords = typeKeywords.filter(keyword => !keyword.match(/^hubSiteLayoutVersionPublished:/));
  typeKeywords.push(`hubSiteLayoutVersionPublished:${versionName}`);
  site.item.typeKeywords = typeKeywords;
  
  // save the site
  // TODO: requestOptions takes allowList and updateVersions props...
  return updateSite(site, requestOptions);
}