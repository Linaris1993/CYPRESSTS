import { forEach } from 'cypress/types/lodash';
import {User} from './model'

describe("Array of Objects - Users", () => {
   it("Getting user information based on my fizture", () => {
   cy.fixture<{users: User[]}>('example.json')
   .its('users')
   .then((users) => {
   users.forEach(user => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
    cy.login(user.username, user.password);
    if (user.valid) {
        cy.url().should("contain", "profile");
    }
    else {
        cy.url().should("contain", "login");
    }
    cy.clearCookies();
    cy.clearLocalStorage();
   })
    });
  });
});