// <reference types="cypress"/>

it('google search', () => {
    cy.visit('www.google.com')

    cy.get('.gLFyf').type('How to learn QA{Enter}')

    // cy.get('.gLFyf', {timeout: 5000}).type('How to learn QA{Enter}')

    // cy.contains('Google Search').click()
    cy.contains('Video').click()
})