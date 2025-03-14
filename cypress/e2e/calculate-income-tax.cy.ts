it('Calculate income tax', () => {
  const page = cy.visit('/')
  page.get('h1').should('have.text', 'RedistributeMe')
  page.get('span').should('have.text', '1234')
})
