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
git add .
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
git add .
git commit -m "test: add calculate disposable income test"
```
