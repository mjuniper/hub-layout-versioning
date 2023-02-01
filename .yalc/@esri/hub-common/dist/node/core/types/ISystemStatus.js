"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSubsystem = void 0;
const validSubsystems = [
    "discussions",
    "events",
    "initiatives",
    "items",
    "metrics",
    "notifications",
    "pages",
    "projects",
    "search",
    "sites",
];
/**
 * Validate a Subsystem
 * @param subsystem
 * @returns
 */
function isSubsystem(maybeSubsystem) {
    return validSubsystems.includes(maybeSubsystem);
}
exports.isSubsystem = isSubsystem;
//# sourceMappingURL=ISystemStatus.js.map