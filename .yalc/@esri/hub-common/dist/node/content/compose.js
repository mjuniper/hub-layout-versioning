"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeContent = exports.isLayerView = exports.getItemLayer = exports.parseItemCategories = exports.getItemHubId = exports.getItemLayerId = exports.normalizeItemType = exports.isSiteType = exports.isFeatureService = exports.getLayerIdFromUrl = exports.getProxyUrl = exports.getPortalUrls = exports.getContentTypeIcon = exports.UpdateFrequency = void 0;
const arcgis_rest_feature_layer_1 = require("@esri/arcgis-rest-feature-layer");
const api_1 = require("../api");
const categories_1 = require("../categories");
const get_structured_license_1 = require("../items/get-structured-license");
const objects_1 = require("../objects");
const get_item_thumbnail_url_1 = require("../resources/get-item-thumbnail-url");
const get_item_home_url_1 = require("../urls/get-item-home-url");
const get_item_api_url_1 = require("../urls/get-item-api-url");
const get_item_data_url_1 = require("../urls/get-item-data-url");
const util_1 = require("../util");
const utils_1 = require("../utils");
const _internal_1 = require("./_internal");
const get_family_1 = require("./get-family");
// helper fns - move this to _internal if needed elsewhere
const getOnlyQueryLayer = (layers) => {
    const layer = layers && layers.length === 1 ? layers[0] : undefined;
    return layer && layer.capabilities.includes("Query") ? layer : undefined;
};
const shouldUseLayerInfo = (item, layer, layers, requestOptions) => {
    return (!_internal_1.isProxiedCSV(item, requestOptions) &&
        layer &&
        layers &&
        layers.length > 1 &&
        // we use item info instead of layer info for single layer items
        !exports.getLayerIdFromUrl(item.url));
};
// this logic adapted from hub-indexer's determineName(), see
// https://github.com/ArcGIS/hub-indexer/blob/8f4dd6f928124c1f35dd02bc11bd996191ee1160/packages/duke/compose/common.js#L7-L34
const getContentName = (item, layer, layers, requestOptions) => {
    return ((shouldUseLayerInfo(item, layer, layers, requestOptions)
        ? layer.name
        : item.title || item.name) || "").replace(/_/g, " ");
};
/**
 * The possible values for updateFrequency
 *
 * @enum {string}
 */
var UpdateFrequency;
(function (UpdateFrequency) {
    UpdateFrequency["Continual"] = "continual";
    UpdateFrequency["Daily"] = "daily";
    UpdateFrequency["Weekly"] = "weekly";
    UpdateFrequency["Fortnightly"] = "fortnightly";
    UpdateFrequency["Monthly"] = "monthly";
    UpdateFrequency["Quarterly"] = "quarterly";
    UpdateFrequency["Biannually"] = "biannually";
    UpdateFrequency["Annually"] = "annually";
    UpdateFrequency["AsNeeded"] = "as-needed";
    UpdateFrequency["Irregular"] = "irregular";
    UpdateFrequency["NotPlanned"] = "not-planned";
    UpdateFrequency["Unknown"] = "unknown";
    UpdateFrequency["Semimonthly"] = "semimonthly";
})(UpdateFrequency = exports.UpdateFrequency || (exports.UpdateFrequency = {}));
const getUpdateFrequencyFromMetadata = (metadata, identifier) => {
    const updateFrequencyMap = {
        "001": UpdateFrequency.Continual,
        "002": UpdateFrequency.Daily,
        "003": UpdateFrequency.Weekly,
        "004": UpdateFrequency.Fortnightly,
        "005": UpdateFrequency.Monthly,
        "006": UpdateFrequency.Quarterly,
        "007": UpdateFrequency.Biannually,
        "008": UpdateFrequency.Annually,
        "009": UpdateFrequency.AsNeeded,
        "010": UpdateFrequency.Irregular,
        "011": UpdateFrequency.NotPlanned,
        "012": UpdateFrequency.Unknown,
        "013": UpdateFrequency.Semimonthly,
    };
    return updateFrequencyMap[_internal_1.getValueFromMetadata(metadata, identifier || "updateFrequency")];
};
const getDateInfoFromMetadata = (metadata, identifier) => {
    const metadataDateInfo = _internal_1.parseISODateString(_internal_1.getValueFromMetadata(metadata, identifier));
    return (metadataDateInfo && Object.assign(Object.assign({}, metadataDateInfo), { source: `metadata.${_internal_1.getMetadataPath(identifier)}` }));
};
const getLastEditDateInfo = (content, layerOrServer) => {
    const source = `${layerOrServer}.editingInfo.lastEditDate`;
    const lastEditDate = objects_1.getProp(content, source);
    return (lastEditDate && {
        date: new Date(lastEditDate),
        source,
        // NOTE: this default was taken from _enrichDates
        precision: _internal_1.DatePrecision.Day,
    });
};
const getItemDateInfo = (item, createdOrModified) => {
    return {
        date: new Date(item[createdOrModified]),
        // NOTE: this was set to Day in _enrichDates()
        // but I wonder if it should be Time instead?
        precision: _internal_1.DatePrecision.Day,
        source: `item.${createdOrModified}`,
    };
};
const getUpdatedDateInfo = (item, options) => {
    return (
    // prefer metadata revise date
    getDateInfoFromMetadata(options.metadata, "reviseDate") ||
        // then layer last edit date
        getLastEditDateInfo(options, "layer") ||
        // then server last edit date
        getLastEditDateInfo(options, "server") ||
        // fall back to item modified date
        getItemDateInfo(item, "modified"));
};
const getPublishedDateInfo = (item, metadata) => {
    return (
    // prefer metadata publish date
    getDateInfoFromMetadata(metadata, "pubDate") ||
        // then metadata create date
        getDateInfoFromMetadata(metadata, "createDate") ||
        // fall back to item created date
        getItemDateInfo(item, "created"));
};
const getMetadataUpdatedDateInfo = (item, metadata) => {
    // prefer date from metadata
    return (getDateInfoFromMetadata(metadata, "metadataUpdatedDate") ||
        // default to when the item was last modified
        getItemDateInfo(item, "modified"));
};
// public API
/**
 * Compute the content type calcite-icon based on the content type
 * @param content type
 * @returns content type icon
 */
exports.getContentTypeIcon = (contentType) => {
    var _a;
    const type = util_1.camelize(contentType);
    const iconMap = {
        appbuilderExtension: "file",
        appbuilderWidgetPackage: "widgets-source",
        application: "web",
        applicationConfiguration: "app-gear",
        arcgisProMap: "desktop",
        cadDrawing: "file-cad",
        cityEngineWebScene: "urban-model",
        codeAttachment: "file-code",
        codeSample: "file-code",
        colorSet: "palette",
        contentCategorySet: "label",
        csv: "file-csv",
        cSV: "file-csv",
        cSVCollection: "file-csv",
        dashboard: "dashboard",
        desktopApplication: "desktop",
        documentLink: "link",
        excaliburImageryProject: "file",
        explorerMap: "file",
        exportPackage: "file",
        featureCollection: "data",
        featureCollectionTemplate: "file",
        featureLayer: "data",
        featureService: "collection",
        fileGeodatabase: "data",
        form: "survey",
        geocodingService: "file",
        geodataService: "file",
        geometryService: "file",
        geopackage: "file",
        geoprocessingService: "file",
        globeLayer: "layers",
        globeService: "file",
        hubInitiative: "initiative",
        hubInitiativeTemplate: "initiative-template",
        hubPage: "browser",
        hubProject: "projects",
        hubSiteApplication: "web",
        image: "file-image",
        imageService: "data",
        insightsModel: "file",
        insightsPage: "graph-moving-average",
        insightsTheme: "palette",
        insightsWorkbook: "graph-moving-average",
        iWorkPages: "file-text",
        iWorkKeynote: "presentation",
        iWorkNumbers: "file-report",
        kML: "data",
        kMLCollection: "data",
        layer: "layers",
        layerPackage: "layers",
        layerTemplate: "file",
        locatorPackage: "file",
        mapArea: "file",
        mapDocument: "map-contents",
        mapImageLayer: "collection",
        mapPackage: "file",
        mapService: "collection",
        microsoftExcel: "file-report",
        microsoftPowerpoint: "presentation",
        microsoftWord: "file-text",
        mission: "file",
        mobileMapPackage: "map-contents",
        nativeApplication: "mobile",
        nativeApplicationInstaller: "file",
        nativeApplicationTemplate: "file",
        mobileApplication: "mobile",
        networkAnalysisService: "file",
        notebook: "code",
        orientedImageryCatalog: "file",
        orthoMappingProject: "file",
        orthoMappingTemplate: "file",
        pDF: "file-pdf",
        quickCaptureProject: "mobile",
        rasterFunctionTemplate: "file",
        rasterLayer: "map",
        realTimeAnalytic: "file",
        relationalDatabaseConnection: "file",
        reportTemplate: "file",
        sceneLayer: "data",
        sceneService: "urban-model",
        serviceDefinition: "file",
        shapefile: "data",
        solution: "puzzle-piece",
        sqliteGeodatabase: "file",
        statisticalDataCollection: "file",
        storymap: "tour",
        storyMap: "tour",
        storymapTheme: "palette",
        symbolSet: "file",
        table: "table",
        urbanModel: "urban-model",
        vectorTilePackage: "file-shape",
        vectorTileService: "map",
        visioDocument: "conditional-rules",
        webExperience: "apps",
        webMap: "map",
        webMappingApplication: "apps",
        webScene: "urban-model",
        wfs: "map",
        wFS: "map",
        wMS: "map",
        wMTS: "map",
        workflowManagerService: "file",
        workforceProject: "list-check",
    };
    return (_a = iconMap[type]) !== null && _a !== void 0 ? _a : "file";
};
/**
 * get portal URLs (home, API, data, and thumbnail) for an item
 *
 * @param item Item
 * @param requestOptions Request options
 * @returns a hash with the portal URLs
 * @export
 */
exports.getPortalUrls = (item, requestOptions) => {
    const authentication = requestOptions.authentication;
    const token = authentication && authentication.token;
    // add properties that depend on portal
    const portalHome = get_item_home_url_1.getItemHomeUrl(item.id, requestOptions);
    // the URL of the item's Portal API end point
    const portalApi = get_item_api_url_1.getItemApiUrl(item, requestOptions, token);
    // the URL of the item's data API end point
    const portalData = get_item_data_url_1.getItemDataUrl(item, requestOptions, token);
    // the full URL of the thumbnail
    const thumbnail = get_item_thumbnail_url_1.getItemThumbnailUrl(item, requestOptions, {
        token,
    });
    return {
        portalHome,
        portalApi,
        portalData,
        thumbnail,
    };
};
/**
 * If an item is a proxied csv, returns the url for the proxying feature layer.
 * If the item is not a proxied csv, returns undefined.
 *
 * @param item
 * @param requestOptions Hub Request Options (including whether we're in portal)
 * @returns
 */
exports.getProxyUrl = (item, requestOptions) => {
    let result;
    if (_internal_1.isProxiedCSV(item, requestOptions)) {
        // Sometimes hubApiUrl includes /api/v3, sometimes it doesn't
        const baseUrl = api_1.getHubApiUrl(requestOptions).replace("/api/v3", "");
        result = `${baseUrl}/datasets/${item.id}_0/FeatureServer/0`;
    }
    return result;
};
/**
 * parse layer id from a service URL
 * @param {string} url
 * @returns {string} layer id
 */
exports.getLayerIdFromUrl = (url) => {
    const endsWithNumberSegmentRegEx = /\/\d+$/;
    const matched = url && url.match(endsWithNumberSegmentRegEx);
    return matched && matched[0].slice(1);
};
/**
 * Case-insensitive check if the type is "Feature Service"
 * @param {string} type - item's type
 * @returns {boolean}
 */
exports.isFeatureService = (type) => {
    return type && type.toLowerCase() === "feature service";
};
/**
 * Determines whether, given a type and typekeywords, the input is
 * a site item type or not
 * @param type - the type value on the item
 * @param typeKeywords - the typeKeywords on the item
 */
function isSiteType(type, typeKeywords = []) {
    return (type === "Site Application" ||
        type === "Hub Site Application" ||
        (type === "Web Mapping Application" && typeKeywords.includes("hubSite")));
}
exports.isSiteType = isSiteType;
/**
 * ```js
 * import { normalizeItemType } from "@esri/hub-common";
 * //
 * normalizeItemType(item)
 * > [ 'Hub Site Application' ]
 * ```
 * @param item Item object.
 * @returns type of the input item.
 *
 */
function normalizeItemType(item = {}) {
    let ret = item.type;
    const typeKeywords = item.typeKeywords || [];
    if (isSiteType(item.type, typeKeywords)) {
        ret = "Hub Site Application";
    }
    if (item.type === "Site Page" ||
        (item.type === "Web Mapping Application" &&
            utils_1.includes(typeKeywords, "hubPage"))) {
        ret = "Hub Page";
    }
    if (item.type === "Hub Initiative" &&
        utils_1.includes(typeKeywords, "hubInitiativeTemplate")) {
        ret = "Hub Initiative Template";
    }
    if (item.type === "Web Mapping Application" &&
        utils_1.includes(typeKeywords, "hubSolutionTemplate")) {
        ret = "Solution";
    }
    return ret;
}
exports.normalizeItemType = normalizeItemType;
/**
 * return the layerId if we can tell that item is a single layer service
 * @param {*} item from AGO
 * @returns {string} layer id
 */
exports.getItemLayerId = (item) => {
    // try to parse it from the URL, but failing that we check for
    // the Singlelayer typeKeyword, which I think is set when you create the item in AGO
    // but have not verified that, nor that we should alway return '0' in that case
    return (exports.getLayerIdFromUrl(item.url) ||
        (exports.isFeatureService(item.type) &&
            item.typeKeywords &&
            utils_1.includes(item.typeKeywords, "Singlelayer") &&
            "0"));
};
/**
 * given an item, get the id to use w/ the Hub API
 * @param item
 * @returns Hub API id (hubId)
 */
exports.getItemHubId = (item) => {
    if (item.access !== "public") {
        // the hub only indexes public items
        return;
    }
    const id = item.id;
    const layerId = exports.getItemLayerId(item);
    return layerId ? `${id}_${layerId}` : id;
};
/**
 * Splits item category strings at slashes and discards the "Categories" keyword
 *
 * ```
 * ["/Categories/Boundaries", "/Categories/Planning and cadastre/Property records", "/Categories/Structure"]
 * ```
 * Should end up being
 * ```
 * ["Boundaries", "Planning and cadastre", "Property records", "Structure"]
 * ```
 *
 * @param categories - an array of strings
 * @private
 */
function parseItemCategories(categories) {
    if (!categories)
        return categories;
    const exclude = ["categories", ""];
    const parsed = categories.map((cat) => cat.split("/"));
    const flattened = parsed.reduce((acc, arr, _) => [...acc, ...arr], []);
    return flattened.filter((cat) => !utils_1.includes(exclude, cat.toLowerCase()));
}
exports.parseItemCategories = parseItemCategories;
/**
 * get the layer object for
 * - an item that refers to a specific layer of a service
 * - a multi-layer services (if a layer id was passed in)
 * - a single layer feature service
 * @param item
 * @param layers the layers and tables returned from the service
 * @param layerId a specific id
 * @returns layer definition
 * @private
 */
exports.getItemLayer = (item, layers, layerId) => {
    // if item refers to a layer we always want to use that layer id
    // otherwise use the layer id that was passed in (if any)
    const _layerIdFromUrl = exports.getLayerIdFromUrl(item.url);
    const _layerId = _layerIdFromUrl ? parseInt(_layerIdFromUrl, 10) : layerId;
    return (layers &&
        (!util_1.isNil(_layerId)
            ? // find the explicitly set layer id
                layers.find((_layer) => _layer.id === _layerId)
            : // for feature servers with a single layer always show the layer
                exports.isFeatureService(item.type) && getOnlyQueryLayer(layers)));
};
/**
 * determine if a layer is a layer view
 * @param layer
 * @returns
 * @private
 */
exports.isLayerView = (layer) => layer.isView;
const determineHubId = (item, layer, requestOptions) => {
    // Proxied CSVs are one offs in that we don't index the proxied layer,
    // so we cannot append _0. Return item id instead.
    if (_internal_1.isProxiedCSV(item, requestOptions)) {
        return item.id;
    }
    return _internal_1.canUseHubApiForItem(item, requestOptions)
        ? layer
            ? `${item.id}_${layer.id}`
            : exports.getItemHubId(item)
        : undefined;
};
/**
 * Compose a new content object out of an item, enrichments, and context
 * @param item
 * @param options any enrichments, current state (selected layerId), or context (requestOptions)
 * @returns new content object
 */
exports.composeContent = (item, options) => {
    // extract enrichments and context out of the options
    const { slug, requestOptions, data, metadata, groupIds, ownerUser, org, errors, server, layers, recordCount, boundary, extent, searchDescription, statistics, } = options || {};
    // set common variables that we will use in the derived properties below
    const layer = exports.getItemLayer(item, layers, options === null || options === void 0 ? void 0 : options.layerId);
    // NOTE: we only set hubId for public items in online
    const hubId = determineHubId(item, layer, requestOptions);
    const identifier = slug || hubId || item.id;
    // whether or not we should show layer info for name, description, etc
    const name = getContentName(item, layer, layers, requestOptions);
    const _layerDescription = shouldUseLayerInfo(item, layer, layers, requestOptions) &&
        layer.description;
    // so much depends on type
    const type = layer
        ? // use layer type (Feature Layer, Table, etc) for layer content
            layer.type
        : // otherwise use the normalized item type
            normalizeItemType(item);
    // all the urls
    const urls = Object.assign({ relative: _internal_1.getHubRelativeUrl(type, identifier, item.typeKeywords) }, (requestOptions && exports.getPortalUrls(item, requestOptions)));
    const _proxyUrl = exports.getProxyUrl(item, requestOptions);
    // NOTE: I'd rather not compute these date values up front,
    // but they are used by several getters below, so we do it here only once
    const _updatedDateInfo = getUpdatedDateInfo(item, {
        metadata,
        layer,
        server,
    });
    const _publishedDateInfo = getPublishedDateInfo(item, metadata);
    const _metadataUpdatedDateInfo = getMetadataUpdatedDateInfo(item, metadata);
    // derive canEdit/canDelete from itemControl
    const _canEdit = item.itemControl === "update" || item.itemControl === "admin";
    const _canDelete = item.itemControl === "admin";
    // return all of the above composed into a content object
    return Object.assign(Object.assign({ 
        // a reference to underlying item
        item }, item), { 
        // item enrichments
        slug,
        data,
        metadata,
        groupIds,
        ownerUser,
        org, errors: errors || [], 
        // server enrichments
        server,
        layers,
        recordCount,
        // enrichments from the Hub API (boundary is below)
        statistics,
        // derived properties
        // NOTE: in the getters below you can **not** use `this`
        // these are not meant to provide live updating computed props
        // their purpose is to avoid computing all these values above
        // especially where we want to defer computation of less used props
        hubId,
        identifier,
        get isProxied() {
            return !!_proxyUrl;
        },
        layer,
        name,
        get canEdit() {
            return _canEdit;
        },
        get canDelete() {
            return _canDelete;
        },
        get title() {
            return name;
        },
        get description() {
            return _layerDescription || item.description;
        },
        type,
        get family() {
            return get_family_1.getFamily(type);
        },
        get url() {
            return _proxyUrl
                ? _proxyUrl
                : layer
                    ? `${arcgis_rest_feature_layer_1.parseServiceUrl(item.url)}/${layer.id}`
                    : item.url;
        },
        get categories() {
            return parseItemCategories(item.categories);
        },
        get actionLinks() {
            return item.properties && item.properties.links;
        },
        get hubActions() {
            return item.properties && item.properties.actions;
        },
        get isDownloadable() {
            return categories_1.isDownloadable(item);
        },
        get structuredLicense() {
            return get_structured_license_1.getStructuredLicense(item.licenseInfo);
        },
        get permissions() {
            return {
                visibility: item.access,
                control: item.itemControl || "view",
            };
        },
        get extent() {
            return _internal_1.determineExtent(item, extent, layer);
        }, 
        // would require us to do client-side projection of server/layer extent
        get boundary() {
            // NOTE: the boundary from the Hub API will be undefined if item.properties.boundary === 'none'
            return (boundary === null || boundary === void 0 ? void 0 : boundary.provenance) === "automatic"
                ? boundary
                : _internal_1.getContentBoundary(item);
        }, get summary() {
            return (searchDescription ||
                // TODO: this should use the logic for the Hub API's searchDescription
                // see: https://github.com/ArcGIS/hub-indexer/blob/b352cfded8221a967ac80447879d493db6476d7a/packages/duke/compose/dataset.js#L238-L250
                item.snippet ||
                item.description);
        },
        urls,
        get portalHomeUrl() {
            return urls.portalHome;
        },
        get portalDataUrl() {
            return urls.portalData;
        },
        get portalApiUrl() {
            return urls.portalApi;
        },
        get thumbnailUrl() {
            return urls.thumbnail;
        },
        /** The date the item was created */
        get createdDate() {
            return new Date(item.created);
        }, createdDateSource: "item.created", get updatedDate() {
            return _updatedDateInfo.date;
        },
        get updatedDateSource() {
            return _updatedDateInfo.source;
        },
        get updatedDatePrecision() {
            return _updatedDateInfo.precision;
        },
        get modified() {
            return _updatedDateInfo.date.getTime();
        },
        get publishedDate() {
            return _publishedDateInfo.date;
        },
        get publishedDateSource() {
            return _publishedDateInfo.source;
        },
        get publishedDatePrecision() {
            return _publishedDateInfo.precision;
        },
        get metadataUpdatedDate() {
            return _metadataUpdatedDateInfo.date;
        },
        get metadataUpdatedDateSource() {
            return _metadataUpdatedDateInfo.source;
        },
        get metadataUpdatedDatePrecision() {
            return _metadataUpdatedDateInfo.precision;
        },
        get updateFrequency() {
            return getUpdateFrequencyFromMetadata(metadata);
        },
        get metadataUpdateFrequency() {
            return getUpdateFrequencyFromMetadata(metadata, "metadataUpdateFrequency");
        },
        get publisher() {
            return _internal_1.getPublisherInfo(item, metadata, org, ownerUser);
        },
        // TODO: is metrics in use?
        get metrics() {
            return item.properties && item.properties.metrics;
        }, get spatialReference() {
            var _a;
            return ((_a = layer === null || layer === void 0 ? void 0 : layer.extent) === null || _a === void 0 ? void 0 : _a.spatialReference) || _internal_1.getItemSpatialReference(item);
        }, get viewDefinition() {
            // if this is a layer view and we have the item data
            // find the definition that corresponds to the current layer
            const dataLayer = layer &&
                exports.isLayerView(layer) &&
                data &&
                Array.isArray(data.layers) &&
                data.layers.find((_layer) => _layer.id === layer.id);
            return dataLayer ? dataLayer.layerDefinition : undefined;
        },
        get orgId() {
            return org ? org.id : _internal_1.getItemOrgId(item, ownerUser);
        },
        get contentTypeIcon() {
            /* Note: only returns calcite-icons */
            return exports.getContentTypeIcon(type);
        },
        get additionalResources() {
            return _internal_1.getAdditionalResources(item, metadata);
        },
        get itemControl() {
            return item.itemControl || "view";
        } });
};
//# sourceMappingURL=compose.js.map