const astro = require("eslint-plugin-astro");
const ts = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
  {
    ignores: ["node_modules", "dist"]
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astro.parser,
      parserOptions: {
        parser: tsParser
      }
    },
    plugins: {
      astro
    },
    rules: {
      ...astro.configs.recommended.rules,
      semi: ["error", "always"],
      indent: ["error", 2],
      quotes: ["error", "double"]
    }
  },
  {
    files: ["**/*.js", "**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": ts
    },
    rules: {
      ...ts.configs.recommended.rules,
      semi: ["error", "always"],
      indent: ["error", 2],
      quotes: ["error", "double"]
    }
  }
];
