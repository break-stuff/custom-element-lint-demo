import customElementRules from "./custom-element-eslint-rules.js";

customElementRules.recommendedConfig.files = [
  "**/*.html",
  "**/*.php",
];

export default [
  /* Other ESLint rules */
  customElementRules.recommendedConfig
];