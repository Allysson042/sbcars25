describe('test unfavorite article', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE3NDE0NzkxMDJ9._0ywdMRt2-8ctY-6M4AhbWFwIyNX9UdIoKLO4BnlXLc'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can unfavorite article', () => {

      cy.visit('http://localhost:4000/#/article/article-test');
      
      cy.get('button').contains('Unfavorite Post').click();

      cy.visit('http://localhost:4000/#/profile/teste2/favorites');
      
      cy.contains("article test").should("not.exist");
      
    });
  });