describe('test login and delete comment on articles', () => {

    it('User can login and delete comment', () => {


      cy.visit('http://localhost:4200/#/login'); 
      cy.get('input[placeholder="Email"]').type('teste@teste.com');
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500)
      cy.intercept('DELETE', '/api/articles/article-test/comments/*').as('deleteCommentRequest');

      cy.visit('http://localhost:4200/#/article/article-test');
      cy.wait(500);


      cy.get('.mod-options').first().click();

      
      cy.wait('@deleteCommentRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(204); 
      });
    });
  });