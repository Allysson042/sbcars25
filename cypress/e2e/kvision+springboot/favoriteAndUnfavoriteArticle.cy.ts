describe('test favorite and unfavorite article', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTIiLCJleHAiOjE3NDMwMTY5OTYsImlhdCI6MTc0MjkzMDU5Nn0.LLiH53JoZp3kP5VdAXyR2hWAgogo_8L7UeJOl_SfYqM'; 
      window.localStorage.setItem('jwtToken', jwtToken);
    });
  
    it('User can favorite and unfavorite article', () => {

      cy.visit('http://localhost:3000/#/article/article-test');     

      cy.get('button').contains(' Favorite Post ').click();

      cy.visit('http://localhost:3000/#/@teste2/favorites');
      
      cy.get('.articles-toggle').should('exist');
      cy.contains("article test");

      cy.visit('http://localhost:3000/#/article/article-test');
      
      cy.get('button').contains(' Unfavorite Post ').click();

      cy.visit('http://localhost:3000/#/@teste2/favorites');

      cy.get('.articles-toggle').should('exist');
      cy.contains("article test").should("not.exist");
      
    });
  });