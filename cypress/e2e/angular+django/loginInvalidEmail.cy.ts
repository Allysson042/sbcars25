describe('User Authentication fail', () => {
    it('User can not log in with invalid email', () => {
      // Ignora exceções não tratadas na aplicação
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Erro não tratado:', err.message);
        return false; // Retorna false para evitar que o Cypress falhe o teste
      });

      cy.intercept('POST', '/api/users/login').as('loginRequest');
    
      cy.visit('http://localhost:4200/#/login'); 
      cy.get('input[placeholder="Email"]').type('invalidTeste@teste.com');
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.wait('@loginRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(422); 
      });
    });
  });