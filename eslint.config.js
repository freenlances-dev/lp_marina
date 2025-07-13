import js from '@eslint/js';
import globals from 'globals';
import astro from 'eslint-plugin-astro';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
  },
  {
    files: ['**/*.astro'],
    plugins: { astro },
    extends: ['plugin:astro/recommended'],
    languageOptions: {
      parser: 'astro-eslint-parser',
      parserOptions: {
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {},
  },
]);
