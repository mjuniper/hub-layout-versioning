"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCapability = void 0;
/**
 * Hub System Capabilities
 */
const validCapabilities = [
    "collaboration",
    "details",
    "discussions",
    "events",
    "followers",
    "overview",
    "settings",
    "teams",
];
/**
 * Validate a capability. This is used because the libary can be used outside of typescript and we want to be able to return a message is the string passed in is not a valid capability
 * @param Capability
 * @returns
 */
function isCapability(maybeCapability) {
    return validCapabilities.includes(maybeCapability);
}
exports.isCapability = isCapability;
//# sourceMappingURL=types.js.map