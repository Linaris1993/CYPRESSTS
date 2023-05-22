import {isMobile} from '../support/utils';

describe("Viewport iteration", () => {
    const viewportsToTest: Cypress.ViewportPreset[] = ['ipad-2', 'iphone-3', 'macbook-15']
    viewportsToTest.forEach((viewport) => {
        it(viewport, () => {
        cy.viewport(viewport)
        });
    });
});
describe("Hybrid suite", () => {
        it("Main Menu Test", () => {
            cy.log('desktop validation')
            if(isMobile()) {
                cy.log('this a mobile validation')
            }
        });
    });
