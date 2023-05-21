describe("Mocking an API request", () => {
beforeEach(function () {
    cy.visit(`${Cypress.env("demoQA")}/login`);
    cy.intercept(
        "GET", 
    `${Cypress.env("demoQA")}/Account/v1/User/2c3bbfb9-b6e2-4766-9d30-e1de0fc39800`,
    { fixture: "mockData.json" }
    ).as("mockdemo");
});

it("mocking data", function () {
    cy.login("test", "Test1234*");
    cy.wait("@mockdemo");
    cy.get("#userName-value").should("have.text", "Some Name for Testing Mocking");
});
});