"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HubProjectEditUiSchema = exports.HubProjectCreateUiSchema = exports.HubProjectSchema = void 0;
const types_1 = require("./types");
const types_2 = require("../types");
exports.HubProjectSchema = {
    required: ["name"],
    type: "object",
    properties: {
        name: {
            type: "string",
            minLength: 1,
            maxLength: 250,
        },
        summary: {
            type: "string",
        },
        description: {
            type: "string",
        },
        status: {
            type: "string",
            default: types_2.PROJECT_STATUSES.notStarted,
            enum: Object.keys(types_2.PROJECT_STATUSES),
        },
        extent: {
            type: "object",
        },
        timeline: {
            type: "object",
        },
        view: {
            type: "object",
            properties: {
                showMap: {
                    type: "boolean",
                },
                featuredImage: {
                    type: "object",
                },
                featuredContentIds: {
                    type: "array",
                    items: {
                        type: "string",
                    },
                },
            },
        },
    },
};
/**
 * Minimal UI Schema for Hub Project
 */
exports.HubProjectCreateUiSchema = {
    type: "Layout",
    elements: [
        {
            type: "Section",
            options: { section: "stepper", scale: "l" },
            elements: [
                {
                    type: "Step",
                    labelKey: "{{i18nScope}}.describeProject.label",
                    elements: [
                        {
                            labelKey: "{{i18nScope}}.name.label",
                            scope: "/properties/name",
                            type: "Control",
                        },
                        {
                            labelKey: "{{i18nScope}}.summary.label",
                            scope: "/properties/summary",
                            type: "Control",
                            options: {
                                control: "hub-field-input-input",
                                type: "textarea",
                                helperText: {
                                    labelKey: "{{i18nScope}}.summary.helperText",
                                },
                            },
                        },
                        {
                            labelKey: "{{i18nScope}}.description.label",
                            scope: "/properties/description",
                            type: "Control",
                            options: {
                                control: "hub-field-input-input",
                                type: "textarea",
                                helperText: {
                                    labelKey: "{{i18nScope}}.description.helperText",
                                },
                            },
                        },
                    ],
                },
                {
                    type: "Step",
                    labelKey: "{{i18nScope}}.setLocation.label",
                    rule: {
                        effect: types_1.UiSchemaRuleEffects.DISABLE,
                        condition: {
                            scope: "/properties/name",
                            schema: { const: "" },
                        },
                    },
                    elements: [
                        {
                            scope: "/properties/extent",
                            type: "Control",
                            options: {
                                control: "hub-field-input-boundary-picker",
                            },
                        },
                    ],
                },
                {
                    type: "Step",
                    labelKey: "{{i18nScope}}.statusAndTimeline.label",
                    rule: {
                        effect: types_1.UiSchemaRuleEffects.DISABLE,
                        condition: {
                            scope: "/properties/name",
                            schema: { const: "" },
                        },
                    },
                    elements: [
                        {
                            labelKey: "{{i18nScope}}.status.label",
                            scope: "/properties/status",
                            type: "Control",
                            options: {
                                control: "hub-field-input-select",
                                enum: {
                                    i18nScope: "{{i18nScope}}.status.enum",
                                },
                            },
                        },
                        {
                            labelKey: "{{i18nScope}}.timeline.label",
                            scope: "/properties/timeline",
                            type: "Control",
                            options: {
                                control: "arcgis-hub-timeline-editor",
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
/**
 * Complete UI Schema for Hub Project
 */
exports.HubProjectEditUiSchema = {
    type: "Layout",
    elements: [
        {
            type: "Section",
            labelKey: "{{i18nScope}}.basicInfo.label",
            elements: [
                {
                    labelKey: "{{i18nScope}}.name.label",
                    scope: "/properties/name",
                    type: "Control",
                },
                {
                    labelKey: "{{i18nScope}}.summary.label",
                    scope: "/properties/summary",
                    type: "Control",
                    options: {
                        control: "hub-field-input-input",
                        type: "textarea",
                        helperText: {
                            labelKey: "{{i18nScope}}.summary.helperText",
                        },
                    },
                },
                {
                    labelKey: "{{i18nScope}}.description.label",
                    scope: "/properties/description",
                    type: "Control",
                    options: {
                        control: "hub-field-input-input",
                        type: "textarea",
                        helperText: {
                            labelKey: "{{i18nScope}}.description.helperText",
                        },
                    },
                },
                {
                    labelKey: "{{i18nScope}}.featuredImage.label",
                    scope: "/properties/view/properties/featuredImage",
                    type: "Control",
                    options: {
                        control: "hub-field-input-image-picker",
                        maxWidth: 727,
                        maxHeight: 484,
                        aspectRatio: 1.5,
                        helperText: {
                            labelKey: "{{i18nScope}}.featuredImage.helperText",
                        },
                    },
                },
            ],
        },
        {
            type: "Section",
            labelKey: "{{i18nScope}}.location.label",
            elements: [
                {
                    scope: "/properties/extent",
                    type: "Control",
                    options: {
                        control: "hub-field-input-boundary-picker",
                    },
                },
                {
                    labelKey: "{{i18nScope}}.showMap.label",
                    scope: "/properties/view/properties/showMap",
                    type: "Control",
                },
            ],
        },
        {
            type: "Section",
            labelKey: "{{i18nScope}}.status.label",
            elements: [
                {
                    scope: "/properties/status",
                    type: "Control",
                    options: {
                        control: "hub-field-input-select",
                        enum: {
                            i18nScope: "{{i18nScope}}.status.enum",
                        },
                    },
                },
            ],
        },
        {
            type: "Section",
            labelKey: "{{i18nScope}}.timeline.label",
            elements: [
                {
                    scope: "/properties/timeline",
                    type: "Control",
                    options: {
                        control: "arcgis-hub-timeline-editor",
                    },
                },
            ],
        },
        {
            type: "Section",
            labelKey: "{{i18nScope}}.featuredContent.label",
            options: {
                helperText: {
                    labelKey: "{{i18nScope}}.featuredContent.helperText",
                },
            },
            elements: [
                {
                    scope: "/properties/view/properties/featuredContentIds",
                    type: "Control",
                    options: {
                        control: "hub-field-input-gallery-picker",
                        targetEntity: "item",
                        limit: 4,
                    },
                },
            ],
        },
    ],
};
//# sourceMappingURL=hubproject.js.map