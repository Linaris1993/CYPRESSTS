describe("Basics", () => {
    beforeEach(() => {
        cy.visit('/textinput');
    });

    it("url", () => {
        cy.url().then((url) => {
            cy.log(`printing thr URL: ${url}`);
            expect(url).to.contains('/textinput');
    })
});

    it('title validation', () => {
        cy.title().then((title) => {
            cy.log(title);
            expect(title).to.be.equal("Text Input");
    })
});

    it("Input Test", () => {
        cy.get("input#newButtonName").type('Hello from Input');
        cy.get("button#updatingButton").click().should('have.text', 'Hello from Input');
});
});