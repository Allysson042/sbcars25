describe('User Authentication fail', () => {
    it('User can not log in with invalid email', () => {
      // Ignora exceções não tratadas na aplicação
      Cypress.on('uncaught:exception', (err, runnable) => {
        console.error('Erro não tratado:', err.message);
        return false; // Retorna false para evitar que o Cypress falhe o teste
      });

      cy.intercept('POST', '/kv/routeUserServiceManager0').as('loginRequest');
    
      cy.visit('http://localhost:3000/#/login'); 
      cy.get('input[placeholder="Email"]').type('invalidTeste@teste.com');
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();

  
      cy.wait('@loginRequest').then((interception) => {
        expect(interception.response.body).to.have.property('error', 'email or password is invalid');
      });
    });
  });