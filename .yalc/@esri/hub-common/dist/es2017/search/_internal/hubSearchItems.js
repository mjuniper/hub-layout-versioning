import { setProp } from "../../objects";
import { cloneObject } from "../../util";
import { expandApi } from "../utils";
// ##    ##  #######  ######## ########
// ###   ## ##     ##    ##    ##
// ####  ## ##     ##    ##    ##
// ## ## ## ##     ##    ##    ######
// ##  #### ##     ##    ##    ##
// ##   ### ##     ##    ##    ##
// ##    ##  #######     ##    ########
//
// Since Hub API is still in flux, there is no code coverage for this file
/**
 * @private
 * Execute item search against the Hub API
 * @param filter
 * @param options
 * @returns
 */
/* istanbul ignore next */
export async function hubSearchItems(filters, options) {
    var _a;
    // TODO: better mapping from api to apiUrl
    const api = expandApi(options.api || "hub");
    const apiUrl = `${api.url}/api/items/beta/search`;
    // Purge filterType from the filters array
    const cleanFilters = [];
    filters.forEach((block) => {
        const b = {
            operation: block.operation,
            filters: block.filters.map((f) => {
                const c = cloneObject(f);
                delete c.filterType;
                return c;
            }),
        };
        cleanFilters.push(b);
    });
    const searchRequest = {
        q: cleanFilters,
        options: {
            num: options.num || 10,
            start: options.start || 1,
            sortField: options.sortField,
            sortOrder: options.sortOrder,
        },
    };
    // Add optional props via setProp b/c typescript really does not like
    // adding properties after defining an object
    if ((_a = options.aggFields) === null || _a === void 0 ? void 0 : _a.length) {
        const aggs = [
            {
                mode: "terms",
                fields: options.aggFields,
                num: options.aggLimit || 10,
            },
        ];
        setProp("aggregations", aggs, searchRequest.options);
    }
    if (options.authentication) {
        const session = {
            token: options.authentication.token,
            portal: options.authentication.portal,
        };
        setProp("session", session, searchRequest.options);
    }
    const opts = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(searchRequest),
    };
    try {
        const raw = await fetch(apiUrl, opts);
        const json = await raw.json();
        let token;
        if (options.authentication) {
            const us = options.authentication;
            token = us.token;
        }
        const tokenizeThubmnailUrl = (entry) => {
            if (token && entry.attributes.access !== "public") {
                entry.attributes.thumbnailUrl = `${entry.attributes.thumbnailUrl}?token=${token}`;
            }
            return entry;
        };
        json.data = json.data.map(tokenizeThubmnailUrl);
        // convert items to IHubSerchResult
        const conversion = (entry) => {
            return hubContentToSearchResult(jsonApiToHubContent(entry));
        };
        const results = await Promise.all(json.data.map(conversion));
        const facets = convertHubResponseToFacets(json);
        // now transform into a IHubSearchResponse
        const response = {
            total: json.meta.total,
            results,
            facets,
            hasNext: json.meta.hasNext,
            next: () => {
                // tslint:disable-next-line
                Promise.resolve(null);
            },
        };
        return Promise.resolve(response);
    }
    catch (ex) {
        // TODO: Turn into a formal error
        throw ex;
    }
}
/**
 * Re-structure a jsonApi data entry into a flat object cast into
 * IHubContent
 * @param data
 * @returns
 */
/* istanbul ignore next */
export function jsonApiToHubContent(data) {
    const content = cloneObject(data.attributes);
    content.id = data.id;
    return content;
}
/* istanbul ignore next */
export function hubContentToSearchResult(content) {
    const result = {
        access: content.access,
        id: content.id,
        type: content.type,
        name: content.name,
        owner: content.owner,
        summary: content.snippet || content.description,
        createdDate: new Date(content.createdDate),
        createdDateSource: content.createdDateSource,
        updatedDate: new Date(content.updatedDate),
        updatedDateSource: content.updatedDateSource,
        thumbnailUrl: content.thumbnailUrl,
        metadata: [],
        family: content.family,
        urls: {
            portalHome: "not-implemented",
            relative: "not-implemented",
        },
    };
    // TODO: Per-type plucking of props into the `meta` hash for use in the card components
    return Promise.resolve(result);
}
/* istanbul ignore next */
export function convertHubResponseToFacets(response, operation = "OR") {
    var _a;
    const result = [];
    if ((_a = response.meta) === null || _a === void 0 ? void 0 : _a.aggregations) {
        const meta = response.meta;
        meta.aggregations.forEach((entry) => {
            // Dyanmic facets typically "AND" so we are refining
            const facet = {
                label: entry.field,
                key: entry.field,
                aggField: entry.field,
                display: "multi-select",
                operation,
            };
            const options = [];
            entry.values.forEach((fv) => {
                const filter = {
                    filterType: "item",
                };
                // construct the filter based on the operation
                const matchKey = operation === "OR" ? "any" : "all";
                const filterMatchOption = {};
                filterMatchOption[matchKey] = [fv.value];
                filter[entry.field] = filterMatchOption;
                // construct the FacetOption
                const fo = {
                    label: `${fv.value} (${fv.count})`,
                    key: fv.value,
                    count: fv.count,
                    selected: false,
                    filters: [filter],
                };
                options.push(fo);
            });
            facet.options = options;
            result.push(facet);
        });
    }
    return result;
}
//# sourceMappingURL=hubSearchItems.js.map