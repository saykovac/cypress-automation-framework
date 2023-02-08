// ovo smo kucali od pocetka sve

/// <reference types="Cypress" />


describe("Verify radio buttons via webdriveruni", () => {

    beforeEach(function() {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
    })

    it('Check specific radio buttons', () => {
        //cy.visit('http://www.webdriveruniversity.com/')
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get('#radio-buttons').find('[type="radio"]').first().check()
        cy.get('#radio-buttons').find('[type="radio"]').eq(2).check()
        //                                         ovo je index i zato je trecu izabralo iako je prvo prvu

    })

    it('Validate state of specific radio buttons', () => {
        //cy.visit('http://www.webdriveruniversity.com/')
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        // [value='lettuce']
        // [value='cabbage']
        // [value='pumpkin']

        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')

        cy.get('[value="lettuce"]').check()
        cy.get('[value="lettuce"]').should('be.checked')
        cy.get('[value="pumpkin"]').should('not.be.checked')

        cy.get("[value='cabbage']").should('be.disabled')

       
    })





})

