"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleize = void 0;
const util_1 = require("../util");
/**
 * Capitalize every word in a sentence
 * @param {string} value
 * @returns {string} a sentence with every word being capitalized
 */
function titleize(value) {
    return value
        .replace(/\s\s+/g, " ")
        .split(" ")
        .map((k) => util_1.capitalize(k))
        .join(" ");
}
exports.titleize = titleize;
//# sourceMappingURL=titleize.js.map