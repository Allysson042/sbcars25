describe('test favorite and unfavorite article', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE3NDE4MjQyMTd9.iqA39keJ0-ZVa-EAYX6AATheHTC-I__xReT7B10nDdY'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can favorite and unfavorite article', () => {

      cy.visit('http://localhost:4000/#/article/article-test');     

      cy.get('button').contains('Favorite Post').click();

      cy.visit('http://localhost:4000/#/profile/teste2/favorites');
      
      cy.contains("article test");

      cy.visit('http://localhost:4000/#/article/article-test');
      
      cy.get('button').contains('Unfavorite Post').click();

      cy.visit('http://localhost:4000/#/profile/teste2/favorites');
      
      cy.contains("article test").should("not.exist");
      
    });
  });