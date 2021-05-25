import WebDriverUn_PO from '../../support/pageObjects/WebDriverUn_PO';
/// <reference types="cypress" />

describe("File Upload via webdriveruni", () => {
    const webdriverun = new WebDriverUn_PO()

    // Script for validating uploading a file
    // Scenario: User uploading a file
    // Verification: file uploaded successfully 
    it("Test Scirpt: Uploading a file....", () => {
        webdriverun.visitWebDriverUnHomePage()
        webdriverun.clickOnFileUploadLink()
        cy.fixture("laptop.png", "base64").then(fileContent => {
            cy.get("#myFile").attachFile(
                {
                    fileContent,
                    fileName: "laptop.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })
        webdriverun.clickOnSubmitButton()
        cy.log('Test Executed : Uploading a file....')
    });
})