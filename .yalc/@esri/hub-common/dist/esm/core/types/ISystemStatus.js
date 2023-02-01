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
export function isSubsystem(maybeSubsystem) {
    return validSubsystems.includes(maybeSubsystem);
}
//# sourceMappingURL=ISystemStatus.js.map