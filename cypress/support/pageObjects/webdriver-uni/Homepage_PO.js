class HomePage_PO {
    visithomepage() {
        cy.visit(Cypress.env('webdriveruni_homepage'), { timeout: 60000 })
        //                                      sa { timeout:  } overridujemo ono sto smo setovali u configu 
        // ovde zovemo objekat 'webdriveruni_homepage' iz env configa
    }

    clickOn_ContacUs_Button(){
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true}, { timeout: 80000 })
        //                                                      sada ce ce klik imati tajmaut 8s
    }
}

export default HomePage_PO