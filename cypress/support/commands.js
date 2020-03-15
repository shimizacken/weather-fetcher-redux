/* eslint-disable no-undef */

Cypress.Commands.add('visitHomePage', () => {
  cy.visit('/');
});

Cypress.Commands.add('searchWeather', cityName => {
  cy.get('input[type=text]').type(cityName);
  cy.get('button').click();
});
