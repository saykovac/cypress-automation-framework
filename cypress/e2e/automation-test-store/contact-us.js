/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
// ovo iznad se dodaje kada imamo negde u kodu cy.xpath

describe('Test Contact Us form via Automation Test Store', () => {

    before(() => {
      cy.fixture('userDetails.json').as("user")
      //                               dajemo alijas json fajlu

      //cy.viewport(550, 750)
      // menjamo velicinu test prozora u cypress browseru ili gazimo podesen vieport u configu
    })

    it('Should be able to submit a successful submission via contact us form', () => {
        cy.visit('https://www.automationteststore.com/');
        //cy.get('.info_links_footer > :nth-child(5) > a').click()
        //a[contains(@href, 'contact')]
        //cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get("a[href$='contact']").click().then(function(linkText) {
            console.log('Clicked the following link: ' + linkText.text())
            cy.log('Clicked the following link: ' + linkText.text())

        })
        
        //cy.get('#ContactUsFrm_email').type('toto@schillaci.it')
        //cy.get('#ContactUsFrm_first_name').type('Totò')
        cy.get('@user').then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.firstName)
            //                                              firstName je ime za usera iz json fajla
            cy.get('#ContactUsFrm_email').type(user.email)
            //                                      email je iz json fajla
        })


        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type
        ("Real Totò's name is Salvatore. So, full name is Salvatore Totò  Schillaci.")
        //cy.get('.col-md-6 > .btn').click()
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
        //console.log('Test has completed!')
        cy.log('Test has completed!')

    })
})