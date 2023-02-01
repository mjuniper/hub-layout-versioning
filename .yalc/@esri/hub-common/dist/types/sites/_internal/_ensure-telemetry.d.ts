import { IDraft, IModel } from "../../types";
/**
 * Add telemetry config object
 * @private
 * @param {object} model Site Model
 * @returns {object}
 */
export declare function _ensureTelemetry<T extends IModel | IDraft>(model: T): T;
