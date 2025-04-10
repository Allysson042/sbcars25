describe('User login and logout', () => {
    it('User can login and logout', () => {
    
      cy.visit('http://localhost:4000/#/login'); 
      cy.get('input[name="email"]').type('teste@teste.com');
      cy.get('input[name="password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500);

      cy.visit('http://localhost:4000/#/settings');
     
        

      cy.get('button').contains('Or click here to logout.').click();

      

      cy.contains(' Settings').should("not.exist");


    });
  });