"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandPredicate = void 0;
const objects_1 = require("../../objects");
const util_1 = require("../../util");
const utils_1 = require("../utils");
/**
 * @private
 * Expand a predicate
 * @param predicate
 * @returns
 */
function expandPredicate(predicate) {
    const result = {};
    const dateProps = ["created", "modified", "lastlogin"];
    const copyProps = [
        "filterType",
        "categoriesAsParam",
        "categoryFilter",
        "term",
        "searchUserAccess",
        "isopendata",
        "searchUserName",
    ];
    const nonMatchOptionsFields = [...dateProps, ...copyProps];
    // Do the conversion
    Object.entries(predicate).forEach(([key, value]) => {
        // Handle MatchOptions fields
        if (!nonMatchOptionsFields.includes(key)) {
            objects_1.setProp(key, utils_1.valueToMatchOptions(value), result);
        }
        // Handle Date fields
        if (dateProps.includes(key)) {
            const dateFieldValue = util_1.cloneObject(objects_1.getProp(predicate, key));
            if (objects_1.getProp(predicate, `${key}.type`) === "relative-date") {
                objects_1.setProp(key, utils_1.relativeDateToDateRange(dateFieldValue), result);
            }
            else {
                objects_1.setProp(key, dateFieldValue, result);
            }
        }
        // Handle fields that are just copied forward
        if (copyProps.includes(key) && predicate.hasOwnProperty(key)) {
            objects_1.setProp(key, value, result);
        }
    });
    return result;
}
exports.expandPredicate = expandPredicate;
//# sourceMappingURL=expandPredicate.js.map