// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })

Cypress.Commands.add("navigateTo_WebdriverUni_Homepage", () => {
//  pravimo komandu koja ce ici na url
    cy.visit('/')
})

Cypress.Commands.add("navigateTo_WebdriverUni_Checkbox_Page", () => {
    //  pravimo komandu koja ce ici na url
        cy.visit('/' + '/Dropdown-Checkboxes-RadioButtons/index.html')
    })

    Cypress.Commands.add("selectProduct", productName => {
        // napravili smo templejt za kastm komandu
        // ovo dole smo uzeli iz automationstore iterate-over-element
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            //if ($el.text().includes('Curls to straight Shampoo')) {
            if ($el.text().includes(productName)) {
            //                          iz linije 23 cypressCommands
                cy.wrap($el).click()
            }
            
        })
    })

    Cypress.Commands.add("addProductToBasket", productName => {
        // napravili smo templejt za kastm komandu
        // ovo dole smo uzeli iz automationstore iterate-over-element
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            //if ($el.text().includes('Curls to straight Shampoo')) {
            if ($el.text() === productName) {
                cy.log($el.text())
                cy.get('.productcart').eq(index).click()
            }
            
        })
    })



    Cypress.Commands.add("webdriverUni_ContactForm_Submission", (firstName, lastName, email, comment, $selector, textToLocate) => {
        // uzimamo iz example.json fajls
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click()
        cy.get($selector).contains(textToLocate)
        //cy.get('h1').should('have.text', 'Thank You for your Message!')
        // umesto h1 smo stavili $selector da bi imali razlicite poruke
    })

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
