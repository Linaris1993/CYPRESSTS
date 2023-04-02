describe("Drag and Drop", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/menu`);
    });

    it('Drag and Drop Test with PLugin', () => {
     cy.get("#draggable").drag("#droppable", { force: true });
    });
});