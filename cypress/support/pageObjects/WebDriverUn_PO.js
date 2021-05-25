class WebDriverUn_PO {

    visitWebDriverUnHomePage() {
        cy.visit("http://www.webdriveruniversity.com")
    }
    clickOnAutocompleteTextFieldLink() {
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({ force: true })
    }

    clickOnFileUploadLink() {
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})
    }
    clickOnSubmitButton(){
        cy.get("#submit-button").click()
    }
}

    export default WebDriverUn_PO