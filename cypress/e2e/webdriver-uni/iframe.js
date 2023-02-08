// ovo smo kucali od pocetka sve

/// <reference types="Cypress" />


describe("Handling IFrame & Modals", () => {


    it("Handle webdriveruni iframe and modal", () => {
        //cypress code
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#iframe').invoke('removeAttr', 'target').click()

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            // napravimo knstantu i jurimo body tag
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')
        // mora da se nadje modal

        // ovo ispod sam ja probao i radilo je
        //cy.get('@modal').contains('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')

        cy.get('@modal').should(($expectedText) => {
            const textModal = $expectedText.text()
            expect(textModal).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods')
            //                      sa include mne mora ceo tekst

        })

        cy.get('@modal').contains('Close').click()


    })

})

