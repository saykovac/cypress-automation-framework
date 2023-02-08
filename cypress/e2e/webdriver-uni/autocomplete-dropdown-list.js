/// <reference types="Cypress" />


describe("Verify Autocomplete dropdown lists via webdriveruni", () => {

    it('Select specific product via autocomplete lists', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click()

        cy.get('#myInput').type('A')

        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            //  div koji prikazuje rezultate na auto kucanje
            //  dodajemo > * jer * obuhvata sve rezultate

            const product = $el.text()
            // sa JQuery cupamo tekst
            const productToSelect = 'Apple'
            //                      ono sto trazimo

            if (product === productToSelect) {
                // $el.click() 
                //noviji cypress precrtava click(); sada se koristi trigger("click")
                $el.trigger("click")

                cy.get('#submit-button').click()
                cy.url().should('include', productToSelect)
                //                      zato sto izabrani proizvod ide u url
            }

        }).then(() => {
            cy.get('#myInput').type('g')

            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const product = $el.text()
                const productToSelect = 'Grapes'

                if (product === productToSelect) {
                    $el.trigger("click")

                    cy.get('#submit-button').click()
                    cy.url().should('include', productToSelect)
                    //                      zato sto izabrani proizvod ide u url
                }
            })
        })
    })

})

