describe('User Authentication, article creation and update', () => {
    it('User can log in, create and update article', () => {

      const timestamp = Date.now();
      const title = `title_teste_${timestamp.toString()}`;
      const description = `description_teste_${timestamp.toString()}`;
      const body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      const tag = `tag_teste_${timestamp.toString()}`;
    
      cy.visit('http://localhost:4000/#/login'); 
      cy.get('input[name="email"]').type('teste@teste.com');
      cy.get('input[name="password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500);

      cy.visit('http://localhost:4000/#/editor');

      cy.get('input[name="title"]').type(title);
      cy.get('input[name="description"]').type(description);
      cy.get('textarea[name="body"]').type(body);
      cy.get('input[name="tag"]').type(tag);
      cy.get('button').contains('Publish Article').click();

      cy.contains(title);

      cy.contains(' Edit Article').click();

      const timestamp = Date.now();

      const body = ` - ${timestamp.toString()} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`


      cy.get('textarea[name="body"]').type(body);
      

      cy.get('button').contains('Publish Article').click();
      cy.wait(500);

      cy.contains(timestamp);

    });
  });