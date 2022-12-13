import data from "../fixtures/apiDrink.json";
describe("empty spec", () => {
  // beforeEach(() => {

  // });
  it("it should display the drink image", () => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "../fixtures/apiDrink.json",
    });
    cy.visit("http://localhost:3000/11003");
    cy.get(".cocktail-details-container > img")
      .should("have.attr", "src")
      .should(
        "include",
        "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg"
      );
  });
  it("it should display the drink name, ingredients and steps", () => {
    cy.intercept("https://re-sip-e-be.fly.dev/graphql", {
      fixture: "../fixtures/apiDrink.json",
    });
    cy.visit("http://localhost:3000/11003");
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
    cy.request({
      method: "POST",
      url: "https://re-sip-e-be.fly.dev/graphql",
      body: {
        operationName: "drinkCreate",
        query: `
      mutation($input: DrinkCreateInput!){
        drinkCreate(input: ${data}){
          drink{
            id
            name
            steps
            imgUrl
            ingredients{
              id
              description
            }
          }
        }
      }
      `,
      },
    }).as("addToBar");
    cy.get(".cocktail-details > .chakra-button").click();
    cy.get(".chakra-alert").contains("Added");
  });
  // cy.visit("http://localhost:3000/11003");
});
