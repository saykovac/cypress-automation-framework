
/// <reference types="Cypress" />



describe("Handle JS alerts", () => {


    it("Confirm JS alerts contains the correct text", () => {
        
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq ('I am an alert box!')
        })

    })

    it("Validate JS confirm alert box works correctly when clicking OK", () => {
        
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()
        // cypress auto klikce na ok kod js popupa

        cy.on('window:alert', (str) => {
            return true
            // sa false bi kliknulo na dr dugme ali onda ne moze :alert nego :confirm u u proincipu treba koristiti :confirm
        })

        cy.get('#confirm-alert-text').contains('You pressed OK!')

    })

    it("Validate JS confirm alert box works correctly when clicking Cancel", () => {
        
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()

        cy.on('window:confirm', (str) => {
            return false
            // sa false bi kliknulo na dr dugme
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')

    })

    it.only("Validate JS confirm alert box using a stub", () => {
        
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()

        const stub = cy.stub()
        cy.on('window:confirm', stub)
        // linkovali smo stub na event 


        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
            //     0 je jer ima samo jedna poruka tj jedan rezultat
            //                                      tekst koji se pojavljuje u alertu
        }).then(() => {
            return true
        }).then (() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })

    })


})

