describe('test login, filter article by tag and comment', () => {
  
    it('User can login, filter article by tag and then comment', () => {

      cy.visit('http://localhost:3000/#/login'); 
      cy.get('input[placeholder="Email"]').type('teste@teste.com');
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500);
        
      cy.visit('http://localhost:3000/#/');
      cy.wait(500);
        
      cy.get('.sidebar').contains('tagFilter').click();

      cy.get('.feed-toggle').contains('tagFilter');
      cy.contains("article test tag filter").click();

      const timestamp = Date.now();

      const comment = ` - ${timestamp.toString()} test comment`


      // Espera até que o botão "Post Comment" esteja visível
    cy.contains('button', 'Post Comment').should('be.visible');

   // Espera até que o textarea esteja pronto
   cy.get('.card-block textarea.form-control[placeholder="Write a comment..."]')
     .should('exist') // Verifica se o elemento existe no DOM
     .should('be.visible') // Verifica se o elemento está visível
     .should('not.be.disabled'); // Verifica se o elemento não está desabilitado

   cy.wait(100)
   // Digita o comentário no textarea
   cy.get('.card-block textarea.form-control[placeholder="Write a comment..."]')
     .type(comment); // Adiciona um delay para garantir que a digitação seja concluída

     cy.get('button').contains('Post Comment').click();

     cy.reload() // atualiza página para o comentario aparecer

     cy.contains(timestamp);
      
    });
  });