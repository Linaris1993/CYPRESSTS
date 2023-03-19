describe("Iframe example in Demo QA", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/nestedframes`);
    });

    it('Simple and nested iframes', () => {
        cy.get('#frame1').then(function ($iframe) {
            const $body = $iframe.contents().find("body")
        cy.wrap($body).should('have.text', 'Parent frame')
        cy.wrap($body)
        .find('iframe')
        .then(function($childIframe) {
            const $childBody = $childIframe.contents().find("body")
            cy.wrap($childBody).find('p').should('have.text',  'Child Iframe')
        })
    })
    });
});

describe.only("Typing on an Iframe in the internet app", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/iframe`);
    });

    it('Iframedemo', () => {
        cy.get("#mce_0_ifr").then(($iframe) => {
            const $body = $iframe.contents().find("body")
            cy.wrap($body).find('p').type("{selectAll}{del}Hello World");
        })
        cy.get("#mce_0_ifr").then(($iframe) => {
            const $body = $iframe.contents().find("body")
            cy.wrap($body).find('p').should('have.text', "Hello World");
        })
    });
});