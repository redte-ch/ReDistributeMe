# Calculate Disposable Income

### Add React

```sh
npx astro add react
```

Then format and commit:

```sh
npx prettier --write .
git add package-lock.json
git add -p
git commit -m "chore: add React"
```

### Modify `calculate.cy.ts`:

```typescript
it('Calculate disposable income', () => {
  const page = cy.visit('/')
  page.get('h1').should('have.text', 'RedistributeMe')
  page.get('pre').should('contain.text', '6993.3335')
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
git commit -m "test: add calculate disposable income test"
```

### Modify `index.astro`:

```astro
---
import CalculateDisposableIncome from '@/components/CalculateDisposableIncome.tsx'
import Layout from '@/layouts/Layout.astro'
---

<Layout>
  <CalculateDisposableIncome client:idle />
</Layout>
```

Format and commit:

```sh
npx prettier --write .
git add -p
git commit -m "feat: add calculate disposable income to index"
```

### Add `calculateDisposableIncome.json`

```json
{
  "persons": {
    "Thomas": {
      "salary": {
        "2025-03": 4000
      }
    },
    "Mauko": {
      "salary": {
        "2025-03": 3000
      }
    }
  },
  "households": {
    "workshop": {
      "adults": ["Thomas", "Mauko"],
      "disposable_income": {
        "2025-03": null
      }
    }
  }
}
```

Format and commit:

```sh
npx prettier --write .
git add -p
git commit -m "feat: add disposable income situation"
```
