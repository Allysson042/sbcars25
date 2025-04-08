describe('test article delete', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczODY0NTY4LCJpYXQiOjE3NDIzMjg1NjgsImp0aSI6IjI5ZDE1NDRhMjM2NTQ1MzJhMWVhYThmMDVkMGU5NjkyIiwidXNlcl9pZCI6MX0.9Kt18bW5UWSoenzODZ5l4tA8HAtiTpr6ZI1H-NHo1rw'; 
      window.localStorage.setItem('token', token);
    });
  
    it('delete article', () => {

      cy.intercept('DELETE', '/api/articles/*').as('deleteArticleRequest');
      

      cy.visit('http://localhost:4200/#/profile/teste');
      cy.get('.preview-link').first().click();
      
      const title = () => cy.get('h1');

      cy.get('button').contains(' Delete Article').click();

      cy.wait('@deleteArticleRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(204); 
      });
      
    });
  });