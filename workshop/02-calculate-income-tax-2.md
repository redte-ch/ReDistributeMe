# Calculate Income Tax, Part 2

### Add an input for the situation

Modify `CalculateIncomeTax.svelte`:

```diff
+    <textarea bind:value={payload} />
```

Make the payload reactive:

```diff
-  const payload: string = JSON.stringify(situation)
+  let payload: string = JSON.stringify(situation)
```

Add some formating to the content of the payload:

```diff
-  let payload: string = JSON.stringify(situation)
+  let payload: string = JSON.stringify(situation, null, 2)
```

Add some space to the textarea:

```diff
-    <textarea bind:value={payload} />
+    <textarea bind:value={payload} rows="15" />
```

Modify `global.css` to style a bit the textarea:

```diff
+textarea {
+  @apply bg-white;
+  margin: 1em;
+}
+
+textarea,
pre {
  @apply px-4 py-5 sm:p-6;
}
```

Format and commit:

```sh
npx prettier --write .
git add -p
git commit -m "feat: add a textarea to calculate income tax component"
```

### Add a button to recalculate based on new input

Modify `CalculateIncomeTax.svelte`:

```diff
    <pre>{data}</pre>
+    <p><button on:click={recalculate}>Recalculate</button></p>
  </section>
```

Take a look at these links to copy some styles:

- https://tailwindcss.com/docs/text-align
- https://v1.tailwindcss.com/components/buttons

Modify `global.css` to style a bit the button:

```diff
textarea,
-pre {
+pre,
+p {
  @apply px-4 py-5 sm:p-6;
}

+p {
+  @apply text-center;
+}
+
+button {
+  @apply rounded bg-blue-500 px-4 py-2 text-center font-bold text-white hover:bg-blue-600;
+}
```

Format and commit:

```sh
npx prettier --write .
git add -p
git commit -m "feat: add button to recalculate income tax"
```

### Implement the `recalculate` function

Modify `CalculateIncomeTax.svelte`:

```diff
+  const recalculate = async () => {
+    data = JSON.stringify(await calculate(payload), null, 2)
+  }
```

And modify the `onMount` function to use the `recalculate` function:

```diff
-  onMount(async () => {
-    data = JSON.stringify(await calculate(payload), null, 2)
-  })
+  onMount(async () => {await recalculate()})
```

Change the `salary` and click recalculate:

```diff
{
  "persons": {
    "Thomas": {
      "salary": {
-        "2025-03": 4000
+        "2025-03": 5000
      },
      "income_tax": {
        "2025-03": null
      }
    }
  }
}
```

Add `capital_returns` and click recalculate:

```diff
{
  "persons": {
    "Thomas": {
      "salary": {
        "2025-03": 5000
      },
+      "capital_returns": {
+        "2025-03": 1000
+      },
      "income_tax": {
        "2025-03": null
      }
    }
  }
}
```

Format, test, and commit:

```sh
npx prettier --write .
npx cypress run
git add -p
git commit -m "feat: recalculate income tax"
```
