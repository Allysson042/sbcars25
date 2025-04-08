describe('User Authentication fail', () => {
    it('User can not log in with invalid email', () => {
      // Ignora exceções não tratadas na aplicação
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Erro não tratado:', err.message);
        return false; // Retorna false para evitar que o Cypress falhe o teste
      });

      cy.intercept('POST', '/api/auth/login').as('loginRequest');
    
      cy.visit('http://localhost:4000/#/login'); 
      cy.get('input[name="email"]').type('invalid@teste.com');
      cy.get('input[name="password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.wait('@loginRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(401); 
      });
    });
  });