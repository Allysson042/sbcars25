describe('test create and delete comment on articles', () => {
  
    it('User can  login, creat and delete comment', () => {

      cy.visit('http://localhost:4200/#/login'); 
      cy.get('input[placeholder="Email"]').type('teste@teste.com');
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500)
        
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