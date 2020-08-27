const { interpolate } = require("gsap/gsap-core")

describe('it fills out the sign up form and submits', () => {
    it('navigates to site', () => {
        cy.visit('http://localhost:3001/signup')
        cy.url().should('include', 'localhost')
    })
    it('types in email, phone number, password fields and submits', () => {
        cy.get('input[name="email"]')
        .type('ash@dean.com')
        cy.get('input[name="phone"]')
        .type('15556661234')
        cy.get('input[name="password"]')
        .type('testtesttesttest')
        cy.get('.submitBtn').click()
    })

    
})