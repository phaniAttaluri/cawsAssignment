class HomePage_PO{

visitHomePage(){
    cy.visit(Cypress.env("automationPracticeProd"))
    cy.url().should('include','automationpractice')
}

clickOnSignIn_Button(){
    cy.get('.login').click()
}


}

export default HomePage_PO