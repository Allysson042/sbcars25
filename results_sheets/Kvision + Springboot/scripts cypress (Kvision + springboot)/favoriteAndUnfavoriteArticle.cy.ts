describe('test favorite and unfavorite article', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTIiLCJleHAiOjE3NDI4NTk0MjAsImlhdCI6MTc0Mjc3MzAyMH0.cAkk_nmpSsdkBUPqhttKQKI2OMHkg1rR85MbYUqFHxg'; 
      window.localStorage.setItem('jwtToken', jwtToken);
    });
  
    it('User can favorite and unfavorite article', () => {

      cy.visit('http://localhost:3000/#/article/article-test');     

      cy.get('button').contains(' Favorite Post ').click();

      cy.visit('http://localhost:3000/#/@teste2/favorites');
      
      cy.get('.articles-toggle').should('exist');
      cy.contains("article test");

      cy.visit('http://localhost:3000/#/article/article-test');
      
      cy.get('button').contains(' Unfavorite Post ').click();

      cy.visit('http://localhost:3000/#/@teste2/favorites');

      cy.get('.articles-toggle').should('exist');
      cy.contains("article test").should("not.exist");
      
    });
  });