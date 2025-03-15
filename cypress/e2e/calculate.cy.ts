it('Calculate disposable income', () => {
  const page = cy.visit('/')
  page.get('h1').should('have.text', 'RedistributeMe')
  page.get('pre').should('contain.text', '6993.3335')
})
