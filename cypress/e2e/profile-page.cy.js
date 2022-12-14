describe("Profile Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/profile");
  });

  it("should display all elements to the DOM", () => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
        statusCode: 200,
        ok: true,
        fixture: "userData.json"
    })
    cy.get(".alt-header").should("exist");
    cy.get(".site-logo").should("exist");
    cy.get(".search-tab").should("exist");
    cy.get(".bar-tab").should("exist");
    cy.get(".header-avatar").should("exist");
    cy.get(".welcome-user-msg").should("exist").should("contain", "Welcome back")
    cy.get('.welcome-user > .chakra-avatar > .chakra-avatar__img').should("exist")
    cy.get(".user-bar-data").should("exist")
    cy.get('.my-bar-info').should("exist").should("contain", "Bar Status")
    cy.get('.user-bar-count').should("exist")
    cy.get('.user-bar-count > .chakra-heading').should("exist").should("contain", "Bars")
    cy.get('.bar-drink-count').should("exist")
    cy.get('.bar-drink-count > .chakra-heading').should("exist").should("contain", "Number")
    cy.get("button").should('have.class', "view-bar-btn")
    cy.get('.personal-info').should("exist")
    cy.get('.my-info-container > .chakra-heading').should("exist").should("contain", "My Info")
    cy.get('.personal-info > :nth-child(2)').should("exist").should("contain", "Name")
    cy.get('.personal-info > :nth-child(3)').should("exist").should("contain", "Email")
    cy.get('.personal-info > :nth-child(4)').should("exist").should("contain", "Location")
  });

  it("should take user to their bar page", () => {
    cy.get(".view-bar-btn").click();
    cy.visit("http://localhost:3000/bar/1")
  })

  it("should display an error if no user data was found", () => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
        statusCode: 400,
        ok: false,
        fixture: "userData.json"
    })
    cy.get(".chakra-heading").should('contain', 'Sorry there was an error. Click here to go back home!')
  })
 
});
