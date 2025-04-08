describe(' article creation and update', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczODY0NTY4LCJpYXQiOjE3NDIzMjg1NjgsImp0aSI6IjI5ZDE1NDRhMjM2NTQ1MzJhMWVhYThmMDVkMGU5NjkyIiwidXNlcl9pZCI6MX0.9Kt18bW5UWSoenzODZ5l4tA8HAtiTpr6ZI1H-NHo1rw'; 
      window.localStorage.setItem('token', token);
    });

    it('User can create and update article', () => {

      const timestamp = Date.now();
      const title = `title_teste_${timestamp.toString()}`;
      const description = `description_teste_${timestamp.toString()}`;
      let body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      const tag = `tag_teste_${timestamp.toString()}`;

      cy.visit('http://localhost:4200/#/editor');

      cy.get('input[placeholder="Article Title"]').type(title);
      cy.get('input[placeholder="What\'s this article about?"]').type(description); 
      cy.get('textarea[placeholder="Write your article (in markdown)"]').type(body);
      cy.get('input[placeholder="Enter tags"]').type(tag).type('{enter}');;
      cy.get('button').contains(' Publish Article ').click();
      
      cy.contains("Published successfully!");
      cy.visit('http://localhost:4200/#/article/'+title);

      cy.contains(' Edit Article').click();

      const timestamp2 = Date.now();

      body = ` - ${timestamp2.toString()} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`


      cy.get('textarea[placeholder="Write your article (in markdown)"]').type(body);
      

      cy.get('button').contains('Publish Article').click();

      cy.visit('http://localhost:4200/#/article/'+title);

      cy.contains(timestamp2);

    });
  });