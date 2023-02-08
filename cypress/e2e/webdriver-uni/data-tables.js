/// <reference types="Cypress" />

describe("Handling data via webdriveruni", () => {
    beforeEach(() => {
      //cy.visit("http://webdriveruniversity.com/")
      cy.visit('/')
      cy.get("#data-table").invoke("removeAttr", "target").click()
    })

    it('Calculate and assert the total age of all users', () => {

        let userDetails = []
        let numb = 0
        cy.get('#thumbnail-1 td').each(($el, index, $list) => {
            userDetails[index] = $el.text()
        }).then(() => {
            let i
            for (let i = 0; i < userDetails.length; i++) {
                //cy.log(userDetails[i])

                if (Number(userDetails[i])) {
                // ako je celija sa brojem dodaj
                    numb += Number(userDetails[i])
                //  samo celije gde imamo brojeve
                }
            
            }
            cy.log('Zbir godina korisnika iz tabele iznosi: ' + numb)
            expect(numb).to.eq(322)
        })
        
    })

    it('Calculate and assert the age of a given user based on last name', () => {
        cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes("Woods")) {
                cy.get('#thumbnail-1 tr td:nth-child(2)').eq(index).next().then(function(age) {
                    const userAge = age.text()
                    expect(userAge).to.eq("80")

                    cy.log("Gosn. " + text + " ima " + userAge + " godina.")
                })
            }
            
        })
    })

})