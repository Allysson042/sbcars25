describe('test delete comment on articles', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTc0Mjk0NDQ1OSwiaWF0IjoxNzQyODU4MDU5fQ.jVEUZxK5dbA6ztZbIqw5UqFgPB4oYzRtGOVsEbe3MEY'; 
      window.localStorage.setItem('jwtToken', jwtToken);
    });
  
    it('User can delete comment', () => {

      cy.intercept('POST', '/kv/routeArticleServiceManager10').as('deleteCommentRequest');

      cy.visit('http://localhost:3000/#/article/article-test');
      cy.wait(500);


      cy.get('.mod-options').first().click();

      
      cy.wait('@deleteCommentRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(200); 
      });
    });
  });