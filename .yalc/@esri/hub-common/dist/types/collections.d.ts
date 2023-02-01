/**
 * Get the Hub collection for a given item type
 * @param itemType The ArcGIS [item type](https://developers.arcgis.com/rest/users-groups-and-items/items-and-item-types.htm).
 * @returns the Hub collection of a given item type.
 * @private
 */
export declare const getCollection: (type?: string) => string;
/**
 * The converse of getCollection, returns associated types of provided collection
 * @param collection The Hub collection
 * @returns An array of types or undefined if collection is not found
 * @private
 */
export declare const getCollectionTypes: (collection?: string) => string[];
export declare const collections: {
    [key: string]: string[];
};
