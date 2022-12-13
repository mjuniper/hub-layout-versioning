import { addItemResource, getItemResource, getItemResources, removeItemResource, updateItemResource } from "@esri/arcgis-rest-portal";
import { cloneObject, createId, getProp, IHubRequestOptions, IModel, mergeObjects, objectToJsonBlob } from "@esri/hub-common";
import { isPage, isSite, updateSite } from "@esri/hub-sites";

const VERSION_RESOURCE_NAME = 'version.json';

interface IVersionMetadata  {
  access?: string;
  updated: number;
  name: string;
  path: string;
  size?: number;
}

interface IVersion extends IVersionMetadata {
  created: number;
  creator: string;
  data: Record<string, any>
}

interface ICreateVersionOptions extends IHubRequestOptions {
  name?: string;
}

// extracts the version name from the resource name which will look like hubVersion_<versionName>/version.json
// function getVersionNameFromResourceName (resourceName: string) {
//   return resourceName.replace(getPrefix(''), '').replace(`/${VERSION_RESOURCE_NAME}`, '');
// }

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
export function applyVersion (model: IModel, versionResource: IVersion, includeList: string[]) {
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
export async function searchItemVersions (itemId: string, requestOptions: IHubRequestOptions): Promise<IVersionMetadata[]> {
  const resources = await getItemResources(itemId, { ...requestOptions, params: { sortField: 'created', sortOrder: 'desc' } });
  
  // the resources api does not support q - so we fetch all of them and do the filtering here

  return resources.resources
  .filter((resource: any) => resource.resource.match(/^hubVersion_[a-zA-Z0-9_\s]*\/version.json/))
  .map((resource: any) => {
    const { access, resource: path, size } = resource;

    let properties = {};
    if (resource.properties) {
      if (typeof resource.properties === 'string') {
        properties = JSON.parse(resource.properties);
      }
    }

    return {
      ...properties,
      access,
      path,
      size,
    };
  });
}

export async function getItemVersion (itemId: string, versionName: string, requestOptions: IHubRequestOptions): Promise<IVersion> {
  return getItemResource(itemId, { ...requestOptions, fileName: getResourceNameFromVersionName(versionName), readAs: 'json' });
}

export async function createVersion (model: IModel, requestOptions: ICreateVersionOptions): Promise<IVersion> {
  // TODO: we need to check whether the version name already exists
  const includeList = getIncludeListFromItemType(model);

  // TODO: in the future, we could make the data a separate resource file and reference it here with jsonref or something: { data: "#resources/data.json" }
  const data = getVersionData(model, includeList);

  const name = requestOptions.name || createId();

  const prefix = getPrefix(name);
  const now = Date.now();
  const resource: IVersion = {
    created: now,
    creator: getProp(requestOptions, 'authentication.username'),
    updated: now,
    name,
    path: `${prefix}/${VERSION_RESOURCE_NAME}`,
    data
  };
  const versionBlob = objectToJsonBlob(resource);

  const properties = mergeObjects(resource, {}, ['created', 'creator', 'updated', 'name']);

  await addItemResource({
    id: getProp(model, 'item.id'),
    owner: getProp(model, "item.owner"),
    prefix,
    name: VERSION_RESOURCE_NAME,
    resource: versionBlob,
    private: true,
    portal: requestOptions.portal,
    params: { properties },
    authentication: requestOptions.authentication as any, // not sure why TS complains about this...
  });

  resource.size = versionBlob.size;

  return resource;
}

export async function updateVersion (model: IModel, versionResource: IVersion, requestOptions: IHubRequestOptions): Promise<IVersion> {
  // we expect the item to contain the changes that we want to apply to the version
  // but we also need the versionResource so we can preserve the created and creator props

  // TODO: we should fetch the version and ensure that its updated date is not newer than what we have in memory

  const includeList = getIncludeListFromItemType(model);
  versionResource.data = getVersionData(model, includeList);

  const prefix = getPrefix(versionResource.name);
  versionResource.updated = Date.now();
  const versionBlob = objectToJsonBlob(versionResource);

  const properties = mergeObjects(versionResource, {}, ['created', 'creator', 'updated', 'name']);

  await updateItemResource({
    id: getProp(model, 'item.id'),
    owner: getProp(model, "item.owner"),
    prefix,
    name: VERSION_RESOURCE_NAME,
    resource: versionBlob,
    private: false,
    portal: requestOptions.portal,
    params: { properties },
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

export async function publishSiteVersion (site: any, versionResource: IVersion, requestOptions: IHubRequestOptions) {
  // we expect the site to contain the changes that we want to apply to the version
  // but we also need the versionResource so we can preserve the created and creator props

  await updateVersion(site, versionResource, requestOptions);

  // add a prop to the site indicating the published version
  let typeKeywords: string[] = getProp(site, 'item.typeKeywords') || [];
  typeKeywords = typeKeywords.filter(keyword => !keyword.match(/^hubSiteLayoutVersionPublished:/));
  typeKeywords.push(`hubSiteLayoutVersionPublished:${versionResource.name}`);
  site.item.typeKeywords = typeKeywords;
  
  // save the site
  // TODO: requestOptions takes allowList and updateVersions props...
  return updateSite(site, requestOptions as any);
}