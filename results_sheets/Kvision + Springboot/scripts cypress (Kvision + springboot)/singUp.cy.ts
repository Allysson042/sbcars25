describe('creat User', () => {
  it('User can sign up', () => {
   
    const timestamp = Date.now();
    const username = `${timestamp.toString()}`;
    const email = `cyteste_${timestamp.toString()}@teste.com`;

    cy.intercept('POST', '/kv/routeUserServiceManager1').as('signUpRequest');


    cy.visit('http://localhost:3000/#/register'); 
    cy.get('input[placeholder="Your Name"]').type(username);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type('123');

    cy.get('button').contains('Sign up').click();

    cy.wait('@signUpRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(200); 
    });

  });
});