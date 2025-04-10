describe('test comment on articles', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczODY0NTY4LCJpYXQiOjE3NDIzMjg1NjgsImp0aSI6IjI5ZDE1NDRhMjM2NTQ1MzJhMWVhYThmMDVkMGU5NjkyIiwidXNlcl9pZCI6MX0.9Kt18bW5UWSoenzODZ5l4tA8HAtiTpr6ZI1H-NHo1rw'; 
      window.localStorage.setItem('token', token);
    });
  
    it('User can creat and delete comment', () => {
      const timestamp = Date.now();

      const comment = ` - ${timestamp.toString()} test comment`

      cy.intercept('DELETE', '/api/articles/article-test/comments/*').as('deleteCommentRequest');
      

      cy.visit('http://localhost:4200/#/article/article-test');

      cy.get('textarea[placeholder="Write a comment..."]').type(comment);

      cy.get('button').contains('Post Comment').click();

      cy.reload() // atualiza página para o comentario aparecer

      cy.contains(timestamp);


      cy.contains('.card .card-text', comment) // Encontra o elemento com o texto
      .parents('.card') // Navega até o elemento pai com a classe .card
      .within(() => { // Limita o escopo para dentro do elemento .card
        // Localiza e clica no elemento com a classe .mod-options
        cy.get('.mod-options').click();
      });

      
      cy.wait('@deleteCommentRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(204); 
      });

      
    });
  });