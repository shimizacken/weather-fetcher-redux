/* eslint-disable no-undef */

describe('theme test suite', () => {
  beforeEach(() => {
    cy.visitHomePage();
  });

  it('should change default theme to to dark theme', () => {
    cy.get('body').should('have.attr', 'class').and('include', 'root-default-theme');

    cy.get('[data-cy=dark-theme-radio-button]').should('be.not.checked');

    cy.get('[data-cy=dark-theme-radio-button]').check();

    cy.get('body').should('have.attr', 'class').and('include', 'root-dark-theme');
  });
});
