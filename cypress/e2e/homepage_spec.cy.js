describe("homepage spec", () => {
  beforeEach(() => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "../fixtures/threeDrink.json",
    });
    cy.visit("https://re-sip-e.netlify.app");
  });
  it("it should display our logo messgae", () => {
    cy.get(".welcome-logo > img")
      .should("have.attr", "src")
      .should("include", "/static/media/re-sip-e.b51d707f7193e63ea7a3.png");
  });

  it("it should display a about our app page", () => {
    cy.get(".story").contains(
      "Your bar's new go-to black book solution. RE-SIP-E collects and stores your bar's drink program for seamless connectivity within your team."
    );
  });
  it("it should display 3 random drinks", () => {
    cy.get(".favorite-drinks > .chakra-heading").contains(
      "2022's Favorite Drinks"
    );
    cy.get(":nth-child(1) > a > .cocktail")
      .should("have.css", "background-image")
      .and(
        "include",
        "https://www.thecocktaildb.com/images/media/drink/ggx0lv1613942306.jpg"
      );
    cy.get(":nth-child(1) > a > .cocktail > .cocktail-name").contains(
      "Hot Toddy"
    );
    cy.get(":nth-child(2) > a > .cocktail")
      .should("have.css", "background-image")
      .and(
        "include",
        "https://www.thecocktaildb.com/images/media/drink/trbplb1606855233.jpg"
      );
    cy.get(":nth-child(2) > a > .cocktail > .cocktail-name").contains(
      "Aviation"
    );
    cy.get(":nth-child(3) > a > .cocktail")
      .should("have.css", "background-image")
      .and(
        "include",
        "https://www.thecocktaildb.com/images/media/drink/4vfge01504890216.jpg"
      );
    cy.get(":nth-child(3) > a > .cocktail > .cocktail-name").contains(
      "Salty Dog"
    );
  });
});
describe("homepage error handling spec", () => {
  beforeEach(() => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      statusCode: 500,
    });
    cy.visit("https://re-sip-e.netlify.app");
  });
  it("it should display a welcome messgae", () => {
    cy.get(".chakra-heading").contains("Sorry there was an error");
  });
});
