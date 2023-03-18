describe("Locators XPath", () => {
    beforeEach(() => {
        cy.visit('/classattr');
    });

    it('find el by text', () => {
        cy.xpath('//*[text()="Correct variant is"]').should('contains.text', 'Correct');
    });

    it('find el by attr', () => {
        cy.xpath('//pre[@class=" language-html"]');
    });

    it('find by class (middle and spaces)', () => {
        cy.xpath(
            "//button[contains(concat(' ', @class, ' '), ' btn-warning ')]"
        ).should("have.css", "background-color", "rgb(255, 193, 7)");
});
});