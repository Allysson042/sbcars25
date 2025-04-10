describe('test delete comment on articles', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczODY0NTY4LCJpYXQiOjE3NDIzMjg1NjgsImp0aSI6IjI5ZDE1NDRhMjM2NTQ1MzJhMWVhYThmMDVkMGU5NjkyIiwidXNlcl9pZCI6MX0.9Kt18bW5UWSoenzODZ5l4tA8HAtiTpr6ZI1H-NHo1rw'; 
      window.localStorage.setItem('token', token);
    });
  
    it('User can delete comment', () => {

      cy.intercept('DELETE', '/api/articles/article-test/comments/*').as('deleteCommentRequest');

      cy.visit('http://localhost:4200/#/article/article-test');
      cy.wait(500);


      cy.get('.mod-options').first().click();

      
      cy.wait('@deleteCommentRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(204); 
      });
    });
  });