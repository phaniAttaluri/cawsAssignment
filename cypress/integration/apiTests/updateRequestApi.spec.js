/// <reference types="cypress" />

describe("Update Request", () => {

  // Script for validating Update Request 
  it("Validating Update Request api", () => {
    cy.request({
      method: "PUT",
      url: "http://localhost:3000/posts/2",
      body: {
        title: "Where can i buy apples?",
        author: "Tom Jones",
      },
    }).then((response) => {
      expect(response.status).to.eql(200);
    });
  });
});
