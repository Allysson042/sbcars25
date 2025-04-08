describe('test comment on articles', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NDE3NDIwODl9.aA6QgmhTF5WDg-fO2zG_06zEdO0r_WR2-QAyqEfIuH0'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can creat comment', () => {
      const timestamp = Date.now();

      const comment = ` - ${timestamp.toString()} test comment`
      

      cy.visit('http://localhost:4000/#/article/article-test');

      cy.get('textarea[class="form-control"]').type(comment);

      cy.get('button').contains('Post Comment').click();

      cy.reload() // atualiza página para o comentario aparecer

      cy.contains(timestamp);
      
    });
  });