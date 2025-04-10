describe('test favorite and unfavorite article', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NDAyNjgyMTd9.9AABcOKg1hMjCOHQrbHxJoWDCbZxWMfxqZXKpY3ITco'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can favorite and unfavorite article', () => {

      cy.visit('http://localhost:4000/#/article/article-test-2');     

      cy.get('button').contains('Favorite Post').click();

      cy.visit('http://localhost:4000/#/profile/teste/favorites');
      
      cy.contains("article test 2");

      cy.visit('http://localhost:4000/#/article/article-test-2');
      
      cy.get('button').contains('Unfavorite Post').click();

      cy.visit('http://localhost:4000/#/profile/teste/favorites');
      
      cy.contains("article test 2").should("not.exist");
      
    });
  });