"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrgDefaultTheme = exports.DEFAULT_THEME = void 0;
const objects_1 = require("../objects");
const util_1 = require("../util");
/**
 * Default Site Theme
 */
exports.DEFAULT_THEME = {
    header: {
        background: "#fff",
        text: "#4c4c4c",
    },
    body: {
        background: "#fff",
        text: "#4c4c4c",
        link: "#0079c1",
    },
    button: {
        background: "#0079c1",
        text: "#fff",
    },
    logo: {
        small: "",
    },
    fonts: {
        base: {
            url: "",
            family: "Avenir Next",
        },
        heading: {
            url: "",
            family: "Avenir Next",
        },
    },
};
/**
 * Return the default theme, extended with values from the Org's shared theme
 * @param {Object} portalSelf Org's Portal object
 */
function getOrgDefaultTheme(portalSelf) {
    let defaultTheme = util_1.cloneObject(exports.DEFAULT_THEME);
    let sharedTheme = objects_1.getProp(portalSelf, "portalProperties.sharedTheme");
    if (sharedTheme) {
        sharedTheme = objects_1.removeEmptyProps(sharedTheme);
        defaultTheme = util_1.extend(defaultTheme, sharedTheme);
    }
    return defaultTheme;
}
exports.getOrgDefaultTheme = getOrgDefaultTheme;
//# sourceMappingURL=themes.js.map