# Calculate Income Tax, Part 1

### Add a test for the calculation of income tax

Create a `calculate.cy.ts`:

```typescript
it('Calculate income tax', () => {
  const page = cy.visit('/')
  page.get('h1').should('have.text', 'Calculate Income Tax')
  page.get('pre').should('contain.text', '1234')
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

```svelte
<main>
  <section>
    <h1>Calculate Income Tax</h1>
    <pre>1234</pre>
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
import CalculateIncomeTax from '@/components/CalculateIncomeTax.svelte'
import Layout from '@/layouts/Layout.astro'
---

<Layout>
  <CalculateIncomeTax />
</Layout>
```

Make test pass, format, and commit:

```sh
npx prettier --write .
npx cypress run
git add -p
git commit -m "test: make calculate income tax test pass"
```

### Add the situation to `calculateIncomeTax.json`

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

### Calculate income tax with the OpenFisca API

Fix the test:

```diff
it('Calculate income tax', () => {
  const page = cy.visit('/')
  page.get('h1').should('have.text', 'Calculate Income Tax')
+  page.get('pre').should('contain.text', '600')
-  page.get('pre').should('contain.text', '1234')
})
```

Add a function to call the OpenFisca API:

```typescript
export const calculate = async (payload: string) => {
  const response = await fetch(
    'https://api.demo.openfisca.org/latest/calculate',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload
    }
  )

  return await response.json()
}
```

Modify `CalculateIncomeTax.svelte`:

```svelte
<script lang="ts">
  import { onMount } from 'svelte'
  import { calculate } from '@/services/openfisca'
  import situation from '@/situations/calculateIncomeTax.json'

  const payload: string = JSON.stringify(situation)

  let data: string = 'Calculating...'

  onMount(async () => {
    data = JSON.stringify(await calculate(payload), null, 2)
  })
</script>

<main>
  <section>
    <h1>Calculate Income Tax</h1>
    <pre>{data}</pre>
  </section>
</main>
```

For our component to be rendered client-side, we need to add to `index.astro`:

```diff
<Layout>
+  <CalculateIncomeTax client:idle />
-  <CalculateIncomeTax />
</Layout>
```

Format, test, and commit:

```sh
npx prettier --write .
npx cypress run
git add -p
git add .
git commit -m "feat: calculate income tax"
```

### Finally, let's add some styles to our component

Take a look at these links to copy some styles:

- https://jetthoughts.com/blog/vertical-align-with-full-screen-across-tailwind-css-jetthoughts/
- https://tailwindcss.com/plus/ui-blocks/application-ui/layout/cards#component-4beba7dd94a1e5d6fd88a6d46236b4b7
- https://tailwindcss.com/plus/ui-blocks/application-ui/headings/card-headings#component-c3692309ba3a2cd4c439031e104ad97a

Then add the following to `global.css`:

```diff
@import 'tailwindcss';

+main {
+  @apply flex h-screen items-center justify-center;
+}
+
+section {
+  @apply divide-y divide-gray-100 overflow-hidden rounded-lg bg-gray-50 shadow-sm;
+}
+
+h1 {
+  @apply px-4 py-5 font-semibold text-gray-900 sm:px-6;
+}
+
+pre {
+  @apply px-4 py-5 sm:p-6;
+}
```

Format and commit:

```sh
npx prettier --write .
git add -p
git commit -m "style: add global styles"
```
