describe('test comment on articles', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczODY0NTY4LCJpYXQiOjE3NDIzMjg1NjgsImp0aSI6IjI5ZDE1NDRhMjM2NTQ1MzJhMWVhYThmMDVkMGU5NjkyIiwidXNlcl9pZCI6MX0.9Kt18bW5UWSoenzODZ5l4tA8HAtiTpr6ZI1H-NHo1rw'; 
      window.localStorage.setItem('token', token);
    });
  
    it('User can creat comment', () => {
      const timestamp = Date.now();

      const comment = ` - ${timestamp.toString()} test comment`
      

      cy.visit('http://localhost:4200/#/article/article-test');

      cy.get('textarea[placeholder="Write a comment..."]').type(comment);

      cy.get('button').contains('Post Comment').click();

      cy.reload() // atualiza página para o comentario aparecer

      cy.contains(timestamp);
      
    });
  });