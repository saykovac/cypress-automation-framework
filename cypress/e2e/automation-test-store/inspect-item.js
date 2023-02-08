/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
// ovo iznad se dodaje kada imamo negde u kodu cy.xpath

describe('Inspect Automation Test Store items using chain of commands', () => {
    it('Click on the first item using item header', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
        // ovo gore nam je cypress ponudio kao selektor
    })

    it.only('Click on the first item using item text', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText) {
            console.log('Selected the following item: ' + itemHeaderText.text())
            cy.log('Selected the following item: ' + itemHeaderText.text())

        })
        // css klasa ispisuje velikim slovima ime, 
        // ali je u kodu i tekstu <a> ovako iznad 'Skinsheen Bronzer Stick'
    })

    it('Click on the first item using index', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
    })
})