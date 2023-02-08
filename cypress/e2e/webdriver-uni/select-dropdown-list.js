// ovo smo kucali od pocetka sve

/// <reference types="Cypress" />


describe("Interact with dropdown lists via webdriveruni", () => {

    it('Select specific values via select dropdown lists', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click()
        // dropdowm-menu-1

        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('testng').should('have.value', 'testng')
        //cy.get('#dropdowm-menu-3').select('jquery')
        //                                  ovje iz attr value a moze i tekst html-a JQuery
        cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery')

        // zadatak
        cy.get('#dropdowm-menu-2').select('maven').should('have.value', 'maven')
        cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG')




    })






})

