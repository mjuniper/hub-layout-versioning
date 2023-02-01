"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processEntityCapabilities = void 0;
/**
 * Take an entity's capabilities and merge them with the default capabilities ensuring that only the capabilities defined in the business rules are allowed through.
 * @param entityCapabilities
 * @param defaultCapabilities
 * @returns
 */
function processEntityCapabilities(entityCapabilities, defaultCapabilities) {
    // Extend the default capabilities with the entity capabilities
    const capabilities = Object.assign(Object.assign({}, defaultCapabilities), entityCapabilities);
    // Remove any capabilities that are not in the default capabilities hash.
    // this prevents enabling capabilities that are not defined in hub business rules
    const defaultKeys = Object.keys(defaultCapabilities);
    const keysToRemove = Object.keys(capabilities).reduce((acc, key) => {
        if (!defaultKeys.includes(key)) {
            acc.push(key);
        }
        return acc;
    }, []);
    // remove any keys that are not in the default capabilities hash
    keysToRemove.forEach((key) => {
        delete capabilities[key];
    });
    return capabilities;
}
exports.processEntityCapabilities = processEntityCapabilities;
//# sourceMappingURL=processEntityCapabilities.js.map