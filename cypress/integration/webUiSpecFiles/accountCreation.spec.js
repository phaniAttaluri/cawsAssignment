import HomePage_PO from '../../support/pageObjects/HomePage_PO';
import authentication_PO from '../../support/pageObjects/authentication_PO';
import AccountCreation_PO from '../../support/pageObjects/AccountCreation_PO';

/// <reference types="cypress" />

describe('My Account Creation', function () {
    const homePage = new HomePage_PO()
    const authentication = new authentication_PO()
    const accountCreation = new AccountCreation_PO()

    before(function () {
        cy.fixture('accountCreation').then(function (data) {
            globalThis.data = data;
        })
    })

    beforeEach(() => {
        homePage.visitHomePage()
    })

    // Script for validating "You must register at least one phone number" error message is displayed
    // Scenario: User clicks on create an account button without providing any details 
    // Verification: "Invalid email address" error message is displayed
    it('Test Script: Validating atleast one error message in Account Creation page', function () {
        homePage.clickOnSignIn_Button()
        accountCreation.enterValidEmailAddress()
        authentication.clickOnCreateButton()
        accountCreation.clickOnRegisterButton()
        accountCreation.validatingErrorMessageAtleastOnePhoneNumber()
        cy.log("Test Executed : Validating atleast one error message in Account Creation page")
    })

    // Script for account creation
    // Scenario: Account Creation by prociding valid details  
    // Verification: Account created successfully 
    it('Test Script: Account Creation Successful', function () {
        homePage.clickOnSignIn_Button()
        accountCreation.enterValidEmailAddress()
        authentication.clickOnCreateButton()
        accountCreation.verifyAccountCreationUrl()
        accountCreation.createAccountForm()
        accountCreation.clickOnRegisterButton()
        accountCreation.verifyAccountCreated()
        cy.log("Test Executed : Account Creation Successful")
    })
})