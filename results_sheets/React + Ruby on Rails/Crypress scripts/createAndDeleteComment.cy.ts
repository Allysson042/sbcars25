describe('test comment on articles', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NDEzOTE4MDJ9.LUMQsxToYiiATNgHsFIqioGYlU3Y6x6f0ctNUw-0_ik'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can creat and delete comment', () => {
      const timestamp = Date.now();

      const comment = ` - ${timestamp.toString()} test comment`

      cy.intercept('DELETE', '/api/articles/article-test/comments/*').as('deleteCommentRequest');
      

      cy.visit('http://localhost:4000/#/article/article-test');

      cy.get('textarea[class="form-control"]').type(comment);

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