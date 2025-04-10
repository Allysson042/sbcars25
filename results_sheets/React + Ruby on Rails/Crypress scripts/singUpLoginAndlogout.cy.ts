describe('creat User, Authentication and logout', () => {
    it('User can sign up, log in and then logout', () => {
     
      const timestamp = Date.now();
      const username = `cyteste_${timestamp.toString()}`;
      const email = `cyteste_${timestamp.toString()}@teste.com`;
  
  
      cy.visit('http://localhost:4000/#/register'); 
      cy.get('input[name="username"]').type(username);
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type('123');
  
      cy.get('button').contains('Sign up').click();
  
      cy.wait(500);
  
      cy.get('a').contains('Sign in').click();
      cy.get('input[name="email"]').type(email);
      cy.get('input[name="password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains(username);
      cy.wait(500);

      cy.visit('http://localhost:4000/#/settings');
      cy.wait(500);
        

      cy.get('button').contains('Or click here to logout.').click();

      cy.contains(' Settings').should("not.exist");

    });
  });