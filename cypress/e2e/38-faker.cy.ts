const { faker } = require('@faker-js/faker');

describe("Docket Post Test", () => {
    it("Random Data", () => {
        cy.task("freshUser").then((object) => {
            cy.log("Data: ", object);
        });
    });

    it("Random Data", () => {
        cy.task("freshUser").then((object) => {
            cy.log("Data: ", object);
        });
    });
});