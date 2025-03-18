# Calculate Disposable Income, Part 2

### Objective

Recalculate a variable for a group of individuals, in increments.

### Try this out in Swagger

```json
{
  "persons": {
    "Thomas": {
      "salary": {
        "2025-03": 5000
      }
    },
    "Mauko": {
      "salary": {
        "2025-03": 4000
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

### Add a button to recalculate the situation

Modify `CalculateDisposableIncome.tsx`:

```diff
        <h1>Calculate Disposable Income</h1>
        <pre>{data}</pre>
+        <p>
+          <button onClick={increment}>+1000 salary</button>
+        </p>
```

Add the `increment` function:

```diff
+  const increment = async () => {
+    const salary = JSON.parse(data).persons['Mauko'].salary['2025-03']
+    const next = JSON.parse(payload)
+    next.persons['Mauko'].salary['2025-03'] = salary + 1000
+    const result = await calculate(JSON.stringify(next))
+    setData(JSON.stringify(result, null, 2))
+  }
```

Format, test, and commit:

```sh
npx prettier --write .
npx cypress run
git add -p
git commit -m "feat: recalculate disposable income"
```

### Questions & technical coaching

Any questions? Do you need help?
