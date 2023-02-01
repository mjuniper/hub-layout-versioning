"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enrichSiteSearchResult = exports.convertItemToSite = exports.convertModelToSite = exports.fetchSite = exports.deleteSite = exports.destroySite = exports.updateSite = exports.createSite = exports.ENTERPRISE_SITE_ITEM_TYPE = exports.HUB_SITE_ITEM_TYPE = void 0;
const arcgis_rest_portal_1 = require("@esri/arcgis-rest-portal");
const index_1 = require("../index");
// having a separate import is important for testing
const fetchSiteModel_1 = require("./fetchSiteModel");
const PropertyMapper_1 = require("../core/_internal/PropertyMapper");
const _internal_1 = require("./_internal");
const _enrichments_1 = require("../items/_enrichments");
const parseInclude_1 = require("../search/_internal/parseInclude");
const _internal_2 = require("../content/_internal");
const applyPermissionMigration_1 = require("./_internal/applyPermissionMigration");
const computeProps_1 = require("./_internal/computeProps");
const getPropertyMap_1 = require("./_internal/getPropertyMap");
exports.HUB_SITE_ITEM_TYPE = "Hub Site Application";
exports.ENTERPRISE_SITE_ITEM_TYPE = "Site Application";
/**
 * Default values of a IHubSite
 */
const DEFAULT_SITE = {
    name: "No title provided",
    tags: [],
    typeKeywords: ["Hub Site", "hubSite", "DELETEMESITE"],
    classicCapabilities: [
        "api_explorer",
        "pages",
        "my_data",
        "social_logins",
        "json_chart_card",
        "document_iframes",
        "items_view",
        "app_page",
        "underlinedLinks",
        "globalNav",
        "socialSharing",
    ],
    catalog: {
        schemaVersion: 1,
    },
    subdomain: "",
    defaultHostname: "",
    customHostname: "",
    clientId: "",
    map: null,
    feeds: {},
    pages: [],
    theme: null,
    contentViews: {
        sidePanelOpen: {
            app: true,
            map: true,
            dataset: true,
            document: true,
            feedback: true,
        },
    },
};
/**
 * Default values for a new HubSite Model
 */
const DEFAULT_SITE_MODEL = {
    item: {
        // type: intentionally left out as we need to
        // set that based on portal/enterprise
        title: "No Title Provided",
        description: "No Description Provided",
        snippet: "",
        tags: [],
        typeKeywords: ["Hub Site", "hubSite", "DELETEMESITE"],
        properties: {
            slug: "",
            orgUrlKey: "",
            defaultHostname: "",
            customHostname: "",
            clientId: "",
            subdomain: "",
            schemaVersion: 1.5,
        },
        url: "",
    },
    data: {
        catalog: {
            groups: [],
        },
        feeds: {},
        values: {
            title: "",
            defaultHostname: "",
            customHostname: "",
            subdomain: "",
            faviconUrl: "",
            uiVersion: "2.4",
            clientId: "",
            map: {
                basemaps: {},
            },
            defaultExtent: {},
            pages: [],
            theme: {},
            layout: {
                sections: [],
                header: {
                    component: {
                        name: "site-header",
                        settings: {
                            fullWidth: false,
                            iframeHeight: "150px",
                            iframeUrl: "",
                            links: [],
                            logoUrl: "",
                            title: "default site",
                            markdown: "",
                            headerType: "default",
                            schemaVersion: 3,
                            showLogo: true,
                            showTitle: true,
                            logo: {
                                display: {},
                                state: "valid",
                            },
                            shortTitle: "",
                            menuLinks: [],
                            socialLinks: {
                                facebook: {},
                                twitter: {},
                                instagram: {},
                                youtube: {},
                            },
                        },
                    },
                    showEditor: false,
                },
                footer: {
                    component: {
                        name: "site-footer",
                        settings: {
                            footerType: "none",
                            markdown: "",
                            schemaVersion: 2.1,
                        },
                    },
                    showEditor: false,
                },
            },
            contentViews: {
                sidePanelOpen: {
                    app: true,
                    map: true,
                    dataset: true,
                    document: true,
                    feedback: true,
                },
            },
        },
    },
};
// TODO: Add OperationStack & Error Handling
/**
 * Create a new Hub Site
 *
 * Minimum properties are `name` and `org`
 * @param partialSite
 * @param requestOptions
 */
async function createSite(partialSite, requestOptions) {
    const site = Object.assign(Object.assign({}, DEFAULT_SITE), partialSite);
    const portal = requestOptions.portalSelf;
    // Set the type based on the environment we are working in
    site.type = requestOptions.isPortal
        ? exports.ENTERPRISE_SITE_ITEM_TYPE
        : exports.HUB_SITE_ITEM_TYPE;
    // Create a slug from the title if one is not passed in
    if (!site.slug) {
        site.slug = index_1.constructSlug(site.name, site.orgUrlKey);
    }
    // Ensure slug is  unique
    // site.slug = await getUniqueSlug({ slug: site.slug }, requestOptions);
    // add slug to keywords
    site.typeKeywords = index_1.setSlugKeyword(site.typeKeywords, site.slug);
    if (!site.subdomain) {
        site.subdomain = index_1.slugify(site.name);
    }
    site.subdomain = await index_1.ensureUniqueDomainName(site.subdomain, requestOptions);
    // Domains
    if (!requestOptions.isPortal) {
        // now that we know the subdomain is available, set the defaultHostname
        site.defaultHostname = `${site.subdomain}-${portal.urlKey}.${index_1.stripProtocol(index_1.getHubApiUrl(requestOptions))}`;
        // set the url
        site.url = `https://${site.customHostname ? site.customHostname : site.defaultHostname}`;
    }
    else {
        // Portal Sites use subdomain in hash based router
        site.typeKeywords.push(`hubsubdomain|${site.subdomain}`.toLowerCase());
        site.url = `${requestOptions.authentication.portal.replace(`/sharing/rest`, `/apps/sites`)}/#/${site.subdomain}`;
    }
    // Note:  We used to use adlib for this, but it's much harder to
    // use templates with typescript. i.e. you can't assign a string template
    // to a property defined as `IExtent` without using `as unknown as ...`
    // which basically removes typechecking
    site.orgUrlKey = portal.urlKey;
    // override only if not set...
    if (!site.theme) {
        site.theme = index_1.getOrgDefaultTheme(portal);
    }
    if (!site.defaultExtent) {
        site.defaultExtent = portal.defaultExtent;
    }
    if (!site.culture) {
        site.culture = portal.culture;
    }
    // pull the basemap from portalSelf
    if (!index_1.getProp(site, "map.basemaps.primary")) {
        index_1.setProp("map.basemaps.primary", portal.defaultBasemap, site);
    }
    // Put the title into the header
    if (!index_1.getProp(site, "layout.header.component.settings.title")) {
        index_1.setProp("layout.header.component.settings.title", site.name, site);
    }
    // Now convert the IHubSite into an IModel
    const mapper = new PropertyMapper_1.PropertyMapper(getPropertyMap_1.getPropertyMap());
    let model = mapper.objectToModel(site, index_1.cloneObject(DEFAULT_SITE_MODEL));
    // create the backing item
    model = await index_1.createModel(model, requestOptions);
    // Register as an app
    const registration = await index_1.registerSiteAsApplication(model, requestOptions);
    model.data.values.clientId = registration.client_id;
    // Register domains
    await index_1.addSiteDomains(model, requestOptions);
    // update the model
    const updatedModel = await index_1.updateModel(model, requestOptions);
    // convert the model into a IHubSite and return
    return mapper.modelToObject(updatedModel, {});
}
exports.createSite = createSite;
/**
 * Update a Hub Site
 *
 * This checks for and applies domain changes
 * @param site
 * @param requestOptions
 * @returns
 */
async function updateSite(site, requestOptions) {
    // Most of this work is done with an IModel, so first thing it to
    // convert IHubSite to model
    const mapper = new PropertyMapper_1.PropertyMapper(getPropertyMap_1.getPropertyMap());
    // applying the site onto the default model ensures that a minimum
    // set of properties exist, regardless what may have been done to
    // the site pojo
    const updatedModel = mapper.objectToModel(site, index_1.cloneObject(DEFAULT_SITE_MODEL));
    // Fetch backing model from the portal
    const currentModel = await index_1.getModel(site.id, requestOptions);
    // handle any domain changes
    await _internal_1.handleDomainChanges(updatedModel, currentModel, requestOptions);
    if (updatedModel.item.properties.slug !== currentModel.item.properties.slug) {
        // ensure slug to keywords
        updatedModel.item.typeKeywords = index_1.setSlugKeyword(updatedModel.item.typeKeywords, updatedModel.item.properties.slug);
    }
    // merge the updated site onto the current model
    const modelToStore = mapper.objectToModel(site, currentModel);
    // update the model
    const updatedSiteModel = await index_1.updateModel(modelToStore, requestOptions);
    // fetch updated model
    const updatedSite = mapper.modelToObject(updatedSiteModel, site);
    return updatedSite;
}
exports.updateSite = updateSite;
/**
 * @private
 * Remove a Hub Site
 *
 * This simply removes the Site item, and it's associated domain records.
 * This does not remove any Teams/Groups or content associated with the
 * Site
 * @param id
 * @param requestOptions
 * @returns
 */
async function destroySite(id, requestOptions) {
    // tslint:disable-next-line:no-console
    console.warn(`destroySite is deprecated, use deleteSite instead`);
    return deleteSite(id, requestOptions);
}
exports.destroySite = destroySite;
/**
 * Remove a Hub Site
 *
 * This simply removes the Site item, and it's associated domain records.
 * This does not remove any Teams/Groups or content associated with the
 * Site
 * @param id
 * @param requestOptions
 * @returns
 */
async function deleteSite(id, requestOptions) {
    // For AGO we need to remove the domain records for the site
    if (!requestOptions.isPortal) {
        await index_1.removeDomainsBySiteId(id, requestOptions);
    }
    // now we can remove the item
    const ro = Object.assign(Object.assign({}, requestOptions), { id });
    await arcgis_rest_portal_1.removeItem(ro);
    return;
}
exports.deleteSite = deleteSite;
/**
 * Returns site model given various kinds of identifier
 *
 * @param identifier - a site item ID, site hostname, enterprise site slug, or full site URL
 * @param requestOptions
 * @private // remove when we remove existing fetchSite function
 */
async function fetchSite(identifier, requestOptions) {
    // get the model
    const model = await fetchSiteModel_1.fetchSiteModel(identifier, requestOptions);
    // convert to IHubSite
    return convertModelToSite(model, requestOptions);
}
exports.fetchSite = fetchSite;
/**
 * Convert an IModel for a Hub Site Item into an IHubSite
 * @param model
 * @param requestOptions
 * @returns
 */
function convertModelToSite(model, requestOptions) {
    // Add permissions based on Groups
    // This may get moved to a formal schema migration in the future but for now
    // we can do it here as there is no ux for managing permissions yet.
    const modelWithPermissions = applyPermissionMigration_1.applyPermissionMigration(model);
    // convert to site
    const mapper = new PropertyMapper_1.PropertyMapper(getPropertyMap_1.getPropertyMap());
    const site = mapper.modelToObject(modelWithPermissions, {});
    // compute additional properties
    return computeProps_1.computeProps(model, site, requestOptions);
}
exports.convertModelToSite = convertModelToSite;
/**
 * Convert a Hub Site Application item into a Hub Site, fetching any
 * additional information that may be required
 * @param item
 * @param auth
 * @returns
 */
async function convertItemToSite(item, requestOptions) {
    const model = await index_1.fetchModelFromItem(item, requestOptions);
    return convertModelToSite(model, requestOptions);
}
exports.convertItemToSite = convertItemToSite;
/**
 * Fetch Site specific enrichments
 * @param item
 * @param include
 * @param requestOptions
 * @returns
 */
async function enrichSiteSearchResult(item, include, requestOptions) {
    // Create the basic structure
    const result = {
        access: item.access,
        id: item.id,
        type: item.type,
        name: item.title,
        owner: item.owner,
        typeKeywords: item.typeKeywords,
        tags: item.tags,
        categories: item.categories,
        summary: item.snippet || item.description,
        createdDate: new Date(item.created),
        createdDateSource: "item.created",
        updatedDate: new Date(item.modified),
        updatedDateSource: "item.modified",
        family: index_1.getFamily(item.type),
        links: {
            self: "not-implemented",
            siteRelative: "not-implemented",
            thumbnail: "not-implemented",
        },
    };
    // default includes
    const DEFAULTS = [];
    // merge includes
    include = [...DEFAULTS, ...include].filter(index_1.unique);
    // Parse the includes into a valid set of enrichments
    const specs = include.map(parseInclude_1.parseInclude);
    // Extract out the low-level enrichments needed
    const enrichments = index_1.mapBy("enrichment", specs).filter(index_1.unique);
    // fetch the enrichments
    let enriched = {};
    if (enrichments.length) {
        // TODO: Look into caching for the requests in fetchItemEnrichments
        enriched = await _enrichments_1.fetchItemEnrichments(item, enrichments, requestOptions);
    }
    // map the enriched props onto the result
    specs.forEach((spec) => {
        result[spec.prop] = index_1.getProp(enriched, spec.path);
    });
    // Handle links
    result.links.thumbnail = index_1.getItemThumbnailUrl(item, requestOptions);
    result.links.self = item.url;
    result.links.siteRelative = _internal_2.getHubRelativeUrl(result.type, result.id, item.typeKeywords);
    return result;
}
exports.enrichSiteSearchResult = enrichSiteSearchResult;
//# sourceMappingURL=HubSites.js.map