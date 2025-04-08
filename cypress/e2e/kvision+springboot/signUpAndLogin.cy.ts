describe('creat User and Authentication', () => {
  it('User can sign up and log in', () => {
   
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

    cy.wait(200);
    cy.visit('http://localhost:3000/#/login');

    cy.get('input[placeholder="Email"]')
    .should('exist') // Verifica se o elemento existe no DOM
    .should('be.visible') // Verifica se o elemento está visível
    .should('not.be.disabled'); // Verifica se o elemento não está desabilitado

    cy.wait(100);
    cy.get('input[placeholder="Email"]').type(email);
    cy.get('input[placeholder="Password"]').type('123');
    cy.get('button').contains('Sign in').click();

    cy.contains(username);
  });
});