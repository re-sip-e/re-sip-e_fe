import { verifyDocumentType } from "@apollo/client/react/parser";
import { Children } from "react";

describe("bar drink info spec", () => {
  beforeEach(() => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "../fixtures/barDrink.json",
    });
    cy.visit("https://re-sip-e.netlify.app/bar/1/1");
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
    cy.get(".ingredients-info").contains("Ingredients:");
    cy.get(".ingredients-info > :nth-child(1)").contains("1 oz Gin");
    cy.get(".ingredients-info > :nth-child(2)").contains("1 oz Campari");
    cy.get(".ingredients-info > :nth-child(3)").contains("1 oz Sweet Vermouth");
    cy.get(".steps").contains("Stir into glass over ice, garnish and serve.");
  });
  it("should have a button to edit a drink and a modal should show", () => {
    cy.get(":nth-child(4) > :nth-child(1)").contains("Make it my own!").click();
    cy.get("label").contains("Cocktail");
    cy.get('input[value="Negroni"]');
    cy.get("label").contains("Image URL");
    cy.get(
      'input[value="https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"]'
    );
    cy.get(".ingredients-header").contains("Ingredients");
    cy.get(":nth-child(1) > .ingredient").should("have.length", 1);
    cy.get(":nth-child(2) > .ingredient").should("have.length", 1);
    cy.get(":nth-child(3) > .ingredient").should("have.length", 1);
    cy.get(".steps-header").contains("Steps");
    cy.get(":nth-child(1) > .steps-container").should("have.length", 1);
  });
  it("should be able to type into all input fields, and delete/add ingredients and add the editted drink to their bar", () => {
    cy.get(":nth-child(4) > :nth-child(1)").click();
    cy.get('input[value="Negroni"]').type("Negroni");
    cy.get(
      'input[value="https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"]'
    ).type(
      "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"
    );
    cy.get(":nth-child(1) > .ingredient")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("Vodka");
    cy.get(":nth-child(1) > .ingredient > .chakra-icon").click();
    cy.get(".new-ingredient").type("1 Lemon");
    cy.get(":nth-child(3) > .ingredient > .chakra-icon").click();
    cy.get(".chakra-textarea").type(" Squeeze Lemon, enjoy!");
  });
});
describe("edditing drink spec", () => {
  it("should allow the user to save an edited drink and go back to the page and see the new updates", () => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "barDrink.json",
    });
    cy.visit("https://re-sip-e.netlify.app/bar/1/1");
    cy.get(":nth-child(4) > :nth-child(1)").contains("Make it my own!").click();
    cy.get('input[value="Negroni"]').type("Negroni");
    cy.get(
      'input[value="https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"]'
    ).type(
      "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"
    );
    cy.get(":nth-child(1) > .ingredient")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("Vodka");
    cy.get(":nth-child(1) > .ingredient > .chakra-icon").click();
    cy.get(".new-ingredient").type("1 Lemon");
    cy.get(":nth-child(3) > .ingredient > .chakra-icon").click();
    cy.get(".chakra-textarea").type(" Squeeze Lemon, enjoy!");
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "barEditDrink.json",
    }).as("edditedDrink");
    cy.get(".chakra-button").contains("Save").click();
    cy.get(".chakra-button").contains("Cancel").click();
    cy.visit("https://re-sip-e.netlify.app/bar/1/1");
    cy.get(".ingredients-info > :nth-child(1)").contains("1.0 oz Vodka");
  });
});

describe("bar drink error handling spec", () => {
  it("it should show error if the use sent back empty information", () => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "barDrink.json",
    });
    cy.visit("http://localhost:3000/bar/1/1");
    cy.get(":nth-child(4) > :nth-child(1)").contains("Make it my own!").click();
    cy.get(":nth-child(1) > .ingredient > .chakra-icon").click();
    cy.get(":nth-child(2) > .ingredient > .chakra-icon").click();
    cy.get(":nth-child(3) > .ingredient > .chakra-icon").click();
    cy.get(".chakra-button").contains("Save").click();
    cy.get(".chakra-alert").contains("Error!");
  });
});
