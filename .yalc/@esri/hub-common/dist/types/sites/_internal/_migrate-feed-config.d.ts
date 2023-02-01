import { IModel } from "../../types";
/**
 * Migrates the site so it can store configurations for multiple feed formats
 * (dcat-us-1.1, dcat-ap-2.0.1, etc.). If the site has an existing custom
 * configuration for dcat-us 1.1, a copy of that configuration will be modified
 * to use values from the v3 api instead of values from the index.
 *
 * Structural Impacts:
 * - site.data.feeds will be added.
 * - site.data.feeds.dcatUS11 will be added if site.data.values.dcatConfig exists.
 *
 * @param {object} model Site Model
 * @private
 */
export declare function _migrateFeedConfig(model: IModel): IModel;
