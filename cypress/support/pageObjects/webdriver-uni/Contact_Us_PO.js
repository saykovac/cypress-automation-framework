class Contact_Us_Page_PO {
    // kopiralio smo i izmenili kod iz command.js
    //Cypress.Commands.add("webdriverUni_ContactForm_Submission", (firstName, lastName, email, comment, $selector, textToLocate) => {
    contactForm_Submission(firstName, lastName, email, comment, $selector, textToLocate) {
        // uzimamo iz example.json fajls
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click()
        //cy.get($selector).contains(textToLocate)
        cy.get($selector).contains(textToLocate, {timeout: 20000})
        //                                      cekace do 20s ako odmah ne nadje element i nakon 60s pada test

        //cy.get($selector).pause().contains(textToLocate, {timeout: 20000})
        //                 umetnuli smo pauzu pre provere

        cy.screenshot() /* ako ovde pukne ne izvrsava se dalje kod */
        // da pravimo skrinsotove i ako ne pada test
        cy.screenshot('Make a contact us form submission')
        //              dajemo ime skrinsotu ili skrinsotovima; koliko testova u fajlu, toliko i skrinsotova

    }
}

export default Contact_Us_Page_PO