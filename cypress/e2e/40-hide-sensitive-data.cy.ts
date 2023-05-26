import { countBy } from "cypress/types/lodash";

describe("Hidding username and password to avoid data leaks", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    })
    it("Valid Login", () => {
        //1- Get the sensitive data from env variables
        const username = Cypress.env("user");
        //to set the password use:
        //type in Bash terminal: export CYPRESS_password=test1234*
        const password = Cypress.env("password");

        //2- Make sure the data was set with pre-assertions
        expect(username, "username was set").to.be.a("string").and.not.be.empty;
        if(typeof password !== "string" || !password) {
            throw new Error("Missing password value, set using CYPRESS_password=...")
        }

        cy.safeLogin(username, password);
        cy.url().should("contain", "profile");
    });
    //2 - download dotenv library and add secury data to .env file
});