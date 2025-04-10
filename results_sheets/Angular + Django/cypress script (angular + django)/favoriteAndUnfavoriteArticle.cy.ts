describe('test favorite and unfavorite article', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczOTUwMDE0LCJpYXQiOjE3NDI0MTQwMTQsImp0aSI6ImVhNTA1YWU4MmRlMzRjYjJhYjYwNjc1NzExNzc1ODUwIiwidXNlcl9pZCI6MTR9.hYuwYoWYvkc0p03XlJKUGD888cWOQtCfQR_S93e0c3c'; 
      window.localStorage.setItem('token', token);
    });
  
    it('User can favorite and unfavorite article', () => {

      cy.visit('http://localhost:4200/#/article/article-test');     

      cy.get('button').contains(' Favorite Article ').click();

      cy.visit('http://localhost:4200/#/my-profile/favorites');
      
      cy.get('.articles-toggle').should('exist');
      cy.contains("article test");

      cy.visit('http://localhost:4200/#/article/article-test');
      
      cy.get('button').contains(' Unfavorite Article ').click();

      cy.visit('http://localhost:4200/#/my-profile/favorites');

      cy.get('.articles-toggle').should('exist');
      cy.contains("article test").should("not.exist");
      
    });
  });