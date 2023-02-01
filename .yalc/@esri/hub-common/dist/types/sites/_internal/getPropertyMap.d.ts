import { IPropertyMap } from "../../core/_internal/PropertyMapper";
/**
 * Returns an Array of IPropertyMap objects
 * We could define these directly, but since the
 * properties of IHubSite map directly to properties
 * on item or data, it's slightly less verbose to
 * generate the structure.
 * @returns
 */
export declare function getPropertyMap(): IPropertyMap[];
