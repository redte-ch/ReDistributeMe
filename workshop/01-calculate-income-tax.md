# First Iteration

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

Create a `calculate-income-tax.cy.ts`:

```typescript
it('Calculate income tax', () => {
  const page = cy.visit('/')
  page.get('h1').should('have.text', 'RedistributeMe')
  page.get('span').should('have.text', '1234')
})
```

Run the tests:

```sh
npx cypress run
```

Format and commit:

```sh
npx prettier --write .
git add -p
git add .
git commit -m "test: add calculate income tax test"
```

### Add `CalculateIncomeTax.svelte`

Take a look at these links to copy some styles:

- https://jetthoughts.com/blog/vertical-align-with-full-screen-across-tailwind-css-jetthoughts/
- https://tailwindcss.com/plus/ui-blocks/application-ui/layout/cards#component-4beba7dd94a1e5d6fd88a6d46236b4b7
- https://tailwindcss.com/plus/ui-blocks/application-ui/headings/card-headings#component-c3692309ba3a2cd4c439031e104ad97a

Then add the following to `CalculateIncomeTax.svelte`:

```svelte
<main class="flex h-screen items-center justify-center">
  <section
    class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm"
  >
    <h1 class="px-4 py-5 font-semibold text-gray-900 sm:px-6">
      RedistributeMe
    </h1>
    <p class="px-4 py-5 sm:p-6">Income tax: <span>1234</span></p>
  </section>
</main>
```

Format and commit:

```sh
npx prettier --write .
git add -p
git add .
git commit -m "feat: add calculate income tax component"
```

### Add `CalculateIncomeTax.svelte` to `index.astro`

```astro
---
import CalculateIncomeTaxSvelte from '@/components/CalculateIncomeTax.svelte'
import Layout from '@/layouts/Layout.astro'
---

<Layout>
  <CalculateIncomeTaxSvelte />
</Layout>
```

Make test pass, format, and commit:

```sh
npx prettier --write .
npx cypress run
git add -p
git commit -m "test: make calculate income tax test pass"
```

### Add client-side rendering to `index.astro

```astro
---
import CalculateIncomeTaxSvelte from '@/components/CalculateIncomeTax.svelte'
import Layout from '@/layouts/Layout.astro'
---

<Layout>
  <CalculateIncomeTaxSvelte client:idle />
</Layout>
```

### Add `calculateIncomeTax.json`

```json
{
  "persons": {
    "Thomas": {
      "salary": {
        "2025-03": 4000
      },
      "income_tax": {
        "2025-03": null
      }
    }
  }
}
```

### Add `Situation.ts`

```typescript
export type Situation = {
  persons: {
    [key: string]: {
      [key: string]: {
        [key: string]: number
      }
    }
  }
}
```

### Calculate income tax with the OpenFisca API

Fix the test:

```typescript
it('Calculate income tax', () => {
  const page = cy.visit('/')
  page.get('h1').should('have.text', 'RedistributeMe')
  page.get('span').should('have.text', '600')
})
```

Modify `CalculateIncomeTax.svelte`:

```svelte
<script lang="ts">
  import { onMount } from 'svelte'
  import situation from '@/situations/calculateIncomeTax.json'
  import type { Situation } from '@/models/Situation.ts'

  export let data: number
  const payload: string = JSON.stringify(situation)

  onMount(async () => {
    const response = await fetch(
      'https://api.demo.openfisca.org/latest/calculate',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
      }
    )

    const result: Situation = await response.json()
    data = result.persons.Thomas.income_tax['2025-03']
  })
</script>

<main class="flex h-screen items-center justify-center">
  <section
    class="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm"
  >
    <h1 class="px-4 py-5 font-semibold text-gray-900 sm:px-6">
      RedistributeMe
    </h1>
    <p class="px-4 py-5 sm:p-6">
      Income tax:
      <span>
        {#if data}{data}{:else}calculating...{/if}
      </span>
    </p>
  </section>
</main>
```

Format and commit:

```sh
npx prettier --write .
npx cypress run
git add -p
git add .
git commit -m "feat: calculate income tax"
```
