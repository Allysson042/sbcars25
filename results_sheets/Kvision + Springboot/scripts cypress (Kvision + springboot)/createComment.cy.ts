describe('test comment on articles', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTc0Mjg1NjA4MiwiaWF0IjoxNzQyNzY5NjgyfQ.8dD-fTtmvhZbjDNue6wxx1KUSo-01cm0EsTa150vVzw'; 
      window.localStorage.setItem('jwtToken', jwtToken);
    });
  
    it('User can creat comment', () => {
      const timestamp = Date.now();

      const comment = ` - ${timestamp.toString()} test comment`
      

      cy.visit('http://localhost:3000/#/article/article-test');

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