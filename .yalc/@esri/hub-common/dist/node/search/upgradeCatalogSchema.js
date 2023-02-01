"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradeCatalogSchema = void 0;
const objects_1 = require("../objects");
const util_1 = require("../util");
const CATALOG_SCHEMA_VERSION = 1.0;
/**
 * Apply schema upgrades to Catalog objects
 * @param catalog
 * @returns
 */
function upgradeCatalogSchema(catalog) {
    let clone = util_1.cloneObject(catalog);
    if (objects_1.getProp(clone, "schemaVersion") === CATALOG_SCHEMA_VERSION) {
        return clone;
    }
    else {
        // apply migrations in order
        clone = applyCatalogSchema(clone);
        return clone;
    }
}
exports.upgradeCatalogSchema = upgradeCatalogSchema;
/**
 * Apply the Catalog schema to the original, unversioned
 * site catalog objects
 * @param original
 * @returns
 */
function applyCatalogSchema(original) {
    if (objects_1.getProp(original, "schemaVersion") > 1.0) {
        return original;
    }
    else {
        const catalog = {
            schemaVersion: 1,
            title: "Default Catalog",
            scopes: {
                item: {
                    targetEntity: "item",
                    filters: [],
                },
            },
            collections: [],
        };
        const rawGroups = objects_1.getProp(original, "groups");
        let groups = [];
        if (Array.isArray(rawGroups) && rawGroups.length) {
            groups = rawGroups;
        }
        else if (typeof rawGroups === "string") {
            groups = [rawGroups];
        }
        if (groups.length) {
            catalog.scopes.item.filters.push({
                predicates: [{ group: groups }],
            });
        }
        return catalog;
    }
}
//# sourceMappingURL=upgradeCatalogSchema.js.map