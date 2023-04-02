describe("Autocomplete explanation", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/auto-complete`);
    });

    it('Autocomplete demo using Yellow', () => {
     cy.get(".auto-complete__input").first().type('Y');
     cy.contains('#react-select-2-option-0', 'Yellow').click();
     cy.get('.auto-cmplete_multi-value_label').should('have.text', 'Yellow');
    });
});