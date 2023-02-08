/// <reference types="Cypress" />

describe("Test Datepicker via vebdriveruni", () => {
    beforeEach(() => {
      //cy.visit("http://webdriveruniversity.com/")
      cy.visit('/')
      cy.get("#datepicker").invoke("removeAttr", "target").click()
      cy.get('#datepicker').click()
    })

    it('Select date from datepicker', () => {

        // let dateStart = new Date()
        // dateStart.setDate(dateStart.getDate())        // get current day
        // cy.log('Pocetni datum je: ' + dateStart.getDate() + '.')
        
        // let dateEnd = new Date()
        // dateEnd.setDate(dateStart.getDate() + 5)    //  br dana koji zelimo da dodamo
        // cy.log('Krajnji datum je: ' + dateEnd.getDate() + '.')              // current date + 5 days
        

        let date = new Date()
        date.setDate(date.getDate() + 409)   //  dane dodajemo na osnovu danjasnjeg

        let futureDay = date.getDate()
        let futureMonth = date.toLocaleString('default', {month: "long"})
        let futureYear = date.getFullYear()

        cy.log('Future day to select: ' + futureDay)
        cy.log('Future month to select: ' + futureMonth)
        cy.log('Future year to select: ' + futureYear)

        function selectMonthAndYear() {
            
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if (!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                    // klikci dok ne stoignes do sl godine
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if (!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                        // klikci dok ne stoignes do sl godine
                    }
                })
            }

            )
        }

        function selectFutureDay() {
            cy.get('[class="day"]').contains(futureDay).click()
        }

        selectMonthAndYear()
        selectFutureDay()
        

        cy.log('Future day to select: ' + futureDay)
        cy.log('Future month to select: ' + futureMonth)
        cy.log('Future year to select: ' + futureYear)
    })

})