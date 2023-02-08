
/// <reference types="Cypress" />


describe("Test mouse actions", () => {

    it('Scroll element into views', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        //                skroluje se do elementa pre bilo kakve akcije

    })

    it('I should be able to drag and drop a draggable item', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        //                skroluje se do elementa pre bilo kakve akcije
        cy.get('#draggable').trigger('mousedown', {which: 1})
        //                         dodejmo misem | klik na centar elementa
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
        //                              uzimamo misem  |  pustanje klika

    })

    it('I should be able to perform a double mouse click', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        //                skroluje se do elementa pre bilo kakve akcije
        cy.get('#double-click').dblclick()
        cy.get('#double-click').dblclick()
        cy.get('#double-click').dblclick()
        cy.get('#double-click').dblclick()
        cy.get('#double-click').dblclick()
        cy.get('#double-click').dblclick()

    })

    it('I should be able to hold down left mouse click button on a given element', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click()
        //                skroluje se do elementa pre bilo kakve akcije
        cy.get('#click-box').trigger('mousedown', {which: 1}).then(($element) => {
        //                       klik sa zadrskom | centar elementa
            expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
            //                              atr css-a      |    ocekujemo ovu boju na klik i zadrsku
        })
        

    })

})

