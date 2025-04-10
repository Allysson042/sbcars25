describe('test comment on articles', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3Mzk0MTA2NDV9.97GWZIyMBNDyKkMMvV1HlScZh0l3aaiLIF1gjKI7kPI'; 
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