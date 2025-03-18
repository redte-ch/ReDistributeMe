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
+pre,
-pre {
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
