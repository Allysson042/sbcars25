describe('test delete comment on articles', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTc0Mjg1NjA4MiwiaWF0IjoxNzQyNzY5NjgyfQ.8dD-fTtmvhZbjDNue6wxx1KUSo-01cm0EsTa150vVzw'; 
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