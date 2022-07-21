describe('Navigation', () => {
  it('Should navigate correctly to the article page', () => {
    // TODO thIS COULD WORLK becuase we set that efault base url in cypress config
    cy.visit('/');
    // THIS I GUESS CLICKS ON AN ELEMENT
    cy.get("a[href*='/articles']").first().click();

    // now assertion
    cy.url().should(
      'be.equal',
      'http://localhost:3000/articles/healthy-summer-meloncarrot-soup-u12w3o0d'
    );

    const h1 = cy.get('h1');
    console.log({ h1 });
    // checks content
    // cy.get('h1').contains('Healthy summer melon-carrot soup');
  });

  it('should correctly navigate back to the homepage', () => {
    cy.visit(
      'http://localhost:3000/articles/healthy-summer-meloncarrot-soup-u12w3o0d'
    );
    cy.get('a[href*="/"]').first().click();
    cy.url().should('be.equal', 'http://localhost:3000/');
    cy.get('h1').contains('My awesome blog');
  });
});
