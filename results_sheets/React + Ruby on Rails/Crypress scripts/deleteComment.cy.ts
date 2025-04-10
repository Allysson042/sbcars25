describe('test delete comment on articles', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NDEzOTE4MDJ9.LUMQsxToYiiATNgHsFIqioGYlU3Y6x6f0ctNUw-0_ik'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can delete comment', () => {

      cy.intercept('DELETE', '/api/articles/article-test/comments/*').as('deleteCommentRequest');
      

      cy.visit('http://localhost:4000/#/article/article-test');
      cy.wait(500);

      cy.get('.mod-options').first().click();

      cy.wait('@deleteCommentRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(204); 
      });
    });
  });