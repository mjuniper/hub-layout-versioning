/**
 * What is the status of a subsystem
 */
export declare type SystemStatus = "online" | "offline" | "maintenance" | "not-available";
/**
 * Hash of subsystems and their status
 */
export declare type HubSystemStatus = {
    [key in HubSubsystem]: SystemStatus;
};
declare const validSubsystems: readonly ["discussions", "events", "initiatives", "items", "metrics", "notifications", "pages", "projects", "search", "sites"];
/**
 * Defines values for HubSubsystem
 */
export declare type HubSubsystem = typeof validSubsystems[number];
/**
 * Validate a Subsystem
 * @param subsystem
 * @returns
 */
export declare function isSubsystem(maybeSubsystem: string): boolean;
export {};
