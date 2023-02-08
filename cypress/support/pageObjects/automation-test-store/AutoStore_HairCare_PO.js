
class AutoStore_HairCare_Po {

    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element).then (() => {
                //  klikni na element
                //debugger
                // onda trigeruj debuger komandu
                // pauzira se i onda moze i da se debaguje app za vreme testa
            })
        })
        cy.get('.dropdown-toggle > .fa').click()
        //cy.get('.dropdown-toggle > .fa').click().debug()
    }
    
}

export default AutoStore_HairCare_Po