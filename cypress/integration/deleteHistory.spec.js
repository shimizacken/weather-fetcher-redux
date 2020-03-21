/* eslint-disable no-undef */
describe('delete history test suite', () => {
  const cities = ['drammen', 'oslo', 'jerusalem'];

  beforeEach(() => {
    cy.visitHomePage();
  });

  it(`search for city`, () => {
    cy.get('[data-cy=search-history-length]').should('contain', 0);

    cities.forEach((city, index) => {
      cy.get('[data-cy=search-weather-button-input]').type(city);
      cy.get('[data-cy=search-weather-button]').click();
      cy.get('[data-cy=search-weather-button-input]').clear();

      cy.get('[data-cy=search-history-length]').should('contain', index + 1);
    });

    let counter = cities.length;
    cities.forEach(() => {
      cy.get('[data-cy=remove-history-item]')
        .first()
        .click({ force: true });

      cy.get('[data-cy=search-history-length]').should('contain', (counter -= 1));
    });
  });
});
