describe('test login, filter article by tag and comment', () => {
  
    it('User can login, filter article by tag and then comment', () => {
        const timestamp = Date.now();

        const comment = ` - ${timestamp.toString()} test comment`
        

        cy.visit('http://localhost:4000/#/login'); 
        cy.get('input[name="email"]').type('teste@teste.com');
        cy.get('input[name="password"]').type('123');
        cy.get('button').contains('Sign in').click();
    
        cy.contains("teste");

      cy.visit('http://localhost:4000/#/');
      cy.wait(500);
        
      cy.get('.sidebar').contains('tagFilter').click();

      cy.get('.feed-toggle').contains('tagFilter');
      cy.contains("article test tag filter").click();
      
      cy.get('textarea[class="form-control"]').type(comment);

      cy.get('button').contains('Post Comment').click();

      cy.reload() // atualiza página para o comentario aparecer

      cy.contains(timestamp);

      
    });
  });