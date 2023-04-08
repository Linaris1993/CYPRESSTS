describe("Basic API test example", () => {

    it('GET Request', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/todos/1').then((response) => {
            cy.log('response', response)
        })
    });

    
    it('PUT Request', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: "title #101",
            body: "post #101", 
            userId: 101, 
        }).then((response) => {
            cy.log('response')
        })
    });

    it('PUT Request', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: "title example",
            body: "body example", 
            userId: 1, 
        }).then((response) => {
            cy.log('response')
        })
    });

    it('DELETE Request', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            cy.log('response')
        })
    });

    it('Creating a user(emulation)', function () {
    const userId: string = '7d01de84-9527-4855-a10c-043a637178b3'
    cy.wrap(userId).as("userId");
    });

    it('Get an authorization token from the API account', function () {
    cy.request('POST', `${Cypress.env("demoQA")}/Account/v1/GenerateToken`, {
        userName: "test", 
        password: "Test1234*",
    }).then((response) => {
       const token : string = response.body.token;
       cy.wrap(token).as("token");
    });
    });
    
    it('Get the user information', function () {
     const userId: string = this.userId;
     const token: string = this.token;
     const authorization: string = `Bearer ${token}`;
     const options = {
        method: "GET",
        url: `${Cypress.env("demoQA")}/account/v1/User/${userId}`,
        headers: {
            authorization,
    },
     };
    cy.request(options).then((response) => {
        cy.log('Status code validation').then(() => {
            expect(response.status).to.be.equal(200);
        });

        cy.log('Correct UserName').then(() => {
            expect(response.body.username).to.be.equal("test");
            expect(response.body.username).to.be.a("string");
        });

        cy.log('Validating Book Title').then(() => {
            expect(response.body.books[0].title).to.be.equal("Git Pocket Guide");
        });
    });
    });
});