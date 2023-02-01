"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Collection = void 0;
const hubSearch_1 = require("./hubSearch");
const util_1 = require("../util");
/**
 * Collection Class
 *
 * Abstracts searching a Collection
 *
 * For more information, check out the [Catalog & Collection Guide](/hub.js/guides/concepts/catalog-collection/)
 */
class Collection {
    constructor(collection, context) {
        this._collection = collection;
        this._context = context;
    }
    /**
     * Create an instance of a Collection from a JSON object
     * @param collection
     * @param context
     * @returns
     */
    static fromJson(collection, context) {
        return new Collection(collection, context);
    }
    /**
     * Return the JSON object backing the instance
     * @returns
     */
    toJson() {
        return util_1.cloneObject(this._collection);
    }
    // Getters
    get label() {
        return this._collection.label;
    }
    get key() {
        return this._collection.key;
    }
    get include() {
        return this._collection.include || [];
    }
    get scope() {
        return this._collection.scope;
    }
    get sortField() {
        return this._collection.sortField || "title";
    }
    get sortDirection() {
        return this._collection.sortDirection || "asc";
    }
    get targetEntity() {
        return this._collection.targetEntity;
    }
    /**
     * Search the collection using a string or IQuery
     * @param query
     * @param options
     * @returns
     */
    async search(query, options = {}) {
        let qry;
        if (typeof query === "string") {
            // construct a query from that...
            qry = {
                targetEntity: this._collection.targetEntity,
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
            qry = query;
        }
        // TODO: What should happen when a Query is passed in that has a targetEntity that doesn't match the collection's targetEntity?
        // merge the passed in query w/ the scope
        qry.filters = [...qry.filters, ...this.scope.filters];
        const opts = util_1.cloneObject(options);
        opts.requestOptions = this._context.hubRequestOptions;
        // inject default sort info if not specified
        opts.sortField = options.sortField || this.sortField;
        opts.sortOrder = options.sortOrder || this.sortDirection;
        // inject default includes if not specified
        opts.include = options.include || this.include;
        // execute the search and return results
        return hubSearch_1.hubSearch(qry, opts);
    }
}
exports.Collection = Collection;
//# sourceMappingURL=Collection.js.map