describe('creat User', () => {
  it('User can sign up', () => {
   
    const timestamp = Date.now();
    const username = `cyteste_${timestamp.toString()}`;
    const email = `cyteste_${timestamp.toString()}@teste.com`;

    cy.intercept('POST', '/api/users').as('signUpRequest');


    cy.visit('http://localhost:4000/#/register'); 
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type('123');

    cy.get('button').contains('Sign up').click();

    cy.wait('@signUpRequest').then((interception) => {
      expect(interception.response.statusCode).to.eq(201); 
    });

  });
});