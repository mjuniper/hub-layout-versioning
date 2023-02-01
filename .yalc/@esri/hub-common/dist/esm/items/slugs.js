import { searchItems } from "@esri/arcgis-rest-portal";
import { slugify } from "../utils";
// TODO: work out how to unify content slug fns
// https: github.com/Esri/hub.js/blob/master/packages/common/src/content/index.ts#L301-L348
/**
 * Create a slug, namespaced to an org
 * Typically used to lookup items by a human readable name in urls
 *
 * @param title
 * @param orgKey
 * @returns
 */
export function constructSlug(title, orgKey) {
    return `${orgKey.toLowerCase()}|${slugify(title)}`;
}
/**
 * Adds/Updates the slug typekeyword
 * Returns a new array of keywords
 * @param typeKeywords
 * @param slug
 * @returns
 */
export function setSlugKeyword(typeKeywords, slug) {
    // remove slug entry from array
    const removed = typeKeywords.filter((entry) => {
        return !entry.startsWith("slug|");
    });
    // now add it
    removed.push(`slug|${slug}`);
    return removed;
}
/**
 * Get an item by searching for items with a typeKeyword like `slug|{slug-value}`
 *
 * For example, if you pass a slug `"snow-map"` into this function, it will
 * search for items with `slug|snow-map` in it's typeKeywords array,
 *
 * @param slug
 * @param requestOptions
 * @returns
 */
export function getItemBySlug(slug, requestOptions) {
    return findItemsBySlug({ slug }, requestOptions).then((results) => {
        if (results.length) {
            return results[0];
        }
        else {
            return null;
        }
    });
}
/**
 * Find items by slug typeKeywords.
 *
 * Optional exclude parameter accepts the id of an item we expect to
 * have this particular slug. This is used during update calls
 * where we don't know if the slug specifically has been updated, but we
 * don't want a false-postive from the item we are updating
 *
 * @param slug
 * @param requestOptions
 * @returns
 */
export function findItemsBySlug(slugInfo, requestOptions) {
    const opts = {
        filter: `typekeywords:"slug|${slugInfo.slug}"`,
    };
    if (requestOptions.authentication) {
        opts.authentication = requestOptions.authentication;
    }
    else if (requestOptions.portal) {
        opts.portal = requestOptions.portal;
    }
    // We need to check for other items w/ a slug during
    // the update calls. For those scenarios we are interested
    // in any _other_ items which may have a specific slug
    // but not one specific item
    if (slugInfo.exclude) {
        opts.q = `NOT id:${slugInfo.exclude}`;
    }
    return searchItems(opts)
        .then((response) => {
        return response.results;
    })
        .catch((e) => {
        throw e;
    });
}
/**
 * Given a slug, search for items using that slug, incrementing the slug name until
 * a unique value is found
 *
 * For example, if a slug of `"snow-map"` into this function and some item exists
 * with that slug, it would return `"snow-map-1"`.
 *
 * @param slug
 * @param requestOptions
 * @param step
 * @returns
 */
export function getUniqueSlug(slugInfo, requestOptions, step = 0) {
    let combinedSlug = slugInfo.slug;
    if (step) {
        combinedSlug = `${slugInfo.slug}-${step}`;
    }
    return findItemsBySlug({ slug: combinedSlug, exclude: slugInfo.existingId }, requestOptions)
        .then((results) => {
        if (results.length) {
            step++;
            return getUniqueSlug(slugInfo, requestOptions, step);
        }
        else {
            return combinedSlug;
        }
    })
        .catch((e) => {
        throw Error(`Error in getUniqueSlug ${e}`);
    });
}
//# sourceMappingURL=slugs.js.map