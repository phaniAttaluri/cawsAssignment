class authentication_PO{    


clickOnCreateButton(){
   
    cy.get('#SubmitCreate > span').click()
}

validatingErrorMessage(){
    cy.contains('ol', 'Invalid email address').should('exist')
}


}

export default authentication_PO