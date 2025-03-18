# Calculate Disposable Income

### Objective

Calculate a variable for a group of individuals.

### Try this out in Swagger

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

```diff
-it('Calculate income tax', () => {
+it('Calculate disposable income', () => {
  const page = cy.visit('/')
-  page.get('h1').should('have.text', 'Calculate Income Tax')
-  page.get('pre').should('contain.text', '600')
+  page.get('h1').should('have.text', 'Calculate Disposable Income')
+  page.get('pre').should('contain.text', '6993.3335')
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

### Add `CalculateDisposableIncome.tsx`

```tsx
import { useState, useEffect } from 'react'
import { calculate } from '@/services/openfisca'
import situation from '@/situations/calculateDisposableIncome.json'

export default function () {
  const [data, setData]: [string, any] = useState('Calculating...')
  const payload: string = JSON.stringify(situation)

  useEffect(() => {
    calculate(payload).then((result) => {
      setData(JSON.stringify(result, null, 2))
    })
  }, [])

  return (
    <main>
      <section>
        <h1>Calculate Disposable Income</h1>
        <pre>{data}</pre>
      </section>
    </main>
  )
}
```

Format, test, and commit:

```sh
npx prettier --write .
npm cypress run
git add -p
git add .
git commit -m "feat: add calculate disposable income component"
```

### Questions & technical coaching

Any questions? Do you need help?
