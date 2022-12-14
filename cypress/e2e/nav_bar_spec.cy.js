describe("empty spec", () => {
  beforeEach(() => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "../fixtures/threeDrink.json",
    });
    cy.visit("https://re-sip-e.netlify.app");
  });
  it("it should have a logo that links to the homepage", () => {
    cy.get(".site-logo")
      .click()
      .url()
      .should("include", "https://re-sip-e.netlify.app");
  });
  it("it should have a search icon that links to the search page", () => {
    cy.get(".search-tab")
      .click()
      .url()
      .should("include", "https://re-sip-e.netlify.app/search");
  });
});
