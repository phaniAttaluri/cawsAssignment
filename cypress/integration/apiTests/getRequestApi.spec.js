/// <reference types="cypress" />

describe("Get Request", () => {

    // Script for validating Get Request 
    it("Validate Get Request api", () => {
        cy.request({
            method: "GET",
            url: "http://localhost:3000/posts",
            headers: {
                accept: "application/json"
            }
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body).to.not.be.null
            let body = JSON.parse(JSON.stringify(response.body))
            cy.log(body)
            expect(body[0]).has.property("title", "json-server")
            expect(body[1]).has.property("author", "Tom Jones")
        })
    })
})
