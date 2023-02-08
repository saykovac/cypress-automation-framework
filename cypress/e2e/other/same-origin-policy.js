// ovo smo kucali od pocetka sve

/// <reference types="Cypress" />


describe("Cypress web security", () => {


    it.skip("Validate visiting two different domains", () => {

        cy.visit('http://www.webdriveruniversity.com/')
        cy.visit('https://www.google.com/')

    })

    it("Validate visiting two different domains via user actions", () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()
    })

    // ovo je dodato u novi cypress i drugacije je
    it.skip('Origin command', () => {
        cy.origin('webdriveruniversity.com'), () => {
            cy.visit('/');
        }

        cy.origin('automationteststore.com'), () => {
            cy.visit('/');
        }
    })
})

