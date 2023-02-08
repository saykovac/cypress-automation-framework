/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
// ovo iznad se dodaje kada imamo negde u kodu cy.xpath

describe('Alias and invoke', () => {
    it('Validate a specific hair care product', () => {
        cy.visit('https://www.automationteststore.com/')

        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        //                                    index  cupamo tekst    dajemo tekstu alijas

        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        //          alijas          duzina alijasa    da bude veca 

        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
  

    })

    it('Validate product thumbnail', () => {
        
        cy.visit('https://www.automationteststore.com/')

        cy.get('.thumbnail').as('productThumbnail')

        cy.get('@productThumbnail').should('have.length', 16)

        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
        //          u alijasu           nadji klasu         atribut imena title         sadrzi tekst

    })


    it.only('Calculate total of normal and sale products', () => {
        
        cy.visit('https://www.automationteststore.com/')

        cy.get('.thumbnail').as('productThumbnail')

        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
            
        //     cy.log($el.text())
            
        // })

        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        //      u klasi        trazimo klase     cupamo string      krstimo ga

        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')

        let allItemsTotal = 0
        cy.get('@itemPrice').then($linkText => {

            let itemsPriceTotal = 0;
            let itemPrice = $linkText.split('$')
            //                        splituje $ koji je u stringu cena, da bi uzeo samo broj od stringa
            let i

            for (let i = 0; i < itemPrice.length; i++) {
                
                cy.log('Price for article number ' + [i] + '. is: ' + itemPrice[i] + ' USD')
                // ovo sam ja ulepsavao ispis cypress konzole
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
                //                 konvertuje string u broj
                // ovo dodaje svaku cenu u prethodnu totalnu cenu (krece zato od nule) da bismo dobili ukupnu cenu svega
            }

            allItemsTotal += itemsPriceTotal
            cy.log('Non sale price items total: ' + itemsPriceTotal + ' USD')

        })

        cy.get('@saleItemPrice').then($linkText => {
            let saleItemsPriceTotal = 0
            let saleItemPrice = $linkText.split('$')
            let i
            for (let i = 0; i < saleItemPrice.length; i++) {
                cy.log('Price for article on sale number ' + [i] + '. is: ' + saleItemPrice[i] + ' USD')
                cy.log(saleItemPrice[i])
                saleItemsPriceTotal += Number(saleItemPrice[i])
                    
            }
            allItemsTotal += saleItemsPriceTotal
            cy.log('Sale price items total: ' + saleItemsPriceTotal + ' USD')

        })

        .then(() => {
            cy.log("The total price of all products is : " + allItemsTotal)
            expect(allItemsTotal).to.eq(625.6)
            //               ovo smo izracunali peske pa upisali
            //               to je sava zbir oba zbira
        })

        



    })

})