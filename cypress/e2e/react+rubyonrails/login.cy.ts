describe('User Authentication', () => {
    it('User can log in', () => {
    
      cy.visit('http://localhost:4000/#/login'); 
      cy.get('input[name="email"]').type('teste@teste.com');
      cy.get('input[name="password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
    });
  });