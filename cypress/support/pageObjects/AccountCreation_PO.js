class AccountCreation_PO {


    clickOnRegisterButton() {
        cy.get('#submitAccount').click({ force: true })

    }

    validatingErrorMessageAtleastOnePhoneNumber() {
        cy.get('ol > :nth-child(1)').should('have.text', 'You must register at least one phone number.')
    }


    enterValidEmailAddress() {

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        cy.log(makeid(5))
        cy.get('#email_create').type(makeid(5) + '@example.com')
    }


    createAccountForm() {
        cy.get('#id_gender1').check()
        cy.get('#customer_firstname').type(data.firstname)
        cy.get('#customer_lastname').type(data.lastname)
        cy.get('#passwd').type(data.password)
        cy.get('#days').select(data.day)
        cy.get('#months').select(data.month)
        cy.get('#years').select(data.year)
        cy.get('#newsletter').check()
        cy.get('#address1').type(data.address)
        cy.get('#city').type(data.city)
        cy.get('#id_state').select(data.State)
        cy.get('#postcode').type(data.postcode)
        cy.get('#phone_mobile').type(data.phoneNumber)
    }
    verifyAccountCreated() {
        cy.get('h1').should('have.text', 'My account')
    }
    
    verifyAccountCreationUrl() {
        cy.url().should('include', 'account-creation')
    }

    

}

export default AccountCreation_PO