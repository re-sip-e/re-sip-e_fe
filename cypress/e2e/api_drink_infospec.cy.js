import data from "../fixtures/apiDrink.json";
import gql from "@apollo/client";
describe("api drink info spec", () => {
  beforeEach(() => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "../fixtures/apiDrink.json",
    });
    cy.visit("https://re-sip-e.netlify.app/11003");
  });
  it("it should display the drink image", () => {
    cy.get(".cocktail-details-container > img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"
      );
  });
  it("it should display the drink name, ingredients and steps", () => {
    cy.get(".css-1i61012").contains("Negroni");
    cy.get("h3").contains("Ingredients:");
    cy.get(".ingredients-info > :nth-child(2)").contains("1 oz Gin");
    cy.get(".ingredients-info > :nth-child(3)").contains("1 oz Campari");
    cy.get(".ingredients-info > :nth-child(4)").contains("1 oz Sweet Vermouth");
    cy.get(".steps").contains(
      "Steps: Stir into glass over ice, garnish and serve."
    );
  });
  it("should have a button that can add the drink to a bar", () => {
    cy.get(".cocktail-details > .chakra-button").click();
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      operationName: "drinkCreate",
      input: "apiDrink.json",
    }).as("addToBar");
    cy.get(".chakra-alert").contains("Added");
  });
});

describe("api drink error handling spec", () => {
  it("should show an error if failed to show drink", () => {
    cy.visit("http://localhost:3000/11003");
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "apiDrinkError.json",
    });
    cy.get(".chakra-heading").contains(
      "Sorry, couldn't load. Click icon to return home"
    );
  });
});
