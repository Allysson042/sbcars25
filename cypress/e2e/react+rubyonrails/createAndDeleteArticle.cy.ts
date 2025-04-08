describe('test article creation', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NDE3NDIwODl9.aA6QgmhTF5WDg-fO2zG_06zEdO0r_WR2-QAyqEfIuH0'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('Create article', () => {
      const timestamp = Date.now();
      const title = `title_teste_${timestamp.toString()}`;
      const description = `description_teste_${timestamp.toString()}`;
      const body = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      const tag = `tag_teste_${timestamp.toString()}`;

      cy.visit('http://localhost:4000/#/editor');

      cy.get('input[name="title"]').type(title);
      cy.get('input[name="description"]').type(description);
      cy.get('textarea[name="body"]').type(body);
      cy.get('input[name="tag"]').type(tag);
      cy.get('button').contains('Publish Article').click();

      cy.contains(' Edit Article');
      cy.contains(title);


      const title = () => cy.get('h1');

      cy.get('button').contains(' Delete Article').click();

      console.log("TESTE: ", title)

      title().should("not.exist");
      
    });
  });