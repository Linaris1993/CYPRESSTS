describe("Date picker", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/date-picker`);
    });

    it('Date-picker Test', () => {
    cy.get('input#datePickerMonthYearInput').click();
    cy.get('select.react-datepicker_month-select').select('1');
    cy.get('select.react-datepicker_year-select').select('1900');
    cy.findByText('16').click(); 
    cy.get('input#datePickerMonthYearInput').should('have.value', '01/16/1990');
    });
});