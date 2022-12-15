describe("empty spec", () => {
  beforeEach(() => {
    // cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
    //   fixture: "../fixtures/threeDrink.json",
    // });
    cy.visit("https://re-sip-e.netlify.app");
  });
  it("it should have a logo that links to the homepage", () => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "threeDrink.json",
    });
    cy.get(".site-logo")
      .click()
      .url()
      .should("include", "https://re-sip-e.netlify.app");
  });
  it("it should have a search icon that links to the search page", () => {
    cy.get(".chakra-icon")
      .click()
      .url()
      .should("include", "https://re-sip-e.netlify.app/search");
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "searchPage.json",
    });
  });
  it("it should have a search icon that links to the bar page", () => {
    cy.get(".bar-tab > a > .chakra-button")
      .click()
      .url()
      .should("include", "https://re-sip-e.netlify.app/bar/1");
  });
  it("it should have a search icon that links to the profile page", () => {
    cy.get(".chakra-avatar__img")
      .click()
      .url()
      .should("include", "https://re-sip-e.netlify.app/profile");
  });
});
