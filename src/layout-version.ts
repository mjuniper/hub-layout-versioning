import { addItemResource, getItemResource, getItemResources, removeItemResource, updateItemResource } from "@esri/arcgis-rest-portal";
import { cloneObject, createId, getProp, IHubRequestOptions, IModel, mergeObjects, objectToJsonBlob } from "@esri/hub-common";
import { isPage, isSite, updateSite } from "@esri/hub-sites";

const VERSION_RESOURCE_NAME = 'version.json';
const VERSION_RESOURCE_PROPERTIES = ['created', 'creator', 'id', 'name', 'parent', 'updated'];

interface IVersionMetadata  {
  access?: string;
  created: number;
  creator: string;
  id: string;
  name?: string;
  parent?: string;
  path: string;
  size?: number;
  updated: number;
}

interface IVersion extends IVersionMetadata {
  data: Record<string, any>
}

interface ICreateVersionOptions extends IHubRequestOptions {
  name?: string;
  parentId?: string;
}

// gets the resource name from the version name
function getResourceNameFromVersionId(versionId: string) {
  return getPrefix(`${versionId}/${VERSION_RESOURCE_NAME}`);
}

// gets the prefix from the version name
function getPrefix(versionId: string) {
  return `hubVersion_${versionId}`;
}

// gets the version data (ie the part of the model that goes into the version data) from the model
function getVersionData(model: IModel, includeList: string[]) {
  return mergeObjects(model, {}, includeList);
}

// applies the version to the model
export function applyVersion (model: IModel, version: IVersion, includeList: string[]) {
  return mergeObjects(version.data, cloneObject(model), includeList);
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

function versionMetadataFromResource (resource: any) {
  // we get access, path, and size from the resource itself
  const { access, resource: path, size } = resource;

  // the rest is on properties as a json string
  let properties = resource.properties || {};
  if (properties) {
    if (typeof properties === 'string') {
      try {
        properties = JSON.parse(properties);
      } catch (e) {
        console.log('error parsing resource properties', e);
        properties = {};
      }
    }
  }

  return {
    ...properties,
    access,
    path,
    size,
  };
}

// gets the versions for the item
export async function searchItemVersions (itemId: string, requestOptions: IHubRequestOptions): Promise<IVersionMetadata[]> {
  const resources = await getItemResources(itemId, { ...requestOptions, params: { sortField: 'created', sortOrder: 'desc' } });
  
  // the resources api does not support q - so we fetch all of them and do the filtering here

  return resources.resources
  .filter((resource: any) => resource.resource.match(/^hubVersion_[a-zA-Z0-9_\s]*\/version.json/))
  .map(versionMetadataFromResource);
}

export async function getItemVersion (itemId: string, versionId: string, requestOptions: IHubRequestOptions): Promise<IVersion> {
  return getItemResource(itemId, { ...requestOptions, fileName: getResourceNameFromVersionId(versionId), readAs: 'json' });
}

export async function createVersion (model: IModel, requestOptions: ICreateVersionOptions): Promise<IVersion> {
  const includeList = getIncludeListFromItemType(model);

  // TODO: in the future, we could make the data a separate resource file and reference it here with jsonref or something: { data: "#resources/data.json" }
  const data = getVersionData(model, includeList);
  const name = requestOptions.name;
  const parent = requestOptions.parentId
  const id = createId();

  const prefix = getPrefix(id);
  const now = Date.now();
  const version: IVersion = {
    created: now,
    creator: getProp(requestOptions, 'authentication.username'),
    data,
    id,
    name,
    parent,
    path: `${prefix}/${VERSION_RESOURCE_NAME}`,
    updated: now,
  };
  const versionBlob = objectToJsonBlob(version);

  const properties = mergeObjects(version, {}, VERSION_RESOURCE_PROPERTIES);

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

  version.size = versionBlob.size;

  return version;
}

export async function updateVersion (model: IModel, version: IVersion, requestOptions: IHubRequestOptions): Promise<IVersion> {
  // we expect the item to contain the changes that we want to apply to the version
  // but we also need the versionResource so we can preserve the created and creator props

  // TODO: we should fetch the version and ensure that its updated date is not newer than what we have in memory

  const includeList = getIncludeListFromItemType(model);
  version.data = getVersionData(model, includeList);

  const prefix = getPrefix(version.id);
  version.updated = Date.now();
  const versionBlob = objectToJsonBlob(version);

  const properties = mergeObjects(version, {}, VERSION_RESOURCE_PROPERTIES);

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

  return version;
}

export async function deleteVersion (model: IModel, versionId: string, requestOptions: IHubRequestOptions) {
  return removeItemResource({
    id: getProp(model, 'item.id'),
    owner: getProp(model, "item.owner"),
    resource: getResourceNameFromVersionId(versionId),
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

export async function publishSiteVersion (site: any, version: IVersion, requestOptions: IHubRequestOptions) {
  // we expect the site to contain the changes that we want to apply to the version
  // but we also need the versionResource so we can preserve the created and creator props

  await updateVersion(site, version, requestOptions);

  // add a prop to the site indicating the published version
  let typeKeywords: string[] = getProp(site, 'item.typeKeywords') || [];
  typeKeywords = typeKeywords.filter(keyword => !keyword.match(/^hubSiteLayoutVersionPublished:/));
  typeKeywords.push(`hubSiteLayoutVersionPublished:${version.id}`);
  site.item.typeKeywords = typeKeywords;
  
  // save the site
  // TODO: requestOptions takes allowList and updateVersions props...
  return updateSite(site, requestOptions as any);
}