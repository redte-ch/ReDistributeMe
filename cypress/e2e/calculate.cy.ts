it('Expand disposable income', () => {
  const page = cy.visit('/')
  page.get('h1').should('have.text', 'Expand Disposable Income')
  page.get('pre').should('contain.text', '1183.3334')
  page.get('pre').should('contain.text', '2013.3334')
  page.get('pre').should('contain.text', '9323.333')
})
