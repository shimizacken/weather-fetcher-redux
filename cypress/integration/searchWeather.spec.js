/* eslint-disable no-undef */
import { searchWeatherResponse } from '../fixtures/searchResults';

describe('search weather test suite', () => {
  const cityName = 'drammen';

  beforeEach(() => {
    cy.visitHomePage();
  });

  it('type in search box', () => {
    cy.server();
    cy.route({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=69002fcf63566f2396643824536f3d9b&units=metric`,
      status: 200,
      response: searchWeatherResponse()
    });

    cy.get('[data-cy=search-results]').should('be.not.visible');
    cy.get('[data-cy=search-weather-button-input]').should('be.enabled');
    cy.get('[data-cy=search-weather-button]').should('be.enabled');

    cy.get('[data-cy=search-weather-button-input]').type(cityName);
    cy.get('[data-cy=search-weather-button]').click();

    cy.get('[data-cy=search-results]').should('be.visible');
  });
});
