describe('profile page', () => {
  const loadPage = () => {
    cy.visit('http://localhost:3000/profile')
  }
  it.skip('should display the NavBar for the user', () => {
    loadPage()
    cy.get('div').should('contain', 'Re*sip*e')
  })
  it.skip('should display the users username', () => {
    loadPage()
    cy.get('h1').should('contain', 'Joe Schmoe')
  })
  it.skip('should display the users bar name', () => {
    cy.get('h2').should('contain', "Let'\s take a look at Joe's Bar")
  })
  it.skip('should show a user how many bars a user has', () => {
    loadPage()
    cy.get('h3').should('contain', 'You have 1 bars')
  })
  it.skip('should display how many drinks a users bar has', () => {
    setTimeout(2000)
    cy.get('p').contains("The Joe'\s Bar has 4 drinks")
  })
  it.skip('should show a brief loading screen when page is loading', () => {
    cy.visit('http://localhost:3000/profile', {
      timeout: 30000
    })
    cy.get('div').contains('Finding the user...')
  })
  it('should show an error', () => {
    cy.intercept("GET", "http://localhost:3000/profile", {
      statusCode: 201,
      body: "Test 500 Error",
    })
    cy.visit("http://localhost:3000/profile")
      .wait(3000)
      .get("div")
      .should(
        "contain",
        "No User Found"
      );
  })
})