import { capitalize } from "../util";
/**
 * Capitalize every word in a sentence
 * @param {string} value
 * @returns {string} a sentence with every word being capitalized
 */
export function titleize(value) {
    return value
        .replace(/\s\s+/g, " ")
        .split(" ")
        .map((k) => capitalize(k))
        .join(" ");
}
//# sourceMappingURL=titleize.js.map