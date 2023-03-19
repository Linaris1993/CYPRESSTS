describe("Click challenge", () => {
    beforeEach(() => {
        cy.visit('/click');
    });

    it("class assertions", () => {
        cy.get('#badButton').click().should('have.class', 'btn-success');
});

    it("background assertions", () => {
        cy.get('#badButton').click().should('have.css', 'background-color', 'rgb(40, 167, 69)');
});
});

describe("Mouse hover", () => {
    beforeEach(() => {
        cy.visit('/mouseover');
    });

    it("mouse hover with cy workaround", () => {
        cy.get('.text-primary').trigger('mouseover');
});

    it("mouse hover with real event pluggin", () => {
    cy.get('.text-primary').realHover();
    cy.get('.text-warning').dblclick();
    cy.get('#clickCount').should('have.text', '2');
});
});

describe("Dynamic Table", () => {
    beforeEach(() => {
        cy.visit('/dynamictable');
    });

    it.only("Chrome CPU Test", () => {
        cy.get('div[role="row"] span').each(($cell) => {
        if ($cell.text().includes('Chrome')) {
        cy.log(`I have found the ${$cell.text()} row!`);
        let chromeRowValues: string[] = [];
        chromeRowValues.push($cell.next().text());
        chromeRowValues.push($cell.next().next().text());
        chromeRowValues.push($cell.next().next().next().text());
        chromeRowValues.push($cell.next().next().next().next().text());
        cy.log('Chrome row values', chromeRowValues);
        chromeRowValues.forEach((value) => {
            if (value.includes('%')) {
                cy.log(value);
                cy.get('.bg-warning').should('have.text', `Chrome CPU: ${value}`)
            }
            });
        }
    });
})
});
