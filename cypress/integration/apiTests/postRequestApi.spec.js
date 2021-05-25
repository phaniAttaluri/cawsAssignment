/// <reference types="cypress" />

describe("Post Request", () => {

  // Script for validating Post Request 
  it("Validating Post Request API", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/posts",
      body: {
        title: "Want to learn automation testing?",
        author: "Sarah Jones"
      }
    }).then(response => {
      expect(response.status).to.eql(201)
    })
  })

})
