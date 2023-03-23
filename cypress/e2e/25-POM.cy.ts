import {LoginPage} from '../pages/login';
import { ProfilePage } from '../pages/profile';

describe("Login Page", () => {
    beforeEach(() => {
        LoginPage.visit();
    });

    it('Sucess Login Scenario', () => {
        //LoginPage.submitLogin('test', 'Test1234*'); //1st approach

        LoginPage.usernameElement.type('test'); //second approach
        LoginPage.passwordElement.type('Test1234*');
        LoginPage.loginElement.click();
        ProfilePage.headerElement.should('have.text', 'Profile');
        
        cy.url().should('contain', 'profile');
        LoginPage.userElement.should('have.text', 'test');
        ProfilePage.headerElement.should('have.text', 'Profile');
        cy.get("#userName-value").should('have.text', 'test');
    });

    it('Wrong User Login Scenario', () => {
        LoginPage.submitLogin('wrongUser', 'Wrong Password');
        cy.url().should('not.contain', 'profile');
        LoginPage.headerElement.should('have.text', 'Login');
        LoginPage.invalidLoginMessageElement.should('have.text', 'Invalid username or password!');
        LoginPage.headerElement.should('have.text', 'Login');
    });
});