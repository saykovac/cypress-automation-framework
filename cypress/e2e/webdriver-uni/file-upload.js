/// <reference types="Cypress" />
// dodati fajl u folder fixtures

describe("Test File Upload via vebdriveruni", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/")
      cy.get("#file-upload").invoke("removeAttr", "target").click()
    })

    it('Upload a file...', () => {
        cy.get('#myFile').selectFile('cypress/fixtures/laptop.webp')
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq ('Your file has now been uploaded!')
        })
        
    })
    it('Upload no file...', () => {
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eq ('You need to select a file to upload!')
        })

    })

    // nadji i assertuj js poruke za uspesan i neuspesan upload
    

})