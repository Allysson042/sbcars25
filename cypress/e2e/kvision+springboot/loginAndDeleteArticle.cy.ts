describe('test login and article delete', () => {
  
    it('user can login and delete article', () => {

      cy.visit('http://localhost:3000/#/login'); 
      cy.get('input[placeholder="Email"]').type('teste@teste.com');
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500);
      

      cy.intercept('POST', '/kv/routeArticleServiceManager8').as('deleteArticleRequest');
      

      cy.visit('http://localhost:3000/#/@teste');
      cy.get('.preview-link').first().click();
      

 
      cy.get('button').contains(' Delete Article').click();

      cy.wait('@deleteArticleRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(200); 
      });
    });
  });