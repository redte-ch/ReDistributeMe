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

```diff
+it('Calculate disposable income', () => {
-it('Calculate income tax', () => {
  const page = cy.visit('/')
+  page.get('h1').should('have.text', 'Calculate Disposable Income')
-  page.get('h1').should('have.text', 'Calculate Income Tax')
+  page.get('pre').should('contain.text', '6993.3335')
-  page.get('pre').should('contain.text', '600')
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
import type { Situation } from '@/models/Situation'
import situation from '@/situations/calculateDisposableIncome.json'

export default function () {
  const [data, setData]: [string, any] = useState('Calculating...')
  const payload: string = JSON.stringify(situation)

  const fetchData = async () => {
    const response = await fetch(
      'https://api.demo.openfisca.org/latest/calculate',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
      }
    )

    const result: Situation = await response.json()
    setData(JSON.stringify(result, null, 2))
  }

  useEffect(() => {
    fetchData().catch(null)
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

Format and commit:

```sh
npx prettier --write .
git add -p
git add .
git commit -m "feat: add calculate disposable income component"
```

### Fix types

Modify `Situation.ts`:

```typescript
type Person = string
type Household = string
type Role = string
type Variable = string
type Date = string
type Value = number | null

export type Situation = {
  persons: {
    [key: Person]: {
      [key: Variable]: {
        [key: Date]: Value
      }
    }
  }
  households: {
    [key: Household]: {
      [key: Role | Variable]: Person[] | { [key: Date]: Value }
    }
  }
}
```

Format, check types, test, and commit:

```sh
npx prettier --write .
npx astro check
npx cypress run
git add -p
git commit -m "refactor: fix types"
```
