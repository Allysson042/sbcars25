describe('test login, filter article by tag and comment', () => {
  
    it('User can login, filter article by tag and then comment', () => {

      cy.visit('http://localhost:4200/#/login'); 
      cy.get('input[placeholder="Email"]').type('teste@teste.com');
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500)
        
      cy.visit('http://localhost:4200/#/');
      cy.wait(500);
        
      cy.get('.sidebar').contains('tagFilter').click();

      cy.get('.feed-toggle').contains('tagFilter');
      cy.contains("article test tag filter").click();

      const timestamp = Date.now();

      const comment = ` - ${timestamp.toString()} test comment`

      cy.get('textarea[placeholder="Write a comment..."]').type(comment);

      cy.get('button').contains('Post Comment').click();

      cy.reload() // atualiza página para o comentario aparecer

      cy.contains(timestamp);
      

      
    });
  });