import { IItem, IUser, IGroup, IPolygon, ISpatialReference, IGeometry } from "@esri/arcgis-rest-types";
import { IPortal, ISearchResult } from "@esri/arcgis-rest-portal";
import { UserSession } from "@esri/arcgis-rest-auth";
import { IRequestOptions } from "@esri/arcgis-rest-request";
/**
 * Generic Model, used with all items that have a json
 * `/data` payload
 *
 * @export
 * @interface IModel
 */
export interface IModel {
    item: IItem;
    data?: {
        [propName: string]: any;
    };
    [key: string]: any;
}
export interface IDraft {
    item: Partial<IItem>;
    data: any;
}
/**
 * Defined the Initiative Item as having
 * `type: "Hub Initiative"`
 *
 * @export
 * @interface IInitiativeItem
 * @extends {IItemAdd}
 */
export interface IInitiativeItem extends IItem {
    id: string;
    type: "Hub Initiative";
}
/**
 * Initiative Model
 *
 * @export
 * @interface IInitiativeModel
 * @extends {IModel}
 */
export interface IInitiativeModel extends IModel {
    item: IInitiativeItem;
    data?: {
        [propName: string]: any;
    };
}
export interface IInitiativeModelTemplate {
    item: Partial<IInitiativeItem>;
    data: {
        [propName: string]: any;
    };
}
export declare type IItemTemplate = Record<string, any>;
export interface ITemplateAsset {
    mimeType?: "image/png" | "image/jpg" | "image/jpeg";
    name: string;
    url?: string;
    type?: string;
}
export interface IModelTemplate {
    itemId: string;
    item: IItemTemplate;
    data: {
        [propName: string]: any;
    };
    properties?: {
        [propName: string]: any;
    };
    type: string;
    key: string;
    dependencies?: any[];
    resources?: string[];
    assets?: ITemplateAsset[];
    [propName: string]: any;
}
export interface ISolutionTemplate extends IModel {
    data: {
        templates: IModelTemplate[];
    };
}
export declare type GenericAsyncFunc = (...args: any) => Promise<any>;
/**
 * @internal
 * This just adds user to the IPortal interface
 */
export interface IHubRequestOptionsPortalSelf extends IPortal {
    user?: IUser;
}
export interface IHubRequestOptions extends IRequestOptions {
    authentication?: UserSession;
    isPortal?: boolean;
    hubApiUrl?: string;
    portalSelf?: IHubRequestOptionsPortalSelf;
}
/**
 * Options for requests that require an authenticated user.
 */
export interface IHubUserRequestOptions extends IHubRequestOptions {
    authentication: UserSession;
}
export interface IItemResource {
    type?: string;
    url: string;
    name: string;
}
export declare type BBox = number[][];
export declare type IBatch = any[];
export declare type IBatchTransform = (value: any) => any;
export interface IGetSurveyModelsResponse {
    form: IModel;
    featureService: IModel;
    fieldworker: IModel;
    stakeholder: IModel;
}
export interface IGetGroupSharingDetailsResults {
    group: IGroup;
    modelsToShare: IModel[];
}
export interface IRevertableTaskSuccess {
    status: "fullfilled";
    revert: (...args: any[]) => Promise<any>;
    results: any;
}
export interface IRevertableTaskFailed {
    status: "rejected";
    error: Error;
}
export declare type IRevertableTaskResult = IRevertableTaskSuccess | IRevertableTaskFailed;
export declare type HubFamily = "app" | "content" | "dataset" | "document" | "event" | "feedback" | "initiative" | "map" | "people" | "site" | "team" | "template" | "project";
/**
 * Visibility levels of a Hub resource
 */
export declare type Visibility = "private" | "org" | "public";
/**
 * User"s access level to a Hub resource
 */
export declare type AccessControl = "view" | "edit" | "admin";
export declare type GeographyProvenance = "item" | "none" | "automatic";
/**
 * properties to be used with the ArcGIS API geometry class constructors
 */
export interface IGeometryProperties extends IGeometry {
    type: string;
}
export interface IPolygonProperties extends IPolygon, IGeometryProperties {
    type: "polygon";
}
/**
 * Location of a Hub resource
 *
 * @export
 * @interface IHubGeography
 */
export interface IHubGeography {
    center?: [number, number];
    geometry?: IPolygonProperties;
    provenance?: GeographyProvenance;
    spatialReference?: ISpatialReference;
}
export declare type SearchableType = IItem | IGroup | IUser;
export declare type SearchFunction = (...args: any[]) => Promise<ISearchResult<SearchableType>>;
/**
 * Information about an error that occurred while indexing or composing content
 */
export interface IEnrichmentErrorInfo {
    type: "HTTP" | "AGO" | "Other";
    statusCode?: number;
    message?: string;
}
export interface IActionLink {
    /** Link title */
    title: string;
    /** Link URL */
    url: string;
}
/**
 * IOperation
 * Represents some operation within the system.
 *
 * Used as a means to track the calls, inputs and outputs
 * during complex processes
 *
 * @export
 * @interface IOperation
 */
export interface IOperation {
    /**
     * Unique identifier:
     * i.e `getItem-3fc`, `convertToTemplate-bc7`
     */
    id: string;
    /**
     * What type of operation is this
     * i.e. getItem, convertToTemplate
     */
    type: string;
    /**
     * Inputs to the operation
     */
    inputs: Record<string, unknown>;
    state?: string;
    startedAt?: number;
    duration?: number;
    output?: Record<string, unknown>;
}
/**
 * Serialized Operation Stack
 *
 * @export
 * @interface SerializedOperationStack
 */
export interface ISerializedOperationStack {
    operations: IOperation[];
}
/**
 * IUpdateSiteOptions
 *
 * Options for site updates
 *
 * @export
 * @interface UpdateSiteOptions
 */
export interface IUpdateSiteOptions extends IUpdatePageOptions {
    updateVersions?: boolean;
}
/**
 * IUpdatePageOptions
 *
 * Options for page updates
 *
 * @export
 * @interface UpdatePageOptions
 */
export interface IUpdatePageOptions extends IHubUserRequestOptions {
    allowList?: string[];
}
export interface IDomainEntry {
    clientKey: string;
    createdAt?: string;
    hostname: string;
    id: string;
    orgId: string;
    orgKey: string;
    orgTitle: string;
    permanentRedirect: boolean;
    siteId: string;
    siteTitle: string;
    sslOnly: boolean;
    updatedAt?: string;
}
export interface IHubTeam extends IGroup {
    properties: {
        [key: string]: any;
    };
}
/**
 * Defines a generic search response interface with parameterized result type
 * for different types of searches
 *
 * total - total number of results
 * results - potentially paginated list of results
 * hasNext - boolean flag for if there are any more pages ofresults
 * next - invokable function for obtaining next page of results
 */
export interface ISearchResponse<T> {
    total: number;
    results: T[];
    hasNext: boolean;
    next: (params?: any) => Promise<ISearchResponse<T>>;
}
/**
 * ENUM which defines File extensions.
 */
export declare enum FileExtension {
    aptx = "aptx",
    bpk = "bpk",
    csv = "csv",
    eaz = "eaz",
    esriaddin = "esriaddin",
    esriaddinx = "esriaddinx",
    doc = "doc",
    docx = "docx",
    dlpk = "dlpk",
    featurecollection = "featurecollection",
    geojson = "geojson",
    gcpk = "gcpk",
    gpk = "gpk",
    gpkg = "gpkg",
    gpkx = "gpkx",
    insightswbk = "insightswbk",
    ipynb = "ipynb",
    jpg = "jpg",
    jpeg = "jpeg",
    json = "json",
    key = "key",
    kml = "kml",
    kmz = "kmz",
    lpk = "lpk",
    lpkx = "lpkx",
    lyr = "lyr",
    lyrx = "lyrx",
    mapx = "mapx",
    mmpk = "mmpk",
    mpk = "mpk",
    mpkx = "mpkx",
    msd = "msd",
    mspk = "mspk",
    mxd = "mxd",
    ncfg = "ncfg",
    nmc = "nmc",
    nmf = "nmf",
    numbers = "numbers",
    pages = "pages",
    pagx = "pagx",
    parquet = "parquet",
    pdf = "pdf",
    pmf = "pmf",
    png = "png",
    ppkx = "ppkx",
    ppt = "ppt",
    pptx = "pptx",
    proconfigx = "proconfigx",
    rpk = "rpk",
    rptx = "rptx",
    sd = "sd",
    slpk = "slpk",
    spk = "spk",
    stylx = "stylx",
    surveyaddin = "surveyaddin",
    sxd = "sxd",
    tif = "tif",
    tiff = "tiff",
    tpk = "tpk",
    tpkx = "tpkx",
    vsd = "vsd",
    vtpk = "vtpk",
    wmpk = "wmpk",
    wpk = "wpk",
    xls = "xls",
    xml = "xml",
    xlsx = "xlsx",
    zip = "zip",
    "3dd" = "3dd",
    "3vr" = "3vr",
    "3ws" = "3ws",
    "rft.json" = "rft.json",
    "rft.xml" = "rft.xml"
}
/**
 * ENUM which defines human readable Item Type names
 */
export declare enum ItemType {
    "360 VR Experience" = "360 VR Experience",
    "Apache Parquet" = "Apache Parquet",
    "AppBuilder Widget Package" = "AppBuilder Widget Package",
    "Desktop Add In" = "Desktop Add In",
    "Explorer Add In" = "Explorer Add In",
    "Explorer Map" = "Explorer Map",
    "Explorer Layer" = "Explorer Layer",
    "Windows Mobile Package" = "Windows Mobile Package",
    "ArcGIS Pro Add In" = "ArcGIS Pro Add In",
    "ArcGIS Pro Configuration" = "ArcGIS Pro Configuration",
    "Globe Document" = "Globe Document",
    "Map Document" = "Map Document",
    "ArcPad Package" = "ArcPad Package",
    "Published Map" = "Published Map",
    "Scene Document" = "Scene Document",
    "CityEngine Web Scene" = "CityEngine Web Scene",
    "Code Sample" = "Code Sample",
    "CSV Collection" = "CSV Collection",
    "CSV" = "CSV",
    "CAD Drawing" = "CAD Drawing",
    "Deep Learning Package" = "Deep Learning Package",
    "Desktop Application" = "Desktop Application",
    "Desktop Application Template" = "Desktop Application Template",
    "Desktop Style" = "Desktop Style",
    "Earth Configuration" = "Earth Configuration",
    "Feature Collection" = "Feature Collection",
    "File Geodatabase" = "File Geodatabase",
    "GeoJson" = "GeoJson",
    "Geoprocessing Package" = "Geoprocessing Package",
    "GeoPackage" = "GeoPackage",
    "Geoprocessing Sample" = "Geoprocessing Sample",
    "GML" = "GML",
    "Image Collection" = "Image Collection",
    "Image" = "Image",
    "iWork Keynote" = "iWork Keynote",
    "iWork Numbers" = "iWork Numbers",
    "iWork Pages" = "iWork Pages",
    "KML Collection" = "KML Collection",
    "KML" = "KML",
    "Layer" = "Layer",
    "Layer Package" = "Layer Package",
    "Layout" = "Layout",
    "Locator Package" = "Locator Package",
    "Map Package" = "Map Package",
    "Map Template" = "Map Template",
    "Microsoft Excel" = "Microsoft Excel",
    "Microsoft Powerpoint" = "Microsoft Powerpoint",
    "Visio Document" = "Visio Document",
    "Microsoft Word" = "Microsoft Word",
    "Mobile Basemap Package" = "Mobile Basemap Package",
    "Mobile Map Package" = "Mobile Map Package",
    "Mobile Scene Package" = "Mobile Scene Package",
    "Notebook" = "Notebook",
    "PDF" = "PDF",
    "Pro Map" = "Pro Map",
    "Pro Report" = "Pro Report",
    "Project Package" = "Project Package",
    "Project Template" = "Project Template",
    "Raster function template" = "Raster function template",
    "Rule Package" = "Rule Package",
    "Scene Package" = "Scene Package",
    "Service Definition" = "Service Definition",
    "Shapefile" = "Shapefile",
    "Survey123 Add In" = "Survey123 Add In",
    "Tile Package" = "Tile Package",
    "Vector Tile Package" = "Vector Tile Package",
    "Workflow Manager Package" = "Workflow Manager Package",
    "Document Link" = "Document Link",
    "Feature Service" = "Feature Service",
    "Geocoding Service" = "Geocoding Service",
    "Geodata Service" = "Geodata Service",
    "Geometry Service" = "Geometry Service",
    "Geoprocessing Service" = "Geoprocessing Service",
    "Geoenrichment Service" = "Geoenrichment Service",
    "Globe Service" = "Globe Service",
    "Image Service" = "Image Service",
    "Map Service" = "Map Service",
    "Network Analysis Service" = "Network Analysis Service",
    "Vector Tile Service" = "Vector Tile Service",
    "WFS" = "WFS",
    "WMS" = "WMS",
    "WMTS" = "WMTS",
    "OGCFeatureServer" = "OGCFeatureServer",
    "Scene Service" = "Scene Service",
    "Stream Service" = "Stream Service",
    "Workflow Manager Service" = "Workflow Manager Service",
    "Web Mapping Application" = "Web Mapping Application",
    "Mobile Application" = "Mobile Application",
    "AppBuilder Extension" = "AppBuilder Extension",
    "Google Drive" = "Google Drive",
    "Dropbox" = "Dropbox",
    "OneDrive" = "OneDrive",
    "StoryMap" = "StoryMap",
    "Dashboard" = "Dashboard",
    "Hub Initiative" = "Hub Initiative",
    "Hub Site Application" = "Hub Site Application",
    "Web Experience" = "Web Experience",
    "Insights Workbook Package" = "Insights Workbook Package",
    "Application" = "Application",
    "ArcGIS Explorer Application Configuration" = "ArcGIS Explorer Application Configuration",
    "ArcMap Document" = "ArcMap Document",
    "Layer File" = "Layer File",
    "ogcFeature" = "ogcFeature",
    FeatureServer = "Feature Service",
    GeocodeServer = "GeocodeServer",
    GeoDataServer = "GeoDataServer",
    GeometryServer = "GeometryServer",
    GeoenrichmentServer = "GeoenrichmentServer",
    GPServer = "GPServer",
    GlobeServer = "GlobeServer",
    ImageServer = "ImageServer",
    MapServer = "MapServer",
    NAServer = "NAServer",
    ElevationServer = "ElevationServer",
    VectorTileServer = "VectorTileServer",
    "Scene Server" = "Scene Server",
    StreamServer = "StreamServer",
    WMServer = "WMServer",
    TiledImageServer = "TiledImageServer"
}
/**
 * File type to extension interface
 */
export interface IFileType {
    type: ItemType;
    typeKeywords: string[];
    fileExt?: FileExtension[];
}
/**
 * Array of ItemTypes and/or array of extensions. Primarily used for the create new content flow
 */
export interface IAllowedFileTypes {
    types?: ItemType[];
    extensions?: FileExtension[];
}
/**
 * Maps human readable file names to extensions IE Image === jpg, png, etc
 */
export declare const addCreateItemTypes: Record<string, IFileType>;
