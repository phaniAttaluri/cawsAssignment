import HomePage_PO from '../../support/pageObjects/HomePage_PO';
import authentication_PO from '../../support/pageObjects/authentication_PO';
/// <reference types="cypress" />

describe('Authentication My Account', function () {
    const homePage = new HomePage_PO()
    const authentication = new authentication_PO()

    beforeEach(() => {
        homePage.visitHomePage()
    })

    // Script for validating "Invalid email address" error message is displayed
    // Scenario: User clicks on create an account button without providing any details 
    // Verification: "Invalid email address" error message is displayed
    it('Test Scirpt: Validating Invalid email address error message', function () {
        homePage.clickOnSignIn_Button()
        authentication.clickOnCreateButton()
        authentication.validatingErrorMessage()
        cy.log('Test executed : Validating Invalid email address error message ')
    })

})