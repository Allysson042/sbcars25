describe('creat User, Authentication and logout', () => {
    it('User can sign up, log in and then logout', () => {
     
      const timestamp = Date.now();
      const username = `${timestamp.toString()}`;
      const email = `cyteste_${timestamp.toString()}@teste.com`;
  
      cy.intercept('POST', '/kv/routeUserServiceManager1').as('signUpRequest');
  
  
      cy.visit('http://localhost:3000/#/register'); 
      cy.get('input[placeholder="Your Name"]').type(username);
      cy.get('input[placeholder="Email"]').type(email);
      cy.get('input[placeholder="Password"]').type('123');
  
      cy.get('button').contains('Sign up').click();
  
      cy.wait('@signUpRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(200); 
      });

      cy.wait(300);
  
      cy.visit('http://localhost:3000/#/login');
  
      cy.get('input[placeholder="Email"]')
      .should('exist') // Verifica se o elemento existe no DOM
      .should('be.visible') // Verifica se o elemento está visível
      .should('not.be.disabled'); // Verifica se o elemento não está desabilitado
  
      cy.wait(300);
      cy.get('input[placeholder="Email"]').type(email);
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains(username);
      cy.wait(500);



      cy.visit('http://localhost:3000/#/settings');
      cy.wait(500);
        

      cy.get('button').contains('Or click here to logout.').click();

      cy.contains(' Settings').should("not.exist");

    });
  });