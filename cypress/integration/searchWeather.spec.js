import { searchWeatherResponse } from "../fixtures/searchResults";

describe('Open default page', () => {
    
    beforeEach(() => {
        cy.visitHomePage('http://localhost:9200/');
    });
    
    it('should open the home page', () => {
        cy.contains('weather fetcher');
    });
    
    it('type in search box', () => {
        cy.server();
        cy.route({
            method: 'GET',
            url: 'https://api.openweathermap.org/data/2.5/weather?q=*',
            status: 200,
            response: searchWeatherResponse()
        });

        cy.get('[data-cy=search-results]').should('be.not.visible');
        cy.get('[data-cy=search-weather-button-input]').should('be.enabled');
        cy.get('[data-cy=search-weather-button]').should('be.enabled');

        cy.get('[data-cy=search-weather-button-input]').type('Drammen');
        cy.get('[data-cy=search-weather-button]').click();

        cy.get('[data-cy=search-results]').should('be.visible');
    });
});
