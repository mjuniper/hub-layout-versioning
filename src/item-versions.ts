import { addItemResource, getItemResource, getItemResources, removeItemResource, updateItemResource } from "@esri/arcgis-rest-portal";
import { cloneObject, createId, getProp, IHubRequestOptions, IModel, mergeObjects, objectToJsonBlob, setProp } from "@esri/hub-common";
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
async function getVersionData(model: IModel, includeList: string[], versionId: string, requestOptions: ICreateVersionOptions): Promise<Record<string, any>> {
  if (includeList.includes('data.values.layout')) {
    model = await processLayoutResources(model, versionId, requestOptions);
  }
  return mergeObjects(model, {}, includeList);
}

async function processLayoutResources(model: IModel, versionId: string, requestOptions: ICreateVersionOptions): Promise<IModel> {
  // TODO: what about header and footer?
  // TODO: simplify this
  // return model?.data?.values?.layout?.sections?.reduce((acc: string[], section: any) => {
  //   return section.rows.reduce((acc: string[], row: any) => {
  //     return row.cards.reduce((acc: string[], card: any) => {
  //       if (card.component.name === 'image-card' && card.component.settings.isFile && card.component.settings.fileSrc) {
  //         acc.push(card.component.settings.fileSrc);
  //       }
  //       return acc;
  //     }, acc);
  //   }, acc);
  // }, []) || [];

  // we need to:
  // 1. get the resource names from the model
  // 2. modify the model to point to the new resources
  // TODO: we also need to deal with section/row background images... anything else???
  const resourceNames: string[] = [];
  const resourcePrefix = getPrefix(versionId);
  if (model.data) {
    model = cloneObject(model);
    setProp('data.values.layout', model, model?.data?.values.layout.sections.map((section: any) => {
      return section.rows.map((row: any) => {
        return row.cards.map((card: any) => {
          if (card.component.name === 'image-card' && card.component.settings.isFile && card.component.settings.fileSrc) {
            resourceNames.push(card.component.settings.fileSrc);
            // it could already point to a versioned resource (either this version or another), so we need to strip that out
            const newFileSrc = card.component.settings.fileSrc.replace(/^hubVersion_[a-zA-Z0-9_\s]*\//, '');
            card.component.settings.fileSrc = `${resourcePrefix}/${newFileSrc}`;
            // TODO: idk what fileSrc vs cropSrc is for....
            card.component.settings.cropSrc = `${resourcePrefix}/${newFileSrc}`;
          }
          return card;
        });
      });
    }));

    const itemId = getProp(model, 'item.id');

    const existingResourceNames = await getVersionResourceNames(itemId, versionId, requestOptions);

    await Promise.all(resourceNames.map(async fileName => {
      const resource = await getItemResource(itemId, { ...requestOptions, fileName });
      const method = existingResourceNames.includes(fileName) ? updateItemResource : addItemResource;
      return method({
        id: itemId,
        owner: getProp(model, 'item.owner'),
        prefix: resourcePrefix,
        name: fileName.replace(`${resourcePrefix}/`, ''),
        resource: resource,
        private: true,
        portal: requestOptions.portal,
        authentication: requestOptions.authentication as any, // not sure why TS complains about this...
      });
    }));
  }

  return model;
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

  // TODO: we will want to rework this so that the size that we return is the sum of all the resources for the version
  return resources.resources
  .filter((resource: any) => resource.resource.match(/^hubVersion_[a-zA-Z0-9_\s]*\/version.json/))
  .map(versionMetadataFromResource);
}

export async function getVersionResourceNames (itemId: string, versionId: string, requestOptions: IHubRequestOptions): Promise<string[]> {
  const resources = await getItemResources(itemId, { ...requestOptions, params: { sortField: 'created', sortOrder: 'desc' } });
  
  // the resources api does not support q - so we fetch all of them and do the filtering here

  return resources.resources
  .filter((resource: any) => resource.resource.startsWith(getPrefix(versionId)))
  .map((resource: any) => resource.resource);
}

export async function getItemVersion (itemId: string, versionId: string, requestOptions: IHubRequestOptions): Promise<IVersion> {
  return getItemResource(itemId, { ...requestOptions, fileName: getResourceNameFromVersionId(versionId), readAs: 'json' });
}

export async function createVersion (model: IModel, requestOptions: ICreateVersionOptions): Promise<IVersion> {
  const includeList = getIncludeListFromItemType(model);

  // TODO: in the future, we could make the data a separate resource file and reference it here with jsonref or something: { data: "#resources/data.json" }
  const id = createId();
  const prefix = getPrefix(id);
  const itemId = getProp(model, 'item.id');
  const owner = getProp(model, 'item.owner');
  const data = await getVersionData(model, includeList, id, requestOptions);
  const name = requestOptions.name;
  const parent = requestOptions.parentId

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
    id: itemId,
    owner,
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

  const prefix = getPrefix(version.id);
  const includeList = getIncludeListFromItemType(model);
  version.data = await getVersionData(model, includeList, version.id, requestOptions);

  version.updated = Date.now();
  const versionBlob = objectToJsonBlob(version);

  const properties = mergeObjects(version, {}, VERSION_RESOURCE_PROPERTIES);

  await updateItemResource({
    id: getProp(model, 'item.id'),
    owner: getProp(model, "item.owner"),
    prefix,
    name: VERSION_RESOURCE_NAME,
    resource: versionBlob,
    private: true,
    portal: requestOptions.portal,
    params: { properties },
    authentication: requestOptions.authentication as any, // not sure why ts complains about this...
  });

  return version;
}

export async function deleteVersion (model: IModel, versionId: string, requestOptions: IHubRequestOptions) {
  // TODO: we will need to delete the referenced image resources in the version folder as well
  //       BUT we should not delete the image resources if they are referenced by the published site
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