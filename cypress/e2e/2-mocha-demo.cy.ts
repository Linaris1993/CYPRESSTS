describe('template spec', () => {
  before(() => {
    cy.log('hello from before hook')
  });

  beforeEach(() => {
    cy.log('hello from before each hook')
  });

  after(() => {
    cy.log('hello from after hook')
  });

  afterEach(() => {
    cy.log('hello from after each hook')
  });

  it('test1', () => {
    cy.log('hello world1')
  });

  it.skip('test2', () => {
    cy.log('hello world2')
  });

  it('Typescript Intro', () => {
   let stringVariable:string = '9';
   let numberVariable: number = 0;
   let booleanVariable: boolean = true;
   let anyVariable: any = 'string/number/false'

  function addTwoNumbers(a:number, b:number):number { //will return number
    return a + b;
  }

  function addTwo(a:number, b:number):void { //will not return anything
  }

  interface User{
    username:string;
    password:string;
  }

  function returnUserInformation(user:User):any {
    console.log('This is the user name' + user.username)
    console.log('This is the user password' + user.password)
  }
});
});