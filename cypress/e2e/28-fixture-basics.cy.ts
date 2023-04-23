import { testData } from './model';

describe("Using a fixture", () => {
   it("Loading the file and displayed the data in the log", () => {
    cy.fixture('jsonExample').then((testData: testData) => {
      cy.log('printing object', testData);
      cy.log('printing object', testData.property1);
  });
  });
});