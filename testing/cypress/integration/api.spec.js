// testing\cypress\integration\api.spec.js

describe('articles APIs', () => {
  test('should correctly set application/json header', () => {
    cy.request('http://localhost:3000/api/articles')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  test('should correctly return a 200 status code', () => {
    cy.request('http://localhost:3000/api/articles')
      .its('status')
      .should('be.equal', 200);
  });

  test('should correctly return a list of articles', (done) => {
    cy.request('http://localhost:3000/api/articles')
      .its('body')
      .each((article) => {
        expect(article).to.have.keys('id', 'title', 'body', 'author', 'image');
        expect(article.author).to.have.keys('id', 'name');
        expect(article.image).to.have.keys('url', 'author');

        done();
      });
  });
});
