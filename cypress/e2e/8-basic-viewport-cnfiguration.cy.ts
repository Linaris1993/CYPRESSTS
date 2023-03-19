describe("Locators CSS", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("Angular")}/angularjs-protractor-practice-site`);
    });

    it('Device Name', () => {
        cy.viewport("iphone-6");
        cy.get("#mobile_menu_toggler").should("be.visible");
    });

    it('Specific viewport', () => {
        cy.viewport(500, 600);
        cy.get("#mobile_menu_toggler").should("be.visible");
    });
});