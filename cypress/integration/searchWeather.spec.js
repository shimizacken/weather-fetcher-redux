// import uuid from 'uuid';
// import * as api from '../../src/services/net/fetch';


describe('Open default page', () => {
    
    // beforeEach(() => {
    //     cy.visit('http://localhost:9200/');
    // });
    
    it.skip('should open the home page', () => {
        cy.contains('weather fetcher');
    });
    
    it.only('type in search box', () => {
        
        cy.visit('http://localhost:9200/');
        // cy.get('input[type=text]').type('Drammen');

        // cy.get('button')
        // .click().then($btn => {
        //     cy.get($btn).should("be.disabled");
        //     cy.get("[data-cy=loader-image]");

        // })        
        // .get('[data-cy=search-results]');
    });

    it.skip('click on the search button', () => {
        cy.searchWeather('Bergen');
    });
});