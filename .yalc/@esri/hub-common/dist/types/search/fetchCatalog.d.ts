import { IHubRequestOptions } from "../types";
import { IHubCatalog } from "./types/IHubCatalog";
/**
 * Fetch a IHubCatalog from a backing item.
 * This will apply schema upgrades to the structure
 * @param identifier
 * @param requestOptions
 * @returns
 */
export declare function fetchCatalog(identifier: string, requestOptions: IHubRequestOptions): Promise<IHubCatalog>;
