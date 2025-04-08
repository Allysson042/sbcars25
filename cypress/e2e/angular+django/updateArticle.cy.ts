describe('test update article', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczODY0NTY4LCJpYXQiOjE3NDIzMjg1NjgsImp0aSI6IjI5ZDE1NDRhMjM2NTQ1MzJhMWVhYThmMDVkMGU5NjkyIiwidXNlcl9pZCI6MX0.9Kt18bW5UWSoenzODZ5l4tA8HAtiTpr6ZI1H-NHo1rw'; 
      window.localStorage.setItem('token', token);
    });
  
    it('User can update article', () => {
      const timestamp = Date.now();

      const body = ` - ${timestamp.toString()} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`
      

      cy.visit('http://localhost:4200/#/editor/article-test');

      cy.get('textarea[placeholder="Write your article (in markdown)"]').type(body);
      
      

      cy.get('button').contains('Publish Article').click();

      cy.visit('http://localhost:4200/#/article/article-test');
      cy.contains(timestamp);
      
    });
  });