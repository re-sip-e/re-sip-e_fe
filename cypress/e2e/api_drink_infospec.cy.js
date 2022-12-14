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
      input: data,
    }).as("addToBar");
    cy.get(".chakra-alert").contains("Added");
  });
});

describe("api drink error handling spec", () => {
  it("it should show error if the drink info was not sent back", () => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      forceNetworkRequest: true,
    });
    cy.visit("https://re-sip-e.netlify.app/11003");
    cy.get(".cocktail-info-error").contains(
      "Sorry, couldn't load this drink. Return home."
    );
  });
  // it.only("should show an error if failed to add to your bar", () => {
  //   cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
  //     fixture: "../fixtures/apiDrink.json",
  //   });
  //   cy.visit("http://localhost:3000/11003");
  //   cy.get(".cocktail-details > .chakra-button").click();
  //   cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
  //     error: true,
  //   });
  //   cy.get(".chakra-alert").contains("Error occured, try again later!");
  // });
});
