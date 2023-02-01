import { IArcGISContext } from "../ArcGISContext";
import { EntityType, IHubCollection, IHubSearchOptions, IHubSearchResponse, IHubSearchResult, IQuery } from "./types";
/**
 * Collection Class
 *
 * Abstracts searching a Collection
 *
 * For more information, check out the [Catalog & Collection Guide](/hub.js/guides/concepts/catalog-collection/)
 */
export declare class Collection implements IHubCollection {
    private _context;
    private _collection;
    private constructor();
    /**
     * Create an instance of a Collection from a JSON object
     * @param collection
     * @param context
     * @returns
     */
    static fromJson(collection: IHubCollection, context: IArcGISContext): Collection;
    /**
     * Return the JSON object backing the instance
     * @returns
     */
    toJson(): IHubCollection;
    get label(): string;
    get key(): string;
    get include(): string[];
    get scope(): IQuery;
    get sortField(): string;
    get sortDirection(): "asc" | "desc";
    get targetEntity(): EntityType;
    /**
     * Search the collection using a string or IQuery
     * @param query
     * @param options
     * @returns
     */
    search(query: string | IQuery, options?: IHubSearchOptions): Promise<IHubSearchResponse<IHubSearchResult>>;
}
