describe('User Authentication', () => {
  it('User can sign up and log in', () => {
    cy.visit('http://localhost:4000/#/register'); // Substitua pela rota do React
    cy.get('input[name="username"]').type('cyteste2');
    cy.get('input[name="email"]').type('cyteste2@teste.com');
    cy.get('input[name="password"]').type('123');

    cy.get('button').contains('Sign up').click();

   // cy.contains('Welcome, user@example.com');

    // cy.get('a').contains('Sign in').click();
    cy.visit('http://localhost:4000/#/login');
    cy.get('input[name="email"]').type('cyteste2@teste.com');
    cy.get('input[name="password"]').type('123');
    cy.get('button').contains('Sign in').click();

    cy.contains('cyteste');
  });
});
