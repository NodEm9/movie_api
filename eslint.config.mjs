import globals from "globals";
import pluginJs from "@eslint/js";


module.exports = [
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  rules: {
    "no-console": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    "no-constant-condition": "off",
    "no-irregular-whitespace": "error",
    "no-prototype-builtins": "off",
    "no-async-promise-executor": "error",
    "no-var": "error",
    semi: ["error", "always"],
    quotes: ["error", "single"]
  }
];