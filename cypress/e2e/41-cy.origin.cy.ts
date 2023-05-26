describe("cypress origin", () => {
    it("Testung a fake login", () => {
        cy.visit("https://mocklab-demo.herokuapp.com/login?type=mock");
        cy.get(".demo-box a").click(); //sign in with google btn
        cy.origin("https://mocklab.io", () => {
            cy.get('[name="email"]').type("test@test.com");
            cy.get('[name="password]').type("fakePassword");
            cy.get('#login-submit').click();
        });
        cy.get("h1 strong").should("have.text", "test@test.com")
    })
})