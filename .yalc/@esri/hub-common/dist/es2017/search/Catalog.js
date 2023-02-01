import { ArcGISContextManager } from "../ArcGISContextManager";
import HubError from "../HubError";
import { cloneObject } from "../util";
import { mapBy } from "../utils";
import { Collection } from "./Collection";
import { fetchCatalog } from "./fetchCatalog";
import { hubSearch } from "./hubSearch";
import { upgradeCatalogSchema } from "./upgradeCatalogSchema";
/**
 * Catalog Class
 *
 * Abstracts working with Catalogs and fetching collections with
 * the correct scope applied.
 *
 * For more information, check out the [Catalog & Collection Guide](/hub.js/guides/concepts/catalog-collection/)
 */
export class Catalog {
    // internal - use static factory methods
    constructor(catalog, context) {
        this._catalog = catalog;
        this._context = context;
    }
    /**
     * Create a Collection instance from a Catalog json object, a site url or itemId
     * '''js
     * const catalog = await Catalog.create('https://site-org.hub.arcgis.com', context);
     * '''
     *
     * @param identifier
     * @param context
     * @returns
     */
    static async init(identifier, context) {
        // if context is not passed, create a default that point to AGO prod
        if (!context) {
            const mgr = await ArcGISContextManager.create();
            context = mgr.context;
        }
        // fetch the catalog
        const fetched = await fetchCatalog(identifier, context.hubRequestOptions);
        // return an instance
        return new Catalog(fetched, context);
    }
    /**
     * Create a Catalog instance from a Catalog Json object
     * @param json
     * @param context
     * @returns
     */
    static fromJson(json, context) {
        // ensure it's in the latest structure
        const catalog = upgradeCatalogSchema(json);
        return new Catalog(catalog, context);
    }
    /**
     * Return the JSON object backing the instance
     * @returns
     */
    toJson() {
        return cloneObject(this._catalog);
    }
    /**
     * Return the schema version
     */
    get schemaVersion() {
        return this._catalog.schemaVersion;
    }
    /**
     * Title getter
     */
    get title() {
        return this._catalog.title;
    }
    /**
     * Title setter
     */
    set title(v) {
        this._catalog.title = v;
    }
    /**
     * Return the existing scopes hash
     */
    get scopes() {
        return this._catalog.scopes;
    }
    /**
     * Return an array of the entity types available in this Catalog
     */
    get availableScopes() {
        return Object.keys(this.scopes);
    }
    /**
     * Get the scope's query for a particular entity type
     * @param type
     * @returns
     */
    getScope(type) {
        return this._catalog.scopes[type];
    }
    /**
     * Set the scope for a specific entity type
     * @param type
     * @param query
     */
    setScope(type, query) {
        this._catalog.scopes[type] = query;
    }
    /**
     * Get the collections array. Returns simple objects not Collection instances
     */
    get collections() {
        return this._catalog.collections || [];
    }
    /**
     * Get the names of the collections
     */
    get collectionNames() {
        return mapBy("key", this.collections);
    }
    /**
     * Get a Collection instance by name
     * @param name
     * @returns
     */
    getCollection(name) {
        const json = this.collections.find((entry) => entry.key === name);
        if (json) {
            // clone it then merge in the associated scope filter
            const clone = cloneObject(json);
            const catalogScope = this.getScope(clone.scope.targetEntity);
            if (catalogScope === null || catalogScope === void 0 ? void 0 : catalogScope.filters) {
                clone.scope.filters = [...clone.scope.filters, ...catalogScope.filters];
            }
            return Collection.fromJson(clone, this._context);
        }
        else {
            throw new HubError("getCollection", `Collection "${name}" is not present in the Catalog`);
        }
    }
    /**
     * Search for Items
     * Will throw if the Catalog does not have a scope defined for items
     * @param query
     * @param options
     * @returns
     */
    searchItems(query, options = {}) {
        if (!this.getScope("item")) {
            const result = this.getEmptyResult();
            result.messages = [
                {
                    code: "missingScope",
                    message: "Catalog does not have a scope for items",
                    data: {
                        scope: "item",
                    },
                },
            ];
            return Promise.resolve(result);
        }
        else {
            // ensure it's an item search
            options.targetEntity = "item";
            return this.search(query, options);
        }
    }
    /**
     * Search for Groups
     * Will throw if the Catalog does not have a scope defined for groups
     * @param query
     * @param options
     * @returns
     */
    searchGroups(query, options = {}) {
        if (!this.getScope("group")) {
            const result = this.getEmptyResult();
            result.messages = [
                {
                    code: "missingScope",
                    message: "Catalog does not have a scope for groups",
                    data: {
                        scope: "group",
                    },
                },
            ];
            return Promise.resolve(result);
        }
        else {
            // ensure it's an group search
            options.targetEntity = "group";
            return this.search(query, options);
        }
    }
    /**
     * Search for Users
     * Will throw if the Catalog does not have a scope defined for users
     * @param query
     * @param options
     * @returns
     */
    searchUsers(query, options = {}) {
        if (!this.getScope("user")) {
            const result = this.getEmptyResult();
            result.messages = [
                {
                    code: "missingScope",
                    message: "Catalog does not have a scope for user",
                    data: {
                        scope: "user",
                    },
                },
            ];
            return Promise.resolve(result);
        }
        else {
            // ensure it's an group search
            options.targetEntity = "user";
            return this.search(query, options);
        }
    }
    /**
     * Execute a search against all the collections in the Catalog
     * @param query
     * @param options
     * @returns
     */
    async searchCollections(query, options = {}) {
        // build a query
        const qry = {
            targetEntity: "item",
            filters: [
                {
                    predicates: [
                        {
                            term: query,
                        },
                    ],
                },
            ],
        };
        // iterate the colllections, issue searchs for each one
        const promiseKeys = [];
        const promises = this.collectionNames.map((name) => {
            const col = this.getCollection(name);
            promiseKeys.push(name);
            qry.targetEntity = col.targetEntity;
            return col.search(qry, options);
        });
        const responses = await Promise.all(promises);
        // merge the responses into the hash
        const hash = {};
        for (let i = 0; i < promiseKeys.length; i++) {
            hash[promiseKeys[i]] = responses[i];
        }
        return hash;
    }
    /**
     * Execute a search against all the scopes in the Catalog
     * @param query
     * @param options
     * @returns
     */
    async searchScopes(query, options = {}) {
        const qry = {
            targetEntity: "item",
            filters: [
                {
                    predicates: [
                        {
                            term: query,
                        },
                    ],
                },
            ],
        };
        // iterate the scopes, issue searchs for each one
        const promiseKeys = [];
        const promises = this.availableScopes.map((name) => {
            promiseKeys.push(name);
            // make clones
            const qryClone = cloneObject(qry);
            const optsClone = cloneObject(options);
            // set the target entity
            qryClone.targetEntity = name;
            optsClone.targetEntity = name;
            // return the search promise
            return this.search(qryClone, optsClone);
        });
        // wait for all the searches to complete
        const responses = await Promise.all(promises);
        // merge the responses into the hash
        const hash = {};
        for (let i = 0; i < promiseKeys.length; i++) {
            hash[promiseKeys[i]] = responses[i];
        }
        return hash;
    }
    /**
     * Execute a search against the Catalog as a whole
     * @param query
     * @param targetEntity
     * @returns
     */
    search(query, options) {
        const targetEntity = options.targetEntity;
        let qry;
        if (typeof query === "string") {
            qry = {
                targetEntity,
                filters: [
                    {
                        predicates: [
                            {
                                term: query,
                            },
                        ],
                    },
                ],
            };
        }
        else {
            qry = cloneObject(query);
        }
        // Now merge in catalog scope level filters
        qry.filters = [...qry.filters, ...this.getScope(targetEntity).filters];
        const opts = cloneObject(options);
        // An Catalog instance always uses the context so we remove/replace any passed in auth
        delete opts.authentication;
        opts.requestOptions = this._context.hubRequestOptions;
        return hubSearch(qry, opts);
    }
    /**
     * Construct an empty result. Returned when a search is performed against an entity type that
     * does not have a scope defined.
     * @returns
     */
    getEmptyResult() {
        return {
            results: [],
            total: 0,
            hasNext: false,
            next: null,
        };
    }
}
//# sourceMappingURL=Catalog.js.map