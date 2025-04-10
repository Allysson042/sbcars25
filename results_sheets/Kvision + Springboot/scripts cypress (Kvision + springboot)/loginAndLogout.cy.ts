describe('User login and logout', () => {
    it('User can login and logout', () => {
    
      cy.visit('http://localhost:3000/#/login'); 
      cy.get('input[placeholder="Email"]').type('teste@teste.com');
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500);

      cy.visit('http://localhost:3000/#/settings');
     
        

      cy.get('button').contains('Or click here to logout.').click();

      

      cy.contains(' Settings').should("not.exist");


    });
  });