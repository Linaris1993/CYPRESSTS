import { LoginPage } from "../pages/login";
import { ProfilePage } from "../pages/profile";

describe("Login Page", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/login`);
    });

    it('Sucess Login Scenario', () => {
     cy.login('test', 'Test1234*');
     cy.url().should("contain", "profile")
     
    });

    it('Wrong User Login Scenario', () => {
        cy.login('wrongUser', 'wrongPassword');
        ProfilePage.headerElement.should('have.text', 'Login');
    });
});