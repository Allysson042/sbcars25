describe('creat User, Authentication and logout', () => {
    it('User can sign up, log in and then logout', () => {
     
      const timestamp = Date.now();
      const username = `cyteste_${timestamp.toString()}`;
      const email = `cyteste_${timestamp.toString()}@teste.com`;
  
  
      cy.visit('http://localhost:4200/#/register'); 
      cy.get('input[placeholder="Username"]').type(username);
      cy.get('input[placeholder="Email"]').type(email);
      cy.get('input[placeholder="Password"]').type('123');
  
      cy.get('button').contains('Sign up').click();
      cy.wait(500);
  
 
      cy.get('h1').contains('Sign in');
      cy.get('input[placeholder="Email"]').type(email);
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains(username);
      cy.wait(500);



      cy.visit('http://localhost:4200/#/settings');
      cy.wait(500);
        

      cy.get('button').contains('Or click here to logout.').click();

      cy.contains(' Settings').should("not.exist");

    });
  });