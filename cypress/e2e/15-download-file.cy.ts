import { sample } from "cypress/types/lodash";

describe("Download file in Demo QA", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/upload-download`);
    });

    it('download file', () => {
        cy.get('a#downloadButton').click();
        cy.verifyDownload('sampleFile.jpeg');
        
    });
});