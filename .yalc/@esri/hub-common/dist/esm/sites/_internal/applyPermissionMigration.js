import { getProp } from "../../objects";
import { cloneObject } from "../../util";
/**
 * Informal migration that creates default permission policies based on the
 * Content and Collaboration Groups
 * @param model
 */
export function applyPermissionMigration(model) {
    // TODO: Once we formalize the permission mapping we need to
    // bump the current schema version, and add it here so this gets
    // applied once and then never again.
    // const PERMISSION_SCHEMA_VERSION = 1.6
    // if (
    //   getProp(model, "item.properties.schemaVersion") >= PERMISSION_SCHEMA_VERSION
    // )
    //   return model;
    const clone = cloneObject(model);
    clone.data.permissions = clone.data.permissions || [];
    const permissionMigrations = [
        // Per discussion with @jaydev on 2022-12-01 we are going to
        // allow content team members to create projects in the context
        // of a site
        {
            prop: "item.properties.contentGroupId",
            type: "group",
            permissions: ["hub:project:create"],
        },
        {
            prop: "item.owner",
            type: "user",
            permissions: ["hub:site:delete"],
        },
    ];
    permissionMigrations.forEach((defn) => {
        const value = getProp(clone, defn.prop);
        if (value) {
            defn.permissions.forEach((permission) => {
                const present = clone.data.permissions.find((p) => p.permission === permission && p.collaborationId === value);
                if (!present) {
                    clone.data.permissions.push({
                        permission,
                        collaborationType: defn.type,
                        collaborationId: value,
                    });
                }
            });
        }
    });
    // TODO: Uncomment when we formalize the schema version this applies to
    // clone.item.properties.schemaVersion = PERMISSION_SCHEMA_VERSION;
    return clone;
}
//# sourceMappingURL=applyPermissionMigration.js.map