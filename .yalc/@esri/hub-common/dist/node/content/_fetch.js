"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchHubEnrichmentsById = exports.fetchHubEnrichmentsBySlug = exports.getContentEnrichments = void 0;
const _enrichments_1 = require("../items/_enrichments");
const request_1 = require("../request");
const urls_1 = require("../urls");
const util_1 = require("../util");
const utils_1 = require("../utils");
const compose_1 = require("./compose");
const get_family_1 = require("./get-family");
const slugs_1 = require("./slugs");
// TODO: need to fetch data for client-side layer views as well
// determine if we should fetch data for an item
const shouldFetchData = (item) => {
    const type = compose_1.normalizeItemType(item);
    const family = get_family_1.getFamily(type);
    const dataFamilies = ["template", "solution"];
    const dataTypes = ["Web Map", "Web Scene"];
    return utils_1.includes(dataFamilies, family) || utils_1.includes(dataTypes, type);
};
/**
 * get the default list of enrichments to fetch for content
 * @param item
 * @returns the default list of enrichments to fetch for content
 * @private
 */
exports.getContentEnrichments = (item) => {
    // we fetch these enrichments for all content types
    const enrichments = [
        "groupIds",
        "metadata",
        "ownerUser",
        "org",
    ];
    // we only fetch data for certain content
    if (shouldFetchData(item)) {
        enrichments.push("data");
    }
    // we fetch server and layers for map and feature services
    return urls_1.isMapOrFeatureServerUrl(item.url)
        ? enrichments.concat("server", "layers")
        : enrichments;
};
// build up request options to only include the above enrichments
// that we fetch from the Hub API, and to optionally filter by slug
const getHubEnrichmentsOptions = (requestOptions, slug) => {
    const opts = util_1.cloneObject(requestOptions);
    opts.params = Object.assign(Object.assign({}, opts.params), { 
        // TODO: we should fetch errors too
        // TODO: stop fetching recordCount at next breaking change
        "fields[datasets]": "slug,boundary,extent,recordCount,searchDescription,statistics" });
    if (slug) {
        opts.params["filter[slug]"] = slug;
    }
    return opts;
};
// extract the ids and enrichments from the Hub API response
const getDatasetEnrichments = (dataset) => {
    const { itemId, layerId: layerIdString } = slugs_1.parseDatasetId(dataset.id);
    const layerId = layerIdString && parseInt(layerIdString, 10);
    const { slug, boundary, extent, recordCount, searchDescription, statistics } = dataset.attributes;
    return {
        itemId,
        layerId,
        slug,
        boundary,
        extent,
        recordCount,
        searchDescription,
        statistics,
    };
};
/**
 * fetch enrichment from the Hub API by slug
 * @param slug
 * @param requestOptions
 * @returns enrichments from the Hub API (slug, boundary, statistic, etc)
 * @private
 */
exports.fetchHubEnrichmentsBySlug = async (slug, requestOptions) => {
    // NOTE: we don't catch errors here b/c
    // searching by slug is the first step in fetchContent()
    // and if this fails, we don't have an id to fall back on
    const response = await request_1.hubApiRequest(`/datasets`, getHubEnrichmentsOptions(requestOptions, slug));
    return getDatasetEnrichments(response.data[0]);
};
/**
 * fetch enrichment from the Hub API by id
 * @param slug
 * @param requestOptions
 * @returns enrichments from the Hub API (slug, boundary, statistic, etc)
 * @private
 */
exports.fetchHubEnrichmentsById = async (hubId, requestOptions) => {
    try {
        const response = await request_1.hubApiRequest(`/datasets/${hubId}`, getHubEnrichmentsOptions(requestOptions));
        return getDatasetEnrichments(response.data);
    }
    catch (e) {
        // dataset record not found, just log the error
        // b/c we can still look up the item and enrichments by id
        return { errors: _enrichments_1.getEnrichmentErrors(e) };
    }
};
//# sourceMappingURL=_fetch.js.map