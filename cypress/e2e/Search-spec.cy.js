describe('Search Page', () => {
  it('should display all elements to the DOM on load', () => {
      cy.visit('http://localhost:3000/search').wait(3000)
      cy.get('.site-logo').should("exist")
      cy.get('.chakra-icon').should("exist")
      cy.get('.bar-tab').should("exist")
      cy.get('.chakra-avatar__img').should("exist")
      cy.get('.search-form-container > .chakra-heading').should("exist").should("contain", "Search for your favorite cocktails!")
      cy.get('.search-msg-box').should("exist").should("contain", "Type in the name of a cocktail and get mixing")
      cy.get('input').should("exist")
      cy.get('.go-btn').should("exist")
  })

  // it("should display all drinks that match a user's input", () => {
  //   cy.visit("http://localhost:3000/search").wait(3000)
  //   cy.get("input").type("Negroni")
  //   cy.get(".go-btn").click().wait(3000)
  //   // cy.visit("http://localhost:3000/search")
  //   cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
  //     fixture: "searchData.json"
  //   })
  //   cy.get(':nth-child(1) > a > .cocktail > .cocktail-name').should("exist")
  //   cy.get(':nth-child(2) > a > .cocktail > .cocktail-name').should("exist")
  //   cy.get(':nth-child(3) > a > .cocktail > .cocktail-name').should("exist")
  // })

  // it("should display an error message if there are no drinks available", () => {
  //   cy.visit("http://localhost:3000/search")
  //   cy.get("input").type("potato")
  //   cy.get(".go-btn").click();
  //   cy.get('.search-msg-box').should("contain", "Sorry, we don't serve that drink here. Search for another...")
  // })

  // it("should route a user to an info page for a specific cocktail", () => {
  //   cy.visit("http://localhost:3000/search")
  //   cy.get("input").type("Negroni")
  //   cy.get(".go-btn").click();
  //   cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
  //     statusCode: 200,
  //     ok: true,
  //     fixture: "searchData.json"
  //   })
  //   cy.get(':nth-child(2) > a > .cocktail > .cocktail-name').click();
  //   cy.url().should("eq", "http://localhost:3000/17248")
  //   cy.get(':nth-child(1) > a > .cocktail > .cocktail-name').click();
  // })
  
  it("should route a user back to the search page from cocktail info page", () => {
    cy.visit("http://localhost:3000/17248")
    cy.get('.chakra-icon').click()
    cy.url().should("eq", "http://localhost:3000/search")
  })

  it("should route a user home upon clicking the site logo", () => {
    cy.visit('http://localhost:3000/search')
    cy.get('.site-logo').click()
    cy.url().should("include", "/");
  })
})