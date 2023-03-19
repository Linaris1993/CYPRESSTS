Cypress.config("defaultCommandTimeout", 16000);
describe("Load delay", () => {
    it('Load delay', () => {
        cy.visit('/loaddelay', {timeout: 30000});
        cy.title().then((title) => {
            cy.log(title);
            expect(title).to.be.equal("Load Delays");
    })
}); 
it('Client side Delay', () => {
    cy.visit('/clientdelay');
    cy.get('#ajaxButton').click();
    cy.get('.bg-success').should('have.text', 'Data calculated on the client side.')
});

it.only('Progress Bar', () => {
    cy.visit('/progressbar');
    cy.get('#startButton').click();
    cy.get('#progressBar', { timeout:40000 }).should('have.text', '100%');
});
});