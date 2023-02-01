"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFamilyTypes = exports.getFamily = void 0;
const collections_1 = require("../collections");
// private helper functions
function collectionToFamily(collection) {
    const overrides = {
        other: "content",
        solution: "template",
    };
    return overrides[collection] || collection;
}
/**
 * return the Hub family given an item's type
 * @param type item type
 * @returns Hub family
 */
function getFamily(type) {
    let family;
    // override default behavior for the rows that are highlighted in yellow here:
    // https://esriis.sharepoint.com/:x:/r/sites/ArcGISHub/_layouts/15/Doc.aspx?sourcedoc=%7BADA1C9DC-4F6C-4DE4-92C6-693EF9571CFA%7D&file=Hub%20Routes.xlsx&nav=MTBfe0VENEREQzI4LUZFMDctNEI0Ri04NjcyLThCQUE2MTA0MEZGRn1fezIwMTIwMEJFLTA4MEQtNEExRC05QzA4LTE5MTAzOUQwMEE1RH0&action=default&mobileredirect=true&cid=df1c874b-c367-4cea-bc13-7bebfad3f2ac
    switch (type.toLowerCase()) {
        case "image service":
            family = "dataset";
            break;
        case "feature service":
        case "raster layer":
            // TODO: check if feature service has > 1 layer first?
            family = "map";
            break;
        case "microsoft excel":
            family = "document";
            break;
        case "cad drawing":
        case "feature collection template":
        case "report template":
            family = "content";
            break;
        case "hub project":
            family = "project";
            break;
        default:
            // by default derive from collection
            family = collectionToFamily(collections_1.getCollection(type));
    }
    return family;
}
exports.getFamily = getFamily;
/**
 * return the types associated with a provided Hub Family
 * Overrides are provided to match getFamily implementation
 * @param type item type
 * @returns Hub family
 */
function getFamilyTypes(family) {
    let types;
    // override default behavior for the rows that are highlighted in yellow here:
    // https://esriis.sharepoint.com/:x:/r/sites/ArcGISHub/_layouts/15/Doc.aspx?sourcedoc=%7BADA1C9DC-4F6C-4DE4-92C6-693EF9571CFA%7D&file=Hub%20Routes.xlsx&nav=MTBfe0VENEREQzI4LUZFMDctNEI0Ri04NjcyLThCQUE2MTA0MEZGRn1fezIwMTIwMEJFLTA4MEQtNEExRC05QzA4LTE5MTAzOUQwMEE1RH0&action=default&mobileredirect=true&cid=df1c874b-c367-4cea-bc13-7bebfad3f2ac
    switch (family.toLowerCase()) {
        case "content":
            types = collections_1.getCollectionTypes("other");
            types = types.concat([
                "CAD Drawing",
                "Feature Collection Template",
                "Report Template",
            ]);
            break;
        case "template":
            types = [
                ...collections_1.getCollectionTypes("template"),
                ...collections_1.getCollectionTypes("solution"),
            ];
            break;
        case "dataset":
            types = collections_1.getCollectionTypes(family.toLowerCase()).filter((type) => type !== "Feature Collection Template" &&
                type !== "Feature Service" &&
                type !== "Raster Layer" &&
                type !== "Microsoft Excel");
            types = types.concat("Image Service");
            break;
        case "map":
            types = collections_1.getCollectionTypes(family.toLowerCase()).filter((type) => type !== "Image Service");
            types = types.concat(["Feature Service", "Raster Layer"]);
            break;
        case "document":
            types = collections_1.getCollectionTypes(family.toLowerCase()).filter((type) => type !== "CAD Drawing" && type !== "Report Template");
            types = types.concat("Microsoft Excel");
            break;
        case "project":
            types = ["Hub Project"];
            break;
        default:
            types = collections_1.getCollectionTypes(family.toLowerCase());
    }
    return types;
}
exports.getFamilyTypes = getFamilyTypes;
//# sourceMappingURL=get-family.js.map