describe("Menu", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/menu`);
    });

    it('Menu Test', () => {
        cy.get('a').contains('Main Item 2').realHover();
        cy.contains('a', 'Sub Item');
    });
});