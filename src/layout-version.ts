import { addItemResource, getItemResource, getItemResources, removeItemResource, updateItemResource } from "@esri/arcgis-rest-portal";
import { cloneObject, createId, getProp, IHubRequestOptions, IModel, mergeObjects, objectToJsonBlob } from "@esri/hub-common";
import { isPage, isSite, updateSite } from "@esri/hub-sites";

const VERSION_RESOURCE_NAME = 'version.json';

interface IVersionResourceMetadata  {
  updated: number;
  name: string;
  path: string;
  size?: number;
}

interface IVersionResource extends IVersionResourceMetadata {
  created: number;
  creator: string;
  data: Record<string, any>
}

interface ICreateVersionOptions extends IHubRequestOptions {
  name?: string;
}

// extracts the version name from the resource name which will look like hubVersion_<versionName>/version.json
function getVersionNameFromResourceName (resourceName: string) {
  return resourceName.replace(getPrefix(''), '').replace(`/${VERSION_RESOURCE_NAME}`, '');
}

// gets the resource name from the version name
function getResourceNameFromVersionName(versionName: string) {
  return getPrefix(`${versionName}/${VERSION_RESOURCE_NAME}`);
}

// gets the prefix from the version name
function getPrefix(versionName: string) {
  return `hubVersion_${versionName}`;
}

// gets the version data (ie the part of the model that goes into the version data) from the model
function getVersionData(model: IModel, includeList: string[]) {
  return mergeObjects(model, {}, includeList);
}

// applies the version to the model
export function applyVersion (model: IModel, versionResource: IVersionResource, includeList: string[]) {
  return mergeObjects(versionResource.data, cloneObject(model), includeList);
}

export function getIncludeListFromItemType(model: IModel): string[] {
  const defaultIncludeList = [
    'data.values.layout',
    'data.values.theme',
  ];
  let includeList;
  if (isSite(model.item)) {
    includeList = defaultIncludeList;
  } else if (isPage(model.item)) {
    includeList = [
      'data.values.layout'
    ];
  } else {
    throw TypeError(
      "item type does not support versioning"
    );
  }

  return includeList;
}

// gets the versions for the item
export async function getItemVersions (itemId: string, requestOptions: IHubRequestOptions): Promise<IVersionResourceMetadata[]> {
  const resources = await getItemResources(itemId, { ...requestOptions, params: { sortField: 'created', sortOrder: 'desc' } });
  
  // the resources api does not support q - so we fetch all of them and do the filtering here

  return resources.resources
  .filter((resource: any) => resource.resource.match(/^hubVersion_[a-zA-Z0-9_\s]*\/version.json/))
  .map((resource: any) => {
    const name = getVersionNameFromResourceName(resource.resource);
    // this is sorta strange, but the created property actually seems to be the updated date
    const updated = resource.created;
    delete resource.created;
    const path = resource.resource;
    delete resource.resource;
    delete resource.access;

    return {
      ...resource,
      name,
      path,
      updated
    };
  });
}

export async function getItemVersion (itemId: string, versionName: string, requestOptions: IHubRequestOptions): Promise<IVersionResource> {
  return getItemResource(itemId, { ...requestOptions, fileName: getResourceNameFromVersionName(versionName), readAs: 'json' });
}

export async function createVersion (model: IModel, requestOptions: ICreateVersionOptions): Promise<IVersionResource> {
  // TODO: we need to check whether the version name already exists
  const includeList = getIncludeListFromItemType(model);
  const data = getVersionData(model, includeList);

  const name = requestOptions.name || createId();

  const prefix = getPrefix(name);
  const now = Date.now();
  const resource: IVersionResource = {
    created: now,
    creator: getProp(requestOptions, 'authentication.username'),
    updated: now,
    name,
    path: `${prefix}/${VERSION_RESOURCE_NAME}`,
    data
  };
  const versionBlob = objectToJsonBlob(resource);

  await addItemResource({
    id: getProp(model, 'item.id'),
    owner: getProp(model, "item.owner"),
    prefix,
    name: VERSION_RESOURCE_NAME,
    resource: versionBlob,
    private: false,
    portal: requestOptions.portal,
    authentication: requestOptions.authentication as any, // not sure why TS complains about this...
  });

  resource.size = versionBlob.size;

  return resource;
}

export async function updateVersion (model: IModel, versionResource: IVersionResource, requestOptions: IHubRequestOptions): Promise<IVersionResource> {
  // we expect the item to contain the changes that we want to apply to the version
  // but we also need the versionResource so we can preserve the created and creator props

  const includeList = getIncludeListFromItemType(model);
  versionResource.data = getVersionData(model, includeList);

  const prefix = getPrefix(versionResource.name);
  versionResource.updated = Date.now();
  const versionBlob = objectToJsonBlob(versionResource);

  await updateItemResource({
    id: getProp(model, 'item.id'),
    owner: getProp(model, "item.owner"),
    prefix,
    name: VERSION_RESOURCE_NAME,
    resource: versionBlob,
    private: false,
    portal: requestOptions.portal,
    authentication: requestOptions.authentication as any, // not sure why ts complains about this...
  });

  return versionResource;
}

export async function deleteVersion (model: IModel, versionName: string, requestOptions: IHubRequestOptions) {
  return removeItemResource({
    id: getProp(model, 'item.id'),
    owner: getProp(model, "item.owner"),
    resource: getResourceNameFromVersionName(versionName),
    portal: requestOptions.portal,
    authentication: requestOptions.authentication as any
  });
}

// site specific stuff

// export async function getSiteByVersion (siteId: string, versionName: string, requestOptions: any) {
//   // if version not supplied, return site item, if supplied get item and version and munge them
//   const site: any = await getSiteById(siteId, requestOptions);
//   if (versionName) {
//     const versionResource = await getVersion(siteId, versionName, requestOptions);
//     site.data.values.layout = applyVersion(versionResource, site);
//   }
//   return site;
// }

export async function publishSiteVersion (site: any, versionResource: IVersionResource, requestOptions: IHubRequestOptions) {
  // we expect the site to contain the changes that we want to apply to the version
  // but we also need the versionResource so we can preserve the created and creator props

  await updateVersion(site, versionResource, requestOptions);

  // add a prop to the site indicating the published version?
  let typeKeywords: string[] = getProp(site, 'item.typeKeywords') || [];
  typeKeywords = typeKeywords.filter(keyword => !keyword.match(/^hubSiteLayoutVersionPublished:/));
  typeKeywords.push(`hubSiteLayoutVersionPublished:${versionResource.name}`);
  site.item.typeKeywords = typeKeywords;
  
  // save the site
  // TODO: requestOptions takes allowList and updateVersions props...
  return updateSite(site, requestOptions as any);
}