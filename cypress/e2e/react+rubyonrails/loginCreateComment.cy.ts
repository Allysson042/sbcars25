describe('test login and comment on articles', () => {

  
    it('User can login and creat comment', () => {
      const timestamp = Date.now();

      const comment = ` - ${timestamp.toString()} test comment`


      cy.visit('http://localhost:4000/#/login'); 
      cy.get('input[name="email"]').type('teste@teste.com');
      cy.get('input[name="password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500)
      

      cy.visit('http://localhost:4000/#/article/article-test');

      cy.get('textarea[class="form-control"]').type(comment);

      cy.get('button').contains('Post Comment').click();

      cy.reload() // atualiza página para o comentario aparecer

      cy.contains(timestamp);
      
    });
  });