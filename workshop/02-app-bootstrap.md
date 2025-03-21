# App Bootstrap

### Objective

Bootstrap a new Astro app with Svelte, Tailwind, and Prettier.

### Create a new project

```sh
npm create astro@latest
cd redistribute-me
npm install
```

### Run

```sh
npm run dev
```

Then open [localhost:4321](http://localhost:4321/) in your browser.

### Create a new git repository and commit your project

```sh
git init
git add .
git commit -m "chore: initial commit"
```

### Add a licence

```sh
curl --output LICENSE "https://interoperable-europe.ec.europa.eu/sites/default/files/custom-page/attachment/2020-03/EUPL-1.2%20EN.txt"
git add LICENSE
git commit -m "chore: add EUPL-1.2 licence"
```

### Add a contributing guidelines

```sh
curl --output CONTRIBUTING.md "curl --output CONTRIBUTING.md "https://raw.githubusercontent.com/openfisca/country-template/refs/heads/main/CONTRIBUTING.md""
git add CONTRIBUTING.md
git commit -m "chore: add contributing guidelines"
```

### Add `.editorconfig`

```sh
curl --output .editorconfig "https://raw.githubusercontent.com/redte-ch/maisonquiroga.art/refs/heads/main/.editorconfig"
git add .editorconfig
git commit -m "chore: add .editorconfig"
```

### Add `tsconfig.json`

```sh
curl --output tsconfig.json "https://raw.githubusercontent.com/redte-ch/ReDistributeMe/refs/heads/main/tsconfig.json"
git add tsconfig.json
git commit -m "chore: add TypeScript configuration"
```

### Add Svelte, Tailwind, and Prettier

```sh
npx astro add svelte
npx astro add tailwindcss
npm install -D prettier
npm install -D prettier-plugin-astro prettier-plugin-svelte prettier-plugin-tailwindcss
npm install -D prettier-plugin-jsdoc prettier-plugin-pkg prettier-plugin-sh
curl --output prettier.config.mjs "https://raw.githubusercontent.com/redte-ch/ReDistributeMe/refs/heads/main/prettier.config.mjs"
curl --output .prettierignore "https://raw.githubusercontent.com/redte-ch/ReDistributeMe/refs/heads/main/.prettierignore"
```

Add the following to `Layout.astro`:

```astro
---
import './src/styles/global.css'
---
```

Then format and commit:

```sh
npx prettier --write .
git add -p
git add .
git commit -m "chore: add Svelte, Tailwind, and Prettier"
```

### Add `cypress` for testing:

```sh
npm install -D cypress
```

Create a `cypress.config.js` file:

```typescript
import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4321',
    supportFile: false
  }
})
```

### Questions & technical coaching

Any questions? Do you need help?
