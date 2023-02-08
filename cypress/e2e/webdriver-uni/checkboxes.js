// ovo smo kucali od pocetka sve

/// <reference types="Cypress" />

describe("Verify checkboxes via webdriveruni", () => {

    beforeEach(() => {
        //cy.visit('http://www.webdriveruniversity.com/')
        // u dodali smo baseURL u env u cypress.config.js fajl i onda se samo sa '/' poziva base URL
        // cy.visit('/')
        // cy.navigateTo_WebdriverUni_Homepage()
        // // napravljena komanda u commands.js koju pozivamo
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.navigateTo_WebdriverUni_Checkbox_Page()
        // ovo je komanda za podstranicu chekckbox
    })

    it('Check and validate checkbox', () => {
        // cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').check().as('option-1')
        cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')

    })

    it('Uncheck and validate uncheckbox', () => {
        // cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        cy.get('#checkboxes > :nth-child(5) > input').uncheck().as('option-3')
        cy.get('@option-3').uncheck()
        cy.get('@option-3').uncheck().should('not.be.checked')

    })

    it('Check multiple checkboxes', () => {
        // cy.visit('http://www.webdriveruniversity.com/')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()

        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-4']).should('be.checked')
        //                                                          option-3 je defult checkiran

    })

})

