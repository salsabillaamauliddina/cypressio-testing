
it ('assert demo', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('get').click()

    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class', 'query-btn')
        .and('be.visible')
        .and('be.enabled')
        // .should('contain','Button')
        // .should('have.class', 'query-btn')
        // .should('be.visible')

    // expect(true).to.be.true
    // let name = 'cypress';
    // expect(name).to.be.equal('cypress');
}) 