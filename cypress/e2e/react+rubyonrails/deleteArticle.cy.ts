describe('test article delete', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NDE3NDIwODl9.aA6QgmhTF5WDg-fO2zG_06zEdO0r_WR2-QAyqEfIuH0'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('delete article', () => {
      

      cy.visit('http://localhost:4000/#/profile/teste');
      cy.get('.preview-link').first().click();
      
      const title = () => cy.get('h1');

      cy.get('button').contains(' Delete Article').click();

      console.log("TESTE: ", title)

      title().should("not.exist");
      
    });
  });