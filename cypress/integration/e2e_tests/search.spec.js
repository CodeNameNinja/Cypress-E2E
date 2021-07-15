//create unit tests for search box
describe('Searchbox Test', () => {
  before(() => {
    cy.visit('http://zero.webappsecurity.com/index.html');
  })
  it('Search for "test"', () => {
    cy.get('#searchTerm').type('test {enter}');
  })
  
  it('show search result', () => {    
    cy.get('h2').contains('Search Results:');
  });
});