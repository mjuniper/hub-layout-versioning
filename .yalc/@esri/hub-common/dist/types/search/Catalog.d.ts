import { IArcGISContext } from "../ArcGISContext";
import { Collection } from "./Collection";
import { EntityType, ISearchResponseHash, IContainsOptions, IContainsResponse, IHubSearchOptions, IHubSearchResponse, IHubSearchResult, ICatalogScope, IHubCatalog, IQuery } from "./types";
/**
 * Catalog Class
 *
 * Abstracts working with Catalogs and fetching collections with
 * the correct scope applied.
 *
 * For more information, check out the [Catalog & Collection Guide](/hub.js/guides/concepts/catalog-collection/)
 */
export declare class Catalog implements IHubCatalog {
    private _context;
    private _catalog;
    private _containsCache;
    private constructor();
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
    static init(identifier: string, context?: IArcGISContext): Promise<Catalog>;
    /**
     * Create a Catalog instance from a Catalog Definition Json object
     * @param json
     * @param context
     * @returns
     */
    static fromJson(json: IHubCatalog, context?: IArcGISContext): Catalog;
    /**
     * Return the JSON object backing the instance
     * @returns
     */
    toJson(): IHubCatalog;
    /**
     * Return the schema version
     */
    get schemaVersion(): number;
    /**
     * Title getter
     */
    get title(): string;
    /**
     * Title setter
     */
    set title(v: string);
    /**
     * Return the existing scopes hash
     */
    get scopes(): ICatalogScope;
    /**
     * Return an array of the entity types available in this Catalog
     */
    get availableScopes(): EntityType[];
    /**
     * Get the scope's query for a particular entity type
     * @param type
     * @returns
     */
    getScope(type: EntityType): IQuery | undefined;
    /**
     * Set the scope for a specific entity type
     * @param type
     * @param query
     */
    setScope(type: EntityType, query: IQuery): void;
    /**
     * Get the collections array. Returns simple objects not Collection instances
     */
    get collections(): import("./types").IHubCollection[];
    /**
     * Get the names of the collections
     */
    get collectionNames(): string[];
    /**
     * Get a Collection instance by name
     * @param name
     * @returns
     */
    getCollection(name: string): Collection;
    /**
     * Search for Items
     * Will throw if the Catalog does not have a scope defined for items
     * @param query
     * @param options
     * @returns
     */
    searchItems(query: string | IQuery, options?: IHubSearchOptions): Promise<IHubSearchResponse<IHubSearchResult>>;
    /**
     * Does the Catalog contain a specific piece of content?
     * @param identifier id or slug of the content
     * @param options entityType if known; otherwise will execute one search for each scope
     * @returns
     */
    contains(identifier: string, options: IContainsOptions): Promise<IContainsResponse>;
    /**
     * Search for Groups
     * Will throw if the Catalog does not have a scope defined for groups
     * @param query
     * @param options
     * @returns
     */
    searchGroups(query: string | IQuery, options?: IHubSearchOptions): Promise<IHubSearchResponse<IHubSearchResult>>;
    /**
     * Search for Users
     * Will throw if the Catalog does not have a scope defined for users
     * @param query
     * @param options
     * @returns
     */
    searchUsers(query: string | IQuery, options?: IHubSearchOptions): Promise<IHubSearchResponse<IHubSearchResult>>;
    /**
     * Execute a search against all the collections in the Catalog
     * @param query
     * @param options
     * @returns
     */
    searchCollections(query: string, options?: IHubSearchOptions): Promise<ISearchResponseHash>;
    /**
     * Execute a search against all the scopes in the Catalog
     * @param query
     * @param options
     * @returns
     */
    searchScopes(query: string, options?: IHubSearchOptions): Promise<ISearchResponseHash>;
    /**
     * Execute a search against the Catalog as a whole
     * @param query
     * @param targetEntity
     * @returns
     */
    private search;
    /**
     * Construct an empty result. Returned when a search is performed against an entity type that
     * does not have a scope defined.
     * @returns
     */
    private getEmptyResult;
    private getDefaultSearchOptions;
}
