describe('creat User and Authentication', () => {
    it('User can sign up and log in', () => {
     
      const timestamp = Date.now();
      const username = `cyteste_${timestamp.toString()}`;
      const email = `cyteste_${timestamp.toString()}@teste.com`;
  
  
      cy.visit('http://localhost:4200/#/register'); 
      cy.get('input[formcontrolname="username"]').type(username);
      cy.get('input[formcontrolname="email"]').type(email);
      cy.get('input[formcontrolname="password"]').type('123');
  
      cy.get('button').contains('Sign up').click();
  
      cy.wait(500);
  
      cy.get('a').contains('Sign in').click();
      cy.get('input[formcontrolname="email"]').type(email);
      cy.get('input[formcontrolname="password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains(username);
    });
  });