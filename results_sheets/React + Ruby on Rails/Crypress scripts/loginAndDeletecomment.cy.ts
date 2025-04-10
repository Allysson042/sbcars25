describe('test login and delete comment on articles', () => {

    it('User can login and delete comment', () => {


        cy.visit('http://localhost:4000/#/login'); 
        cy.get('input[name="email"]').type('teste@teste.com');
        cy.get('input[name="password"]').type('123');
        cy.get('button').contains('Sign in').click();
    
        cy.contains("teste");
        cy.wait(500)

      cy.intercept('DELETE', '/api/articles/article-test/comments/*').as('deleteCommentRequest');
      

      cy.visit('http://localhost:4000/#/article/article-test');
      cy.wait(500);

      cy.get('.mod-options').first().click();

      cy.wait('@deleteCommentRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(204); 
      });
    });
  });