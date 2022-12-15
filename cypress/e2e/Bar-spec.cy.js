describe("Bar page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/bar/1");
  });

  it("should display all elements to the DOM", () => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "barData.json",
    }).as("barData");
    cy.get(".site-logo").should("exist");
    cy.get(".chakra-icon").should("exist");
    cy.get(".bar-tab").should("exist");
    cy.get(".chakra-avatar__img").should("exist");
    cy.get("h2").should("exist").should("contain", "Joe's Bar");
    cy.get(".add-btn-box > :nth-child(1)").should("exist");
    cy.get(".add-btn-box > a > .chakra-button").should("exist");
    cy.get(".cocktails").should("exist");
  });

  it("should allow a user to add their own drink", () => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "barData.json",
    }).as("barData");
    cy.get(".add-btn-box > :nth-child(1)").click();
    cy.get(".cocktail-input").type("Funny Dancer");
    cy.get(".img-input").type(
      "https://images.unsplash.com/photo-1630541010111-1bd604c9aba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
    );
    cy.get(".add-input").type("2 Cups Ice");
    cy.get(".steps-input").type("Shake, pour over ice, and serve!");
    cy.get(".chakra-button").contains("Add drink").click();
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "addBarDrink.json",
    });
    cy.visit("http://localhost:3000/bar/1");
    cy.get(":nth-child(2) > a > .cocktail").should("exist");
  });

  it("should return an error if all fields are not filled out completely", () => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "barData.json",
    }).as("barData");
    cy.get(".add-btn-box > :nth-child(1)").click();
    cy.get(".cocktail-input").type("Funny Dancer");
    cy.get(".img-input").type(
      "https://images.unsplash.com/photo-1630541010111-1bd604c9aba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
    );
    cy.get(".add-input").type("2 Cups Ice");
    cy.get(".chakra-button").contains("Add drink").click();
    cy.get(".chakra-alert").should("contain", "Error!");
  });

   it("should route a user to the search page to find a drink to add", () => {
    cy.get('.add-btn-box > a > .chakra-button').click()
    cy.url().should('eq', "http://localhost:3000/search")
    cy.get(".search-input-field").type("Gin")
    cy.get(".go-btn").click();
    cy.get(':nth-child(1) > a > .cocktail').click()
    cy.url().should('eq', 'http://localhost:3000/11410')
    cy.get(".add-to-bar-btn").click();
    cy.get('.chakra-alert').should("be.visible")
    cy.visit("http://localhost:3000/bar/1")
  })

  it("should be able to route home from the site logo icon", () => {
    cy.get(".site-logo").click();
    cy.url().should("eq", "http://localhost:3000/");
  });
});
