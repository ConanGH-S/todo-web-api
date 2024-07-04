import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/**
 * @type {import('eslint').Linter.Config.FlatConfig}
 */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"], rules: {semi: 2}},
  {languageOptions: { globals: globals.node }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["dist/*"]
  }
];