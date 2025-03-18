# Calculate Income Tax, Part 2

### Add an input for the situation

Modify `CalculateIncomeTax.svelte`:

```diff
+    <textarea bind:value={payload} />
```

Make the payload reactive:

```diff
+  let payload: string = JSON.stringify(situation)
-  const payload: string = JSON.stringify(situation)
```

Add some formating to the content of the payload:

```diff
+  let payload: string = JSON.stringify(situation, null, 2)
-  let payload: string = JSON.stringify(situation)
```

Add some space to the textarea:

```diff
+    <textarea bind:value={payload} rows="15" />
-    <textarea bind:value={payload} />
```

Modify `global.css` to style a bit the textarea:

```diff
+textarea {
+  margin: 0.5em;
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
