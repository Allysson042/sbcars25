describe('creat User and Authentication', () => {
  it('User can sign up and log in', () => {
   
    const timestamp = Date.now();
    const username = `cyteste_${timestamp.toString()}`;
    const email = `cyteste_${timestamp.toString()}@teste.com`;


    cy.visit('http://localhost:4200/#/register'); 
    cy.get('input[placeholder="Username"]').type(username);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type('123');

    cy.get('button').contains('Sign up').click();

    cy.wait(500);

    cy.get('a').contains('Sign in').click();
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type('123');
    cy.get('button').contains('Sign in').click();

    cy.contains(username);
  });
});