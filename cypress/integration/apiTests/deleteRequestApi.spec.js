/// <reference types="cypress" />

describe("Delete Request", () => {
    
  // Script for validating Update Request 
    it("Validating Delete Request api", () => {
      cy.request({
        method: "DELETE",
        url: "http://localhost:3000/posts/13"
      }).then((response) => {
        expect(response.status).to.eql(200);
      });
    });
  });
  