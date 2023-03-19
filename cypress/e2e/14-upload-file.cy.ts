describe("Upload file in Demo QA", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/upload-download`);
    });

    it('Upload file', () => {
        cy.get('input#uploadFile').attachFile('example.json');
        cy.get('p#uploadFilePath').should('contain', 'example.json');
    });
});