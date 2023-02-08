// ovo smo kucali od pocetka sve

/// <reference types="Cypress" />


describe("Validate webdriveruni homepage links", () => {


    it("Confirm links redirect to correct pages", () => {
        //cypress code
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')
        //                         kraj url .html
        cy.go('back')
        // komanda za unazad
        cy.reload()
        cy.url().should('include', 'http://www.webdriveruniversity.com/')

        //cy.reload(true)
        // reload without using cache

        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click()
        //                                                      ne mora force: true jer je noviji cypress
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'To-Do-List')


    })


})

