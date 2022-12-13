import { verifyDocumentType } from "@apollo/client/react/parser";

describe("bar drink info spec", () => {
  beforeEach(() => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "../fixtures/barDrink.json",
    });
    cy.visit("http://localhost:3000/bar/1/1");
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
  it("should have a button to edit a drink and a modal should show", () => {
    cy.get(":nth-child(4) > :nth-child(1)").contains("Make it my own!").click();
    cy.get("label").contains("Cocktail");
    cy.get('input[placeholder="Negroni"]');
    cy.get("label").contains("Image URL");
    cy.get(
      'input[placeholder="https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"]'
    );
    cy.get(".ingredients-header").contains("Ingredients");
    cy.get(":nth-child(1) > .ingredient").should("have.length", 1);
    cy.get(":nth-child(2) > .ingredient").should("have.length", 1);
    cy.get(":nth-child(3) > .ingredient").should("have.length", 1);
    cy.get(".steps-header").contains("Steps");
    cy.get(":nth-child(1) > .steps-container").should("have.length", 1);

  });
  it("should be able to type into all input fields, and delete/add ingredients", () => {
    cy.get(":nth-child(4) > :nth-child(1)").contains("Make it my own!").click();
    cy.get('input[placeholder="Negroni"]').type("Negroni");
    cy.get(
      'input[placeholder="https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"]'
    ).type(
      "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"
    );
    cy.get(":nth-child(1) > .ingredient")
      .type("{backspace}")
      .type("{backspace}")
      .type("{backspace}")
      .type("Vodka");
    cy.get(".close-icon-6").click();
    cy.get(".new-ingredient").type("1 Lemon");
    cy.get(".add-icon").click();
    cy.get(".steps-text-area").type(" enjoy!");
  });
  it.only("should allow the user to save an editted drink and go back to the page and see the new updates", () => {
    cy.get('.save-add-button')
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "../fixtures/.json",
    });
  })
});
