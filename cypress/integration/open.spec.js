describe('Open default page', () => {
    it('should open the home page', () => {
        cy.visit('http://localhost:9200/');

        cy.contains('weather fetcher');
    });

    it('type in search box', () => {

        cy.get('input[type=text]').type('Drammen');
    });

    it('click on the search button', () => {

        cy.get('button').click();
    });
});