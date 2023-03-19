describe("Dealing with links that opens new tab", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/links`);
    });

    it('First approach - not click on the link', () => {
        cy.get('#simpleLink').should('have.attr', 'href', 'https://demoqa.com');
        cy.get('#simpleLink').should('have.attr', 'target', '_blank')
    });

    it('Second approach - remove the target', () => {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click();
        cy.url().then((url) => {
            expect(url).to.be.equal('https://demoqa.com/');
        })
    });
});

describe.only("Intercepting API(Spying) request after clicking on a button", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/links`);
        cy.intercept('GET', `${Cypress.env("demoQA")}/created`).as('linkStatus');
    });

    it('First approach - not click on the link', () => {
      cy.get('a#created').click();
      cy.wait('@linkStatus').then((request) => {
        cy.log('This is the request intercepted', request);
        expect(request.response.statusCode).to.be.eq(201);
        expect(request.response.statusMessage).to.be.eq("Created");
      })
    });
});