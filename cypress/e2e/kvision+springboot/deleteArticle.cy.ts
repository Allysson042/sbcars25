describe('test article delete', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTc0MzAzNTM0OCwiaWF0IjoxNzQyOTQ4OTQ4fQ.FO1D42xX-SNVVp-96wsvnEHfejjCV0n-cOuMpeUwOR8'; 
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