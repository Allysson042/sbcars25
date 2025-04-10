describe('test login and article delete', () => {
  
    it('user can login and delete article', () => {

      cy.visit('http://localhost:4200/#/login'); 
      cy.get('input[placeholder="Email"]').type('teste@teste.com');
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
        cy.wait(500)
      

      cy.intercept('DELETE', '/api/articles/*').as('deleteArticleRequest');
    

      cy.visit('http://localhost:4200/#/profile/teste');
      cy.get('.preview-link').first().click();
      
      const title = () => cy.get('h1');

      cy.get('button').contains(' Delete Article').click();

      cy.wait('@deleteArticleRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(204); 
      });
    });
  });