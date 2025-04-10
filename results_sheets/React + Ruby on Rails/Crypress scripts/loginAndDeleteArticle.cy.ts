describe('test login and article delete', () => {
  
    it('user can login and delete article', () => {

        cy.visit('http://localhost:4000/#/login'); 
        cy.get('input[name="email"]').type('teste@teste.com');
        cy.get('input[name="password"]').type('123');
        cy.get('button').contains('Sign in').click();
    
        cy.contains("teste");
        cy.wait(500)
      

      cy.visit('http://localhost:4000/#/profile/teste');
      cy.get('.preview-link').first().click();
      
      const title = () => cy.get('h1');

      cy.get('button').contains(' Delete Article').click();

      console.log("TESTE: ", title)

      title().should("not.exist");
      
    });
  });