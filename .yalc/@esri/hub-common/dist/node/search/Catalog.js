"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catalog = void 0;
const ArcGISContextManager_1 = require("../ArcGISContextManager");
const HubError_1 = require("../HubError");
const util_1 = require("../util");
const utils_1 = require("../utils");
const Collection_1 = require("./Collection");
const fetchCatalog_1 = require("./fetchCatalog");
const hubSearch_1 = require("./hubSearch");
const upgradeCatalogSchema_1 = require("./upgradeCatalogSchema");
/**
 * Catalog Class
 *
 * Abstracts working with Catalogs and fetching collections with
 * the correct scope applied.
 *
 * For more information, check out the [Catalog & Collection Guide](/hub.js/guides/concepts/catalog-collection/)
 */
class Catalog {
    // internal - use static factory methods
    constructor(catalog, context) {
        this._containsCache = {};
        this._catalog = catalog;
        this._context = context;
    }
    /**
     * Create a Catalog instance from a site url or itemId
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
            const mgr = await ArcGISContextManager_1.ArcGISContextManager.create();
            context = mgr.context;
        }
        // fetch the catalog
        const fetched = await fetchCatalog_1.fetchCatalog(identifier, context.hubRequestOptions);
        // return an instance
        return new Catalog(fetched, context);
    }
    /**
     * Create a Catalog instance from a Catalog Definition Json object
     * @param json
     * @param context
     * @returns
     */
    static fromJson(json, context) {
        // ensure it's in the latest structure
        const catalog = upgradeCatalogSchema_1.upgradeCatalogSchema(json);
        return new Catalog(catalog, context);
    }
    /**
     * Return the JSON object backing the instance
     * @returns
     */
    toJson() {
        return util_1.cloneObject(this._catalog);
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
        // TODO: This needs to be much smarter in terms of merging
        // existing filters with the new ones. Basically this
        // hides very little complexity from the developer
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
        return utils_1.mapBy("key", this.collections);
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
            const clone = util_1.cloneObject(json);
            const catalogScope = this.getScope(clone.scope.targetEntity);
            if (catalogScope === null || catalogScope === void 0 ? void 0 : catalogScope.filters) {
                clone.scope.filters = [...clone.scope.filters, ...catalogScope.filters];
            }
            return Collection_1.Collection.fromJson(clone, this._context);
        }
        else {
            throw new HubError_1.default("getCollection", `Collection "${name}" is not present in the Catalog`);
        }
    }
    /**
     * Search for Items
     * Will throw if the Catalog does not have a scope defined for items
     * @param query
     * @param options
     * @returns
     */
    async searchItems(query, options) {
        if (!options) {
            options = this.getDefaultSearchOptions("item");
        }
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
     * Does the Catalog contain a specific piece of content?
     * @param identifier id or slug of the content
     * @param options entityType if known; otherwise will execute one search for each scope
     * @returns
     */
    async contains(identifier, options) {
        const start = Date.now();
        const catalog = this._catalog;
        // check if we have cached results for this identifier
        if (this._containsCache[identifier]) {
            const cachedResult = util_1.cloneObject(this._containsCache[identifier]);
            cachedResult.duration = Date.now() - start;
            return Promise.resolve(cachedResult);
        }
        else {
            // construct the response
            const response = {
                identifier,
                isContained: false,
            };
            // construct the predicate
            const pred = {};
            if (utils_1.isGuid(identifier)) {
                pred.id = identifier;
            }
            else {
                // treat as slug
                pred.typekeywords = `slug|${identifier}`;
            }
            // construct the queries
            const queries = [];
            if (options.entityType) {
                if (this.scopes[options.entityType]) {
                    queries.push({
                        targetEntity: options.entityType,
                        filters: [{ predicates: [pred] }],
                    });
                }
                else {
                    // no scope for this entity type, thus it cannot be in the catalog
                    response.duration = Date.now() - start;
                    this._containsCache[identifier] = response;
                    return Promise.resolve(response);
                }
            }
            else {
                // Construct a query for each scope
                Object.keys(catalog.scopes).forEach((type) => {
                    queries.push({
                        targetEntity: type,
                        filters: [{ predicates: [pred] }],
                    });
                });
            }
            // execute the queries
            const results = await Promise.all(queries.map((q) => 
            // We set num to be 10 to account for api not doing exact matching on slugs
            this.search(q, { targetEntity: q.targetEntity, num: 10 })));
            // if any of the queries returned a result, then the entity is contained
            response.isContained = results.reduce((isContained, queryResponse) => {
                if (queryResponse.results.length) {
                    if (pred.id) {
                        isContained = true;
                    }
                    else {
                        // slug based search, which is not exact,
                        // so we manually verify the exact slug matches
                        isContained = queryResponse.results.reduce((slugKeywordPresent, entry) => {
                            if (entry.typeKeywords.includes(pred.typekeywords)) {
                                slugKeywordPresent = true;
                            }
                            return slugKeywordPresent;
                        }, false);
                    }
                }
                return isContained;
            }, false);
            response.duration = Date.now() - start;
            // add to cache...
            this._containsCache[identifier] = response;
            // return the response
            return response;
        }
    }
    /**
     * Search for Groups
     * Will throw if the Catalog does not have a scope defined for groups
     * @param query
     * @param options
     * @returns
     */
    async searchGroups(query, options) {
        if (!options) {
            options = this.getDefaultSearchOptions("group");
        }
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
    async searchUsers(query, options = {}) {
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
            const qryClone = util_1.cloneObject(qry);
            const optsClone = util_1.cloneObject(options);
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
    async search(query, options) {
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
            qry = util_1.cloneObject(query);
        }
        // Now merge in catalog scope level filters
        qry.filters = [...qry.filters, ...this.getScope(targetEntity).filters];
        const opts = util_1.cloneObject(options);
        // An Catalog instance always uses the context so we remove/replace any passed in auth
        delete opts.authentication;
        opts.requestOptions = this._context.hubRequestOptions;
        return hubSearch_1.hubSearch(qry, opts);
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
    getDefaultSearchOptions(type) {
        return {
            targetEntity: type,
            num: 10,
            start: 1,
            requestOptions: this._context.hubRequestOptions,
        };
    }
}
exports.Catalog = Catalog;
//# sourceMappingURL=Catalog.js.map