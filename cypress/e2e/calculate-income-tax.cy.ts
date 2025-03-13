it('Calculate income tax', () => {
  const page = cy.visit('/')
  page.get('title').should('have.text', 'RedistributeMe')
  page.get('pre').should('have.text', '1234')
})
