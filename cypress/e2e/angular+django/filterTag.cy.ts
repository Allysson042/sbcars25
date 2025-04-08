describe('test filter article by tag', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NDE3NDIwODl9.aA6QgmhTF5WDg-fO2zG_06zEdO0r_WR2-QAyqEfIuH0'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can filter article by tag', () => {

      cy.visit('http://localhost:4200/#/');
      cy.wait(500);
        

      cy.get('.sidebar').contains('tagFilter').click();

      

      cy.get('.feed-toggle').contains('tagFilter');
      cy.contains("article test tag filter");

      
    });
  });