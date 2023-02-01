import { IHubRequestOptions, IModel } from "../../types";
/**
 * Given two site models, determine the domain changes and apply them
 * @param currentModel
 * @param updatedModel
 * @param requestOptions
 * @private
 */
export declare function handleDomainChanges(updatedModel: IModel, currentModel: IModel, requestOptions: IHubRequestOptions): Promise<any[]>;
