describe("Locators CSS", () => {
    beforeEach(() => {
        cy.visit('/dynamicid');
    });

    it('cy cintains example', () => {
        cy.contains("Button with Dynamic ID").should('have.text', 'Button with Dynamic ID')
    });

    it('cy.get + cy.find example', () => {
        cy.get('div').find("button").should('have.text', 'Button with Dynamic ID')
    })

    it('css selector using an attr example', () => {
        cy.get('.btn-primary').should('have.text', 'Button with Dynamic ID')
    })
});