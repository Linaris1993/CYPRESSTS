describe("Accordian", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/accordian`);
    });

    it('Default Accordion validation example', () => {
        cy.get("#section2Heading").click();
        //checking of first raw got collapsed and text is hidden
        cy.get("#section1Heading").next().should('have.css', 'display');
        //checking if second description is displayed
        cy.get("#section2Heading").next()
        .should('have.css', 'display', 'block')
        .and('have.class', 'show');
    });
    });