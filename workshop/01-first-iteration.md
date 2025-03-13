# First Iteration

1. Create a new project

   ```sh
   npm create astro@latest
   cd redistribute-me
   npm install
   ```

2. Run:

   ```sh
   npm run dev
   ```

   Then open [localhost:4321](http://localhost:4321/) in your browser.

3. Create a new git repository and commit your project

   ```sh
   git init
   git add .
   git commit -m "chore: initial commit"
   ```

4. Add a licence:

   ```sh
   curl --output LICENSE "https://interoperable-europe.ec.europa.eu/sites/default/files/custom-page/attachment/2020-03/EUPL-1.2%20EN.txt"
   git add LICENSE
   git commit -m "chore: add EUPL-1.2 licence"
   ```

5. Add a contributing guidelines:

   ```sh
   curl --output CONTRIBUTING.md "curl --output CONTRIBUTING.md "https://raw.githubusercontent.com/openfisca/country-template/refs/heads/main/CONTRIBUTING.md""
   git add CONTRIBUTING.md
   git commit -m "chore: add contributing guidelines"
   ```

6. Add `.editorconfig`:

   ```sh
   curl --output .editorconfig "https://raw.githubusercontent.com/redte-ch/maisonquiroga.art/refs/heads/main/.editorconfig"
   git add .editorconfig
   git commit -m "chore: add .editorconfig"
   ```

7. Add Svelte, Tailwind, and Prettier:

   ```sh
   npx astro add svelte
   npx astro add tailwindcss
   npm install prettier prettier-plugin-astro prettier-plugin-jsdoc prettier-plugin-pkg prettier-plugin-sh prettier-plugin-svelte prettier-plugin-tailwindcss
   ```

   Then add the following to `Layout.astro`:

   ```astro
   ---
   import './src/styles/global.css'
   ---
   ```

   Add the following to `prettier.config.mjs`:

   ```mjs
   /** @type {import('prettier').Config} */
   export default {
     // StandardJS
     arrowParens: 'always',
     bracketSameLine: false,
     bracketSpacing: true,
     embeddedLanguageFormatting: 'auto',
     endOfLine: 'lf',
     htmlWhitespaceSensitivity: 'css',
     insertPragma: false,
     jsxSingleQuote: true,
     printWidth: 80,
     proseWrap: 'preserve',
     quoteProps: 'as-needed',
     requirePragma: false,
     semi: false,
     singleAttributePerLine: false,
     singleQuote: true,
     tabWidth: 2,
     trailingComma: 'none',
     useTabs: false,
     vueIndentScriptAndStyle: false,
     // Astro
     plugins: [
       'prettier-plugin-astro',
       'prettier-plugin-jsdoc',
       'prettier-plugin-pkg',
       'prettier-plugin-sh',
       'prettier-plugin-svelte',
       'prettier-plugin-tailwindcss'
     ]
   }
   ```

   Add the following to `.prettierignore`:

   ```sh
   node_modules/**
   ```

   Then format and commit:

   ```sh
   npx prettier --write .
   git add -p
   git add .
   git commit -m "chore: add Svelte, Tailwind, and Prettier"
   ```
