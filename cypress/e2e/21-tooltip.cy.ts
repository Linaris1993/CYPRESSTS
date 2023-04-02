describe("Tooptip", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/tool-tips`);
    });

    it('Tooltip Button', () => {
        cy.get("button[id='toolTipButton']").realHover();
        cy.get(".tooltip-inner").should("have.text", "You hovered over the Button");
    });

    it('Tag tooltip', () => {
        cy.contains("a", "Contrary").realHover();
        cy.get(".tooltip-inner").should("have.text", "You hovered over the Contrary");
    });
});