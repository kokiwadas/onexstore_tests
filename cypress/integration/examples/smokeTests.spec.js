describe('Smoke tests', () => {
    it('should load onexstore website', () => {
        cy.visit('http://www.stage.onexstore.pl', { timeout: 10000 })
        cy.url().should('include', 'http://www.stage.onexstore.pl')
    })

    it('should click login button', () => {
        cy.viewport(2000, 1000)
        cy.get('div[class="modal-slide-listener"]').click()
        cy.get('a').contains('Zaloguj się').click()
        cy.url().should('include', 'zaloguj')
        cy.get('h1').contains('Zaloguj się')
    })

    it('should login to the existing user account', () => {
        cy.get('input[id="login-mail-input"]').type('koki.wadas@gmail.com')
        cy.get('input[id="password-input"]').type('Sheffield1')
        cy.get('button[class="btn btn-block btn--primary btn--md"]').click()
    })
})

