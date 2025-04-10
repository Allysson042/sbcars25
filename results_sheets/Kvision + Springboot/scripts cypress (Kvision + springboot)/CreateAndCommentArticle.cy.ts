describe('test article creation and commeting', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTc0Mjg1NjA4MiwiaWF0IjoxNzQyNzY5NjgyfQ.8dD-fTtmvhZbjDNue6wxx1KUSo-01cm0EsTa150vVzw'; 
      window.localStorage.setItem('jwtToken', jwtToken);
    });
  
    it('Create article and comment', () => {
      let timestamp = Date.now();
      const title = `title_teste_${timestamp.toString()}`;
      const description = `description_teste_${timestamp.toString()}`;
      const body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      const tag = `tag_teste_${timestamp.toString()}`;

      

      cy.visit('http://localhost:3000/#/editor');

      cy.get('input[placeholder="Article Title"]').type(title);
      cy.get('input[placeholder="What\'s this article about?"]').type(description); 
      cy.get('textarea[placeholder="Write your article (in markdown)"]').type(body);
      cy.get('input[placeholder="Enter tags"]').type(tag);
      cy.get('button').contains('Publish Article').click();
      
      cy.get('h1').contains(title);
      

      // cy.visit('http://localhost:3000/#/article/'+title);

      timestamp = Date.now();

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