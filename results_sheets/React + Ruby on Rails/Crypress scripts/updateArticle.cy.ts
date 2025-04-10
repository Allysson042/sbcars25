describe('test update article', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3Mzk0MTA2NDV9.97GWZIyMBNDyKkMMvV1HlScZh0l3aaiLIF1gjKI7kPI'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can update article', () => {
      const timestamp = Date.now();

      const body = ` - ${timestamp.toString()} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`
      

      cy.visit('http://localhost:4000/#/editor/article-test');

      cy.get('textarea[name="body"]').type(body);
      
      

      cy.get('button').contains('Publish Article').click();

      cy.contains(timestamp);
      
    });
  });