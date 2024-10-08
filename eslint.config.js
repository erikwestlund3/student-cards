import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import pluginA11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

export default [
  pluginJs.configs.recommended,
  {
    plugins: {
      "jsx-a11y": pluginA11y,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      // Core ESLint rules
      "no-extra-boolean-cast": "error",
      "no-useless-catch": "error",
      "no-useless-constructor": "error",
      "no-useless-rename": "error",
      "no-with": "error",
      "prefer-arrow-callback": "error",
      "prefer-const": "error",
      "no-const-assign": "error",
      "no-constant-condition": "error",
      "no-empty-pattern": "error",
      "no-inner-declarations": "error",
      "no-self-assign": "error",
      "no-unreachable": "error",
      "use-isnan": "error",
      "no-delete-var": "error",
      "no-var": "error",
      "prefer-exponentiation-operator": "error",
      "prefer-numeric-literals": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-ex-assign": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-import-assign": "error",
      "no-obj-calls": "error",
      "no-redeclare": "error",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-this-before-super": "error",
      "no-undef": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unused-labels": "error",
      "no-useless-escape": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "valid-typeof": "error",

      // Additional rules to emulate Biome
      "no-console": "warn",
      "no-alert": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-proto": "error",
      "no-return-await": "error",
      "no-self-compare": "error",
      "no-throw-literal": "error",
      "no-unused-expressions": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "require-await": "error",
      yoda: "error",
      "prefer-object-spread": "error",
      "object-shorthand": "error",
      "no-array-constructor": "error",
      "no-new-object": "error",
      "prefer-destructuring": ["error", { object: true, array: false }],

      // Accessibility rules (from eslint-plugin-jsx-a11y)
      "jsx-a11y/alt-text": "error",
      "jsx-a11y/anchor-has-content": "error",
      "jsx-a11y/anchor-is-valid": "error",
      "jsx-a11y/aria-props": "error",
      "jsx-a11y/aria-proptypes": "error",
      "jsx-a11y/aria-role": "error",
      "jsx-a11y/aria-unsupported-elements": "error",
      "jsx-a11y/click-events-have-key-events": "error",
      "jsx-a11y/heading-has-content": "error",
      "jsx-a11y/html-has-lang": "error",
      "jsx-a11y/iframe-has-title": "error",
      "jsx-a11y/img-redundant-alt": "error",
      "jsx-a11y/interactive-supports-focus": "error",
      "jsx-a11y/label-has-associated-control": "error",
      "jsx-a11y/media-has-caption": "error",
      "jsx-a11y/mouse-events-have-key-events": "error",
      "jsx-a11y/no-access-key": "error",
      "jsx-a11y/no-autofocus": "error",
      "jsx-a11y/no-distracting-elements": "error",
      "jsx-a11y/no-interactive-element-to-noninteractive-role": "error",
      "jsx-a11y/no-noninteractive-element-interactions": "error",
      "jsx-a11y/no-noninteractive-element-to-interactive-role": "error",
      "jsx-a11y/no-redundant-roles": "error",
      "jsx-a11y/role-has-required-aria-props": "error",
      "jsx-a11y/role-supports-aria-props": "error",
      "jsx-a11y/scope": "error",
      "jsx-a11y/tabindex-no-positive": "error",
    },
  },

  // Keep Prettier configuration last to override any conflicting rules
  eslintConfigPrettier,
];
