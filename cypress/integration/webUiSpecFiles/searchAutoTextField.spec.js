import WebDriverUn_PO from '../../support/pageObjects/WebDriverUn_PO';

/// <reference types="cypress" />

describe("Verify search and select auto populated item from", () => {
    const webdriverun = new WebDriverUn_PO()

    // Script for validating search and auto-populate 
    // Scenario: search and select auto-populate item
    // Verification: search and select auto-populated item 
    it("Test Scirpt: Select specific product via autocomplete item", () => {

        webdriverun.visitWebDriverUnHomePage()
        webdriverun.clickOnAutocompleteTextFieldLink()

        cy.get('#myInput').type('A')
        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Avacado';

            if (prod === productToSelect) {
                $el.click();
                cy.get('#myInput').type('A')

                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)
            }
            cy.log('Test Executed: Select specific product via autocomplete item')
        })
    })
})