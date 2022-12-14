describe('profile page', () => {
  const loadPage = () => {
    cy.visit('http://localhost:3000/profile')
  }
  it('should display the NavBar for the user', () => {
    loadPage()
    cy.get('section').find(".site-logo")
  })
  it('should display the users username', () => {
    loadPage()
    cy.get('title').should('contain', 'Joe Schmoe')
  })
  it('should display the users bar name', () => {
    cy.get('h2').should('contain', "Let'\s take a look at Joe's Bar")
  })
  it('should show a user how many bars a user has', () => {
    loadPage()
    cy.get('h3').should('contain', 'You have 1 bars')
  })
  it('should display how many drinks a users bar has', () => {
    setTimeout(2000)
    cy.get('p').contains(`The Joe'\s Bar drink count :`)
  })
  it('should show a brief loading screen when page is loading', () => {
    cy.visit('http://localhost:3000/profile', {
      timeout: 30000
    })
    cy.get('div').contains('Finding the user...')
  })
  it('should show an error', () => {
    cy.intercept("POST", "https://re-sip-e-be.fly.dev/graphql", {
      statusCode: 500,
      body: "Test 500 Error",
    })
    cy.visit("http://localhost:3000/profile")
      .wait(3000)
      .get("div")
      .should(
        "contain",
        "Sorry there was an error"
      );
  })
  it('Should be able to navigate to the home page', () => {
    loadPage()
    cy.get('div').find('.site-logo').click().url('should.be', 'http://localhost:3000/')
  })
  it('Should be able to navigate to the bar page', () => {
    loadPage()
    cy.get('div').find('img').first().click().url('should.be', 'http://localhost:3000/bar/1')
  })
  it('Should be able to navigate to the search page', () => {
    loadPage()
    cy.get('div').find('.search-tab').first().click().url('should.be', 'http://localhost:3000/search')
  })
})