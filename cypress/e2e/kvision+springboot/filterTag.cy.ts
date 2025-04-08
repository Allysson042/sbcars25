describe('test filter article by tag', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTc0Mjk0NDQ1OSwiaWF0IjoxNzQyODU4MDU5fQ.jVEUZxK5dbA6ztZbIqw5UqFgPB4oYzRtGOVsEbe3MEY'; 
      window.localStorage.setItem('jwtToken', jwtToken);
    });
  
    it('User can filter article by tag', () => {

      cy.visit('http://localhost:3000/#/');
      cy.wait(500);
        

      cy.get('.sidebar').contains('tagFilter').click();

      

      cy.get('.feed-toggle').contains('tagFilter');
      cy.contains("article test tag filter");

      
    });
  });