import { ItemOrServerEnrichment } from "../../items/_enrichments";
/**
 * @private
 */
export interface IIncludeSpec {
    /**
     * The backing enrichment to fetch - group, data, metadata etc
     */
    enrichment: ItemOrServerEnrichment;
    /**
     * The Path in the backing entity to pluck out
     * If not specified, the entire entity will be returned
     */
    path: string;
    /**
     * Property name to use when attaching the information
     * to the search result object
     */
    prop?: string;
}
/**
 * Parse an IncludeSpec from the include string
 * Include String structure:
 * - `enrichment{.deep.path} AS propertyName`
 *
 * Examples
 * - `server.layers.0.name as layerName` -> use the `server` enrichment, extract the name of the first layer and attach that as `layerName`
 * - `server.layers` ->  use the `server` enrichment, attach the `layers` array as `layers`
 * @param include
 * @returns
 */
export declare function parseInclude(include: string): IIncludeSpec;
