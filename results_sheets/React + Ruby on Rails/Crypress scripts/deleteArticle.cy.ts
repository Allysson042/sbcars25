describe('test article delete', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NDEzOTE4MDJ9.LUMQsxToYiiATNgHsFIqioGYlU3Y6x6f0ctNUw-0_ik'; 
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