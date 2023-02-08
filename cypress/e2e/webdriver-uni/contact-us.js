// ovo smo kucali od pocetka sve

/// <reference types="Cypress" />
import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO"
import Contact_Us_Page_PO from "../../support/pageObjects/webdriver-uni/Contact_Us_PO"



describe("Test Contact Us form via WebdriverUni", () => {
    // gazimo deafult vreme cekanja koje je 10s na 20s

    Cypress.config('defaultCommandTimeout', 20000)

    const homepage_PO = new HomePage_PO()
    const contact_Us_PO = new Contact_Us_Page_PO()

    before(() => {
        cy.fixture('example.json').then((data) => {
            // example.json je zapravo example.json iz fixtures foldera iz koga ucitavamo podatke
            // this.data = data
            globalThis.data = data
            // globalThis kad nece samo this
        })
    })


    beforeEach(() => {
        //cy.visit('http://www.webdriveruniversity.com/')
        //cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        //cy.visit('/' + '/Contact-Us/contactus.html')
        //cy.visit(Cypress.env('webdriveruni_homepage') + '/Contact-Us/contactus.html')

        //const homepage_PO = new HomePage_PO()
        // selimo const u describe
        homepage_PO.visithomepage()
        // zovemo svoju konstantu koju smo napravili i biramo metodu iz nje
        
        cy.wait(3000)
        // sa wait kuliramo 3s pre prelaska na sl komandu
        
        homepage_PO.clickOn_ContacUs_Button()
        // zovemo svoju konstantu koju smo napravili i biramo metodu iz nje

        //cy.pause()
        // pauziramo test da prosvrljamo rucno ako zelimo i sl

        
    })


    it("Should be able to submit a successful submission via contact us form", () => {
        //cypress code
        //cy.visit('http://www.webdriveruniversity.com/')
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
        // ovim iznad asertujemo da li dokument, tj html stranica, ima charset sa vrednoscu utf-8 
        // koji stoji u jednom od meta tagova
        // iako je u tagu malo utf ovde se kuca veliko UTF
        
        // sad pomocu jQuery idemo na klik koji otvara u sl tabu (cypress ne radi sa vise tabova)
        // ali peglamo ga
        // cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        //                        jQuery komanda da uklonimo atribut da ne bi otvarao zbog _blank u novom tabu
        //cy.get('#contact-us').click({force:true})
        // force true je dodat kao option ali zapravo novi cypress klikce a da ne mora force
        cy.title().should("include", "WebDriver | Contact Us")
        cy.url().should("include", "contactus")
        // uzet samo deo url


        // //cy.get('[name="first_name"]').type('Totò')
        // cy.get('[name="first_name"]').type(data.first_name)  // uzimamo iz json fajla
        // //cy.get('[name="last_name"]').type('Schillaci')
        // cy.get('[name="last_name"]').type(data.last_name)  // uzimamo iz json fajla
        // //cy.get('[name="email"]').type('toto@schillaci.it')
        // cy.get('[name="email"]').type(data.email)  // uzimamo iz json fajla
        // // cy.get('textarea.feedback-input').type
        // //      ("Real Totò's name is Salvatore. So, full name is Salvatore Totò  Schillaci.")
        // cy.get('textarea.feedback-input').type(data.totoStory)  // uzimamo iz json fajla
        // cy.get('[type="submit"]').click()
        // cy.get('h1').should('have.text', 'Thank You for your Message!')

        //cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, data.email, data.totoStory, "h1", "Thank You for your Message!")
        //       u sl redu ucitavamo first_name iz cypres.config,js fajla iz env{} dela koji smo dodali
        //cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, data.totoStory, "h1", "Thank You for your Message!")
        
        // umesto ovgo gore sad uzimamo iz PO fajla
        //const contact_Us_PO = new Contact_Us_Page_PO()
        // selimo const u describe
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, data.totoStory, "h1", "Thank You for your Message!")

    })


    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true}) 
        // force true je dodat kao option ali zapravo novi cypress klikce a da ne mora force
        // cy.get('[name="first_name"]').type('Totò')
        // cy.get('[name="last_name"]').type('Schillaci')
        // //cy.get('[name="email"]').type('toto@schillaci.it')
        // cy.get('textarea.feedback-input').type
        //     ("Real Totò's name is Salvatore. So, full name is Salvatore Totò  Schillaci.")

        // cy.get('[name="first_name"]').type(data.first_name)  // uzimamo iz json fajla
        // //cy.get('[name="last_name"]').type('Schillaci')
        // cy.get('[name="last_name"]').type(data.last_name)  // uzimamo iz json fajla
        // //cy.get('[name="email"]').type('toto@schillaci.it')
        // //cy.get('[name="email"]').type(data.email)  // uzimamo iz json fajla
        // // cy.get('textarea.feedback-input').type
        // //      ("Real Totò's name is Salvatore. So, full name is Salvatore Totò  Schillaci.")
        // cy.get('textarea.feedback-input').type(data.totoStory)  // uzimamo iz json fajla
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')
        // cy.get('body').contains('Error: Invalid email address')

        //cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", data.totoStory, "body", "Error: Invalid email address")
        //                                                                      email je prazan jer email ne prosledjujemo

        // POM
        //const contact_Us_PO = new Contact_Us_Page_PO()
        // selimo const u describe
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name," ", data.totoStory, "body", "Error: Invalid email address")
    })
})