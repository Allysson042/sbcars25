describe('test filter article by tag', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NDAyNjgyMTd9.9AABcOKg1hMjCOHQrbHxJoWDCbZxWMfxqZXKpY3ITco'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can filter article by tag', () => {

      cy.visit('http://localhost:4000/#/');
      cy.wait(500);
        

      cy.get('.sidebar').contains('tagFilter').click();

      

      cy.get('.feed-toggle').contains('tagFilter');
      cy.contains("article test tag filter");

      
    });
  });