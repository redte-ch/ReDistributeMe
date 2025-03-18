# Expand Disposable Income Over Axes

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
+it('Expand disposable income', () => {
-it('Calculate disposable income', () => {
  const page = cy.visit('/')
+  page.get('h1').should('have.text', 'Expand Disposable Income')
-  page.get('h1').should('have.text', 'Calculate Disposable Income')
+  page.get('pre').should('contain.text', '1183.3334')
+  page.get('pre').should('contain.text', '2013.3334')
+  page.get('pre').should('contain.text', '9323.333')
-  page.get('pre').should('contain.text', '6993.3335')
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
