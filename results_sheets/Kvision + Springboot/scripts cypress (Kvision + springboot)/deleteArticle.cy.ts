describe('test article delete', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTc0Mjg1NjA4MiwiaWF0IjoxNzQyNzY5NjgyfQ.8dD-fTtmvhZbjDNue6wxx1KUSo-01cm0EsTa150vVzw'; 
      window.localStorage.setItem('jwtToken', jwtToken);
    });
  
    it('delete article', () => {

      cy.intercept('POST', '/kv/routeArticleServiceManager8').as('deleteArticleRequest');
      

      cy.visit('http://localhost:3000/#/@teste');
      cy.get('.preview-link').first().click();
      


      cy.get('button').contains(' Delete Article').click();

      cy.wait('@deleteArticleRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(200); 
      });
      
    });
  });