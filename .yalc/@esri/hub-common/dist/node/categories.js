"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDownloadable = exports.categories = void 0;
const collections_1 = require("./collections");
const { app, dataset, document, event, feedback, initiative, map, other, site, } = collections_1.collections;
const downloadableTypes = [
    "360 VR Experience",
    "Application",
    "CityEngine Web Scene",
    "Code Sample",
    "CSV Collection",
    "CSV",
    "CAD Drawing",
    "Desktop Application",
    "Desktop Application Template",
    "Desktop Style",
    "File Geodatabase",
    "GeoJson",
    "Geoprocessing Package",
    "Geoprocessing Sample",
    "Image",
    "iWork Keynote",
    "iWork Numbers",
    "KML Collection",
    "KML",
    "Layer",
    "Layer File",
    "Layer Package",
    "Layout",
    "Locator Package",
    "Map Package",
    "Map Service Definition",
    "Map Template",
    "Microsoft Excel",
    "Microsoft Powerpoint",
    "Microsoft Visio",
    "Microsoft Word",
    "Notebook",
    "Operations Dashboard Add In",
    "PDF",
    "Pro Map",
    "Project Package",
    "Project Template",
    "Raster function template",
    "Rule Package",
    "Service Definition",
    "Shapefile",
    "Vector Tile Package",
    "Workflow Manager Package",
];
const downloadableTypeKeywords = ["Data"];
const apiTypes = ["Feature Service", "Map Service", "Image Service"];
// DEPRECATED: remove this at next breaking version
// this is currently used by hub-search and opendata-ui
// (in the dataset-display and content-library-engine)
// TODO: remove this once it is no longer used in those places
exports.categories = {
    app: app.concat(feedback),
    dataset,
    document,
    event,
    initiative,
    map,
    other,
    site,
    downloadableTypes,
    downloadableTypeKeywords,
    apiTypes,
};
// TODO: move this function and supporting arrays to another module
/**
 * Is the item type downloadable in the Hub app
 * @param item ArcGIS item with type and type keywords
 */
function isDownloadable(item) {
    return (downloadableTypes.indexOf(item.type) !== -1 ||
        (item.typeKeywords &&
            downloadableTypeKeywords.some((downloadableTypeKeyword) => item.typeKeywords.some((typeKeyword) => typeKeyword === downloadableTypeKeyword))));
}
exports.isDownloadable = isDownloadable;
//# sourceMappingURL=categories.js.map