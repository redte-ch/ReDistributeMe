it('Expand disposable income', () => {
  const page = cy.visit('/')
  page.get('h1').should('have.text', 'Expand Disposable Income Over Axes')
  page.get('pre').should('contain.text', '1183.3334')
  page.get('pre').should('contain.text', '5333.3335')
  page.get('pre').should('contain.text', '9323.333')
})
