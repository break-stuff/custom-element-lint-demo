import customElement from "eslint-plugin-custom-element";
import html from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";

export const rules = {
  "custom-element/required-attrs": ["error"],

  "custom-element/no-deprecated-attrs": ["warn"],

  "custom-element/constrained-attrs": [
    "error",
    {
      tag: "sl-avatar",
      attr: "loading",
      values: ["eager", "lazy"],
    },
    {
      tag: "sl-avatar",
      attr: "shape",
      values: ["circle", "square", "rounded"],
    },
    {
      tag: "sl-alert",
      attr: "variant",
      values: ["primary", "success", "neutral", "warning", "danger"],
    },
    {
      tag: "sl-badge",
      attr: "variant",
      values: ["primary", "success", "neutral", "warning", "danger"],
    },
    {
      tag: "sl-button",
      attr: "variant",
      values: [
        "default",
        "primary",
        "success",
        "neutral",
        "warning",
        "danger",
        "text",
      ],
    },
    {
      tag: "sl-button",
      attr: "size",
      values: ["small", "medium", "large"],
    },
    {
      tag: "sl-button",
      attr: "type",
      values: ["button", "submit", "reset"],
    },
    {
      tag: "sl-button",
      attr: "target",
      values: ["_blank", "_parent", "_self", "_top"],
    },
    {
      tag: "sl-button",
      attr: "download",
      values: ["string", "undefined"],
    },
    {
      tag: "sl-button",
      attr: "formenctype",
      values: [
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ],
    },
    {
      tag: "sl-button",
      attr: "formmethod",
      values: ["post", "get"],
    },
    {
      tag: "sl-button",
      attr: "formtarget",
      values: ["_self", "_blank", "_parent", "_top", "string"],
    },
    {
      tag: "sl-breadcrumb-item",
      attr: "href",
      values: ["string", "undefined"],
    },
    {
      tag: "sl-breadcrumb-item",
      attr: "target",
      values: ["_blank", "_parent", "_self", "_top", "undefined"],
    },
    {
      tag: "sl-carousel",
      attr: "orientation",
      values: ["horizontal", "vertical"],
    },
    {
      tag: "sl-checkbox",
      attr: "size",
      values: ["small", "medium", "large"],
    },
    {
      tag: "sl-color-picker",
      attr: "format",
      values: ["hex", "rgb", "hsl", "hsv"],
    },
    {
      tag: "sl-color-picker",
      attr: "size",
      values: ["small", "medium", "large"],
    },
    {
      tag: "sl-color-picker",
      attr: "swatches",
      values: ["string", "string[]"],
    },
    {
      tag: "sl-copy-button",
      attr: "tooltip-placement",
      values: ["top", "right", "bottom", "left"],
    },
    {
      tag: "sl-drawer",
      attr: "placement",
      values: ["top", "end", "bottom", "start"],
    },
    {
      tag: "sl-dropdown",
      attr: "placement",
      values: [
        "",
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "right",
        "right-start",
        "right-end",
        "left",
        "left-start",
        "left-end",
      ],
    },
    {
      tag: "sl-dropdown",
      attr: "sync",
      values: ["width", "height", "both", "undefined"],
    },
    {
      tag: "sl-format-bytes",
      attr: "unit",
      values: ["byte", "bit"],
    },
    {
      tag: "sl-format-bytes",
      attr: "display",
      values: ["long", "short", "narrow"],
    },
    {
      tag: "sl-format-date",
      attr: "date",
      values: ["Date", "string"],
    },
    {
      tag: "sl-format-date",
      attr: "weekday",
      values: ["narrow", "short", "long"],
    },
    {
      tag: "sl-format-date",
      attr: "era",
      values: ["narrow", "short", "long"],
    },
    {
      tag: "sl-format-date",
      attr: "year",
      values: ["numeric", "2-digit"],
    },
    {
      tag: "sl-format-date",
      attr: "month",
      values: ["numeric", "2-digit", "narrow", "short", "long"],
    },
    {
      tag: "sl-format-date",
      attr: "day",
      values: ["numeric", "2-digit"],
    },
    {
      tag: "sl-format-date",
      attr: "hour",
      values: ["numeric", "2-digit"],
    },
    {
      tag: "sl-format-date",
      attr: "minute",
      values: ["numeric", "2-digit"],
    },
    {
      tag: "sl-format-date",
      attr: "second",
      values: ["numeric", "2-digit"],
    },
    {
      tag: "sl-format-date",
      attr: "time-zone-name",
      values: ["short", "long"],
    },
    {
      tag: "sl-format-date",
      attr: "hour-format",
      values: ["auto", "12", "24"],
    },
    {
      tag: "sl-icon-button",
      attr: "name",
      values: ["string", "undefined"],
    },
    {
      tag: "sl-icon-button",
      attr: "library",
      values: ["string", "undefined"],
    },
    {
      tag: "sl-icon-button",
      attr: "src",
      values: ["string", "undefined"],
    },
    {
      tag: "sl-icon-button",
      attr: "href",
      values: ["string", "undefined"],
    },
    {
      tag: "sl-icon-button",
      attr: "target",
      values: ["_blank", "_parent", "_self", "_top", "undefined"],
    },
    {
      tag: "sl-icon-button",
      attr: "download",
      values: ["string", "undefined"],
    },
    {
      tag: "sl-format-number",
      attr: "type",
      values: ["currency", "decimal", "percent"],
    },
    {
      tag: "sl-format-number",
      attr: "currency-display",
      values: ["symbol", "narrowSymbol", "code", "name"],
    },
    {
      tag: "sl-icon",
      attr: "name",
      values: ["string", "undefined"],
    },
    {
      tag: "sl-icon",
      attr: "src",
      values: ["string", "undefined"],
    },
    {
      tag: "sl-include",
      attr: "mode",
      values: ["cors", "no-cors", "same-origin"],
    },
    {
      tag: "sl-menu-item",
      attr: "type",
      values: ["normal", "checkbox"],
    },
    {
      tag: "sl-input",
      attr: "type",
      values: [
        "",
        "date",
        "datetime-local",
        "email",
        "number",
        "password",
        "search",
        "tel",
        "text",
        "time",
        "url",
      ],
    },
    {
      tag: "sl-input",
      attr: "size",
      values: ["small", "medium", "large"],
    },
    {
      tag: "sl-input",
      attr: "min",
      values: ["number", "string"],
    },
    {
      tag: "sl-input",
      attr: "max",
      values: ["number", "string"],
    },
    {
      tag: "sl-input",
      attr: "step",
      values: ["number", "any"],
    },
    {
      tag: "sl-input",
      attr: "autocapitalize",
      values: ["off", "none", "on", "sentences", "words", "characters"],
    },
    {
      tag: "sl-input",
      attr: "autocorrect",
      values: ["off", "on"],
    },
    {
      tag: "sl-input",
      attr: "enterkeyhint",
      values: ["enter", "done", "go", "next", "previous", "search", "send"],
    },
    {
      tag: "sl-input",
      attr: "inputmode",
      values: [
        "none",
        "text",
        "decimal",
        "numeric",
        "tel",
        "search",
        "email",
        "url",
      ],
    },
    {
      tag: "sl-popup",
      attr: "anchor",
      values: ["Element", "string", "VirtualElement"],
    },
    {
      tag: "sl-popup",
      attr: "placement",
      values: [
        "",
        "top",
        "top-start",
        "top-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "right",
        "right-start",
        "right-end",
        "left",
        "left-start",
        "left-end",
      ],
    },
    {
      tag: "sl-popup",
      attr: "strategy",
      values: ["absolute", "fixed"],
    },
    {
      tag: "sl-popup",
      attr: "arrow-placement",
      values: ["start", "end", "center", "anchor"],
    },
    {
      tag: "sl-popup",
      attr: "flip-fallback-strategy",
      values: ["best-fit", "initial"],
    },
    {
      tag: "sl-popup",
      attr: "flipBoundary",
      values: ["Element", "Element[]"],
    },
    {
      tag: "sl-popup",
      attr: "shiftBoundary",
      values: ["Element", "Element[]"],
    },
    {
      tag: "sl-popup",
      attr: "auto-size",
      values: ["horizontal", "vertical", "both"],
    },
    {
      tag: "sl-popup",
      attr: "sync",
      values: ["width", "height", "both"],
    },
    {
      tag: "sl-popup",
      attr: "autoSizeBoundary",
      values: ["Element", "Element[]"],
    },
    {
      tag: "sl-qr-code",
      attr: "error-correction",
      values: ["L", "M", "Q", "H"],
    },
    {
      tag: "sl-radio-button",
      attr: "size",
      values: ["small", "medium", "large"],
    },
    {
      tag: "sl-range",
      attr: "tooltip",
      values: ["top", "bottom", "none"],
    },
    {
      tag: "sl-radio-group",
      attr: "size",
      values: ["small", "medium", "large"],
    },
    {
      tag: "sl-radio",
      attr: "size",
      values: ["small", "medium", "large"],
    },
    {
      tag: "sl-skeleton",
      attr: "effect",
      values: ["pulse", "sheen", "none"],
    },
    {
      tag: "sl-relative-time",
      attr: "date",
      values: ["Date", "string"],
    },
    {
      tag: "sl-relative-time",
      attr: "format",
      values: ["long", "short", "narrow"],
    },
    {
      tag: "sl-relative-time",
      attr: "numeric",
      values: ["always", "auto"],
    },
    {
      tag: "sl-select",
      attr: "value",
      values: ["string", "string[]"],
    },
    {
      tag: "sl-select",
      attr: "size",
      values: ["small", "medium", "large"],
    },
    {
      tag: "sl-select",
      attr: "placement",
      values: ["top", "bottom"],
    },
    {
      tag: "sl-select",
      attr: "getTag",
      values: [
        "(option: SlOption, index: number) => TemplateResult",
        "string",
        "HTMLElement",
      ],
    },
    {
      tag: "sl-split-panel",
      attr: "primary",
      values: ["start", "end", "undefined"],
    },
    {
      tag: "sl-split-panel",
      attr: "snap",
      values: ["string", "undefined"],
    },
    {
      tag: "sl-switch",
      attr: "size",
      values: ["small", "medium", "large"],
    },
    {
      tag: "sl-tab-group",
      attr: "placement",
      values: ["top", "bottom", "start", "end"],
    },
    {
      tag: "sl-tab-group",
      attr: "activation",
      values: ["auto", "manual"],
    },
    {
      tag: "sl-textarea",
      attr: "size",
      values: ["small", "medium", "large"],
    },
    {
      tag: "sl-textarea",
      attr: "resize",
      values: ["none", "vertical", "auto"],
    },
    {
      tag: "sl-textarea",
      attr: "autocapitalize",
      values: ["off", "none", "on", "sentences", "words", "characters"],
    },
    {
      tag: "sl-textarea",
      attr: "enterkeyhint",
      values: ["enter", "done", "go", "next", "previous", "search", "send"],
    },
    {
      tag: "sl-textarea",
      attr: "inputmode",
      values: [
        "none",
        "text",
        "decimal",
        "numeric",
        "tel",
        "search",
        "email",
        "url",
      ],
    },
    {
      tag: "sl-tooltip",
      attr: "placement",
      values: [
        "",
        "top",
        "top-start",
        "top-end",
        "right",
        "right-start",
        "right-end",
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
      ],
    },
    {
      tag: "sl-tree",
      attr: "selection",
      values: ["single", "multiple", "leaf"],
    },
    {
      tag: "sl-tag",
      attr: "variant",
      values: ["primary", "success", "neutral", "warning", "danger", "text"],
    },
    {
      tag: "sl-tag",
      attr: "size",
      values: ["small", "medium", "large"],
    },
  ],

  "custom-element/no-deprecated-tags": ["warn"],

  "custom-element/no-boolean-attr-values": [
    "error",
    {
      tag: "sl-animation",
      attr: "play",
    },
    {
      tag: "sl-animated-image",
      attr: "play",
    },
    {
      tag: "sl-alert",
      attr: "open",
    },
    {
      tag: "sl-alert",
      attr: "closable",
    },
    {
      tag: "sl-badge",
      attr: "pill",
    },
    {
      tag: "sl-badge",
      attr: "pulse",
    },
    {
      tag: "sl-button",
      attr: "caret",
    },
    {
      tag: "sl-button",
      attr: "disabled",
    },
    {
      tag: "sl-button",
      attr: "loading",
    },
    {
      tag: "sl-button",
      attr: "outline",
    },
    {
      tag: "sl-button",
      attr: "pill",
    },
    {
      tag: "sl-button",
      attr: "circle",
    },
    {
      tag: "sl-button",
      attr: "formnovalidate",
    },
    {
      tag: "sl-carousel",
      attr: "loop",
    },
    {
      tag: "sl-carousel",
      attr: "navigation",
    },
    {
      tag: "sl-carousel",
      attr: "pagination",
    },
    {
      tag: "sl-carousel",
      attr: "autoplay",
    },
    {
      tag: "sl-carousel",
      attr: "mouse-dragging",
    },
    {
      tag: "sl-checkbox",
      attr: "disabled",
    },
    {
      tag: "sl-checkbox",
      attr: "checked",
    },
    {
      tag: "sl-checkbox",
      attr: "indeterminate",
    },
    {
      tag: "sl-checkbox",
      attr: "required",
    },
    {
      tag: "sl-color-picker",
      attr: "inline",
    },
    {
      tag: "sl-color-picker",
      attr: "no-format-toggle",
    },
    {
      tag: "sl-color-picker",
      attr: "disabled",
    },
    {
      tag: "sl-color-picker",
      attr: "hoist",
    },
    {
      tag: "sl-color-picker",
      attr: "opacity",
    },
    {
      tag: "sl-color-picker",
      attr: "uppercase",
    },
    {
      tag: "sl-color-picker",
      attr: "required",
    },
    {
      tag: "sl-copy-button",
      attr: "disabled",
    },
    {
      tag: "sl-copy-button",
      attr: "hoist",
    },
    {
      tag: "sl-details",
      attr: "open",
    },
    {
      tag: "sl-details",
      attr: "disabled",
    },
    {
      tag: "sl-dialog",
      attr: "open",
    },
    {
      tag: "sl-dialog",
      attr: "no-header",
    },
    {
      tag: "sl-divider",
      attr: "vertical",
    },
    {
      tag: "sl-drawer",
      attr: "open",
    },
    {
      tag: "sl-drawer",
      attr: "contained",
    },
    {
      tag: "sl-drawer",
      attr: "no-header",
    },
    {
      tag: "sl-dropdown",
      attr: "open",
    },
    {
      tag: "sl-dropdown",
      attr: "disabled",
    },
    {
      tag: "sl-dropdown",
      attr: "stay-open-on-select",
    },
    {
      tag: "sl-dropdown",
      attr: "hoist",
    },
    {
      tag: "sl-icon-button",
      attr: "disabled",
    },
    {
      tag: "sl-format-number",
      attr: "no-grouping",
    },
    {
      tag: "sl-include",
      attr: "allow-scripts",
    },
    {
      tag: "sl-menu-item",
      attr: "checked",
    },
    {
      tag: "sl-menu-item",
      attr: "loading",
    },
    {
      tag: "sl-menu-item",
      attr: "disabled",
    },
    {
      tag: "sl-input",
      attr: "filled",
    },
    {
      tag: "sl-input",
      attr: "pill",
    },
    {
      tag: "sl-input",
      attr: "clearable",
    },
    {
      tag: "sl-input",
      attr: "disabled",
    },
    {
      tag: "sl-input",
      attr: "readonly",
    },
    {
      tag: "sl-input",
      attr: "password-toggle",
    },
    {
      tag: "sl-input",
      attr: "password-visible",
    },
    {
      tag: "sl-input",
      attr: "no-spin-buttons",
    },
    {
      tag: "sl-input",
      attr: "required",
    },
    {
      tag: "sl-input",
      attr: "autofocus",
    },
    {
      tag: "sl-input",
      attr: "spellcheck",
    },
    {
      tag: "sl-mutation-observer",
      attr: "attr-old-value",
    },
    {
      tag: "sl-mutation-observer",
      attr: "char-data",
    },
    {
      tag: "sl-mutation-observer",
      attr: "char-data-old-value",
    },
    {
      tag: "sl-mutation-observer",
      attr: "child-list",
    },
    {
      tag: "sl-mutation-observer",
      attr: "disabled",
    },
    {
      tag: "sl-option",
      attr: "disabled",
    },
    {
      tag: "sl-progress-bar",
      attr: "indeterminate",
    },
    {
      tag: "sl-popup",
      attr: "active",
    },
    {
      tag: "sl-popup",
      attr: "arrow",
    },
    {
      tag: "sl-popup",
      attr: "flip",
    },
    {
      tag: "sl-popup",
      attr: "shift",
    },
    {
      tag: "sl-popup",
      attr: "hover-bridge",
    },
    {
      tag: "sl-radio-button",
      attr: "disabled",
    },
    {
      tag: "sl-radio-button",
      attr: "pill",
    },
    {
      tag: "sl-range",
      attr: "disabled",
    },
    {
      tag: "sl-radio-group",
      attr: "required",
    },
    {
      tag: "sl-radio",
      attr: "disabled",
    },
    {
      tag: "sl-rating",
      attr: "readonly",
    },
    {
      tag: "sl-rating",
      attr: "disabled",
    },
    {
      tag: "sl-resize-observer",
      attr: "disabled",
    },
    {
      tag: "sl-relative-time",
      attr: "sync",
    },
    {
      tag: "sl-select",
      attr: "multiple",
    },
    {
      tag: "sl-select",
      attr: "disabled",
    },
    {
      tag: "sl-select",
      attr: "clearable",
    },
    {
      tag: "sl-select",
      attr: "open",
    },
    {
      tag: "sl-select",
      attr: "hoist",
    },
    {
      tag: "sl-select",
      attr: "filled",
    },
    {
      tag: "sl-select",
      attr: "pill",
    },
    {
      tag: "sl-select",
      attr: "required",
    },
    {
      tag: "sl-split-panel",
      attr: "vertical",
    },
    {
      tag: "sl-split-panel",
      attr: "disabled",
    },
    {
      tag: "sl-switch",
      attr: "disabled",
    },
    {
      tag: "sl-switch",
      attr: "checked",
    },
    {
      tag: "sl-switch",
      attr: "required",
    },
    {
      tag: "sl-tab-group",
      attr: "no-scroll-controls",
    },
    {
      tag: "sl-tab",
      attr: "active",
    },
    {
      tag: "sl-tab",
      attr: "closable",
    },
    {
      tag: "sl-tab",
      attr: "disabled",
    },
    {
      tag: "sl-tab-panel",
      attr: "active",
    },
    {
      tag: "sl-textarea",
      attr: "filled",
    },
    {
      tag: "sl-textarea",
      attr: "disabled",
    },
    {
      tag: "sl-textarea",
      attr: "readonly",
    },
    {
      tag: "sl-textarea",
      attr: "required",
    },
    {
      tag: "sl-textarea",
      attr: "autofocus",
    },
    {
      tag: "sl-textarea",
      attr: "spellcheck",
    },
    {
      tag: "sl-tooltip",
      attr: "disabled",
    },
    {
      tag: "sl-tooltip",
      attr: "open",
    },
    {
      tag: "sl-tooltip",
      attr: "hoist",
    },
    {
      tag: "sl-tag",
      attr: "pill",
    },
    {
      tag: "sl-tag",
      attr: "removable",
    },
    {
      tag: "sl-tree-item",
      attr: "expanded",
    },
    {
      tag: "sl-tree-item",
      attr: "selected",
    },
    {
      tag: "sl-tree-item",
      attr: "disabled",
    },
    {
      tag: "sl-tree-item",
      attr: "lazy",
    },
  ],

  "@html-eslint/no-duplicate-attrs": "off",
  "@html-eslint/no-duplicate-id": "off",
  "@html-eslint/no-inline-styles": "off",
  "@html-eslint/no-obsolete-tags": "off",
  "@html-eslint/no-restricted-attr-values": "off",
  "@html-eslint/no-restricted-attrs": "off",
  "@html-eslint/no-script-style-type": "off",
  "@html-eslint/no-target-blank": "off",
  "@html-eslint/require-attrs": "off",
  "@html-eslint/require-button-type": "off",
  "@html-eslint/require-closing-tags": "off",
  "@html-eslint/require-doctype": "off",
  "@html-eslint/require-li-container": "off",
  "@html-eslint/require-meta-charset": "off",
  "@html-eslint/no-multiple-h1": "off",
  "@html-eslint/require-lang": "off",
  "@html-eslint/require-meta-description": "off",
  "@html-eslint/require-open-graph-protocol": "off",
  "@html-eslint/require-title": "off",
  "@html-eslint/no-abstract-roles": "off",
  "@html-eslint/no-accesskey-attrs": "off",
  "@html-eslint/no-aria-hidden-body": "off",
  "@html-eslint/no-non-scalable-viewport": "off",
  "@html-eslint/no-positive-tabindex": "off",
  "@html-eslint/no-skip-heading-levels": "off",
  "@html-eslint/require-frame-title": "off",
  "@html-eslint/require-img-alt": "off",
  "@html-eslint/require-meta-viewport": "off",
  "@html-eslint/element-newline": "off",
  "@html-eslint/id-naming-convention": "off",
  "@html-eslint/indent": "off",
  "@html-eslint/lowercase": "off",
  "@html-eslint/no-extra-spacing-attrs": "off",
  "@html-eslint/no-multiple-empty-lines": "off",
  "@html-eslint/no-trailing-spaces": "off",
  "@html-eslint/quotes": "off",
  "@html-eslint/sort-attrs": "off",
};

export default {
  rules,
  recommendedConfig: {
    files: ["**/*.html"],
    languageOptions: {
      parser: htmlParser,
    },
    plugins: { html, "custom-element": customElement },
    rules,
  },
};
