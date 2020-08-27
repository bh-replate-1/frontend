const { interpolate } = require("gsap/gsap-core")

describe ('Sign in and stuff', () => {
    it('navigate to site', () => {
        cy.visit('http://localhost:3001/signin')
        cy.url().should('include', 'localhost')
    })

    it('types in the email and password fields and clicks log in', () => {
        cy.get('input[name="email"]')
        .type('dean@dean.com')
        cy.get('input[name="password"]')
        .type('testtesttesttest')
        cy.get('.submitBtn').click()
    })
})