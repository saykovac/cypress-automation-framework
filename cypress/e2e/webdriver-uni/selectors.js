/// <reference types="Cypress" />

describe("Selector examples", () => {
    it("Examples of Selectors via WebdriverUni Contact Us Page", () => {
        
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')


        // By tag name
        cy.get("input")

        // By attribute name and value
        cy.get("input[name='first_name']")

        // By ID
        cy.get("#contact_me")

        // By Class
        cy.get(".feedback-input")

        //By multiple classes
        cy.get("[class='navbar navbar-inverse navbar-fixed-top']")

        // By two different attributes
        cy.get("[name='email'][placeholder='Email Address']")

        // By Xpath
        cy.xpath("//input[@name='first_name']")
    })
})