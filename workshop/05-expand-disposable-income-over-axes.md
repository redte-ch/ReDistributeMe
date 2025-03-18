# Expand Disposable Income Over Axes

### Clone, install, and run OpenFisca-Core

```sh
git clone git@github.com:openfisca/openfisca-core.git
cd openfisca-core
git checkout feat/add-axes-to-api
make install
make api
```

### Add Vue.js

```sh
npx astro add vue
```

Then format and commit:

```sh
npx prettier --write .
git add package-lock.json
git add -p
git commit -m "chore: add Vue.js"
```

### Modify `calculate.cy.ts`:

```diff
-it('Calculate disposable income', () => {
+it('Expand disposable income', () => {
  const page = cy.visit('/')
-  page.get('h1').should('have.text', 'Calculate Disposable Income')
-  page.get('pre').should('contain.text', '6993.3335')
+  page.get('h1').should('have.text', 'Expand Disposable Income')
+  page.get('pre').should('contain.text', '1183.3334')
+  page.get('pre').should('contain.text', '2013.3334')
+  page.get('pre').should('contain.text', '9323.333')
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
git commit -m "test: add expand disposable income test"
```

### Add `expandDisposableIncome.json`

```json
{
  "persons": {
    "Thomas": {},
    "Mauko": {}
  },
  "households": {
    "workshop": {
      "adults": ["Thomas", "Mauko"],
      "disposable_income": {
        "2025-03": null
      }
    }
  },
  "axes": [
    [
      {
        "count": 11,
        "name": "salary",
        "min": 0,
        "max": 10000,
        "period": "2025-03"
      }
    ]
  ]
}
```

Format and commit:

```sh
npx prettier --write .
git add -p
git add .
git commit -m "feat: add expand disposable income scenario"
```

### Add new component

Add `ExpandDisposableIncome.vue`:

```vue
<script setup lang="ts"></script>

<template>
  <main>
    <section>
      <h1>Expand Disposable Income Over Axes</h1>
      <pre>1234</pre>
    </section>
  </main>
</template>
```

Modify `index.astro`:

```astro
---
import ExpandDisposableIncome from '@/components/ExpandDisposableIncome.vue'
import Layout from '@/layouts/Layout.astro'
---

<Layout>
  <ExpandDisposableIncome client:idle />
</Layout>
```

Format and commit:

```sh
npx prettier --write .
git add -p
git add .
git commit -m "feat: add expand disposable income component"
```

### Questions & technical coaching

Any questions? Do you need help?
