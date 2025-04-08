describe('test login and comment on articles', () => {

  
    it('User can login and creat comment', () => {
      const timestamp = Date.now();

      const comment = ` - ${timestamp.toString()} test comment`


      cy.visit('http://localhost:4200/#/login'); 
      cy.get('input[placeholder="Email"]').type('teste@teste.com');
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500)
      


      cy.visit('http://localhost:4200/#/article/article-test');

      cy.get('textarea[placeholder="Write a comment..."]').type(comment);

      cy.get('button').contains('Post Comment').click();

      cy.reload() // atualiza página para o comentario aparecer

      cy.contains(timestamp);
      
    });
  });