describe('User Authentication and update profile', () => {
    it('User can log in and then update profile', () => {
      const timestamp = Date.now();

      const bio = ` - ${timestamp.toString()} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`
      


      cy.visit('http://localhost:4000/#/login'); 
      cy.get('input[name="email"]').type('teste@teste.com');
      cy.get('input[name="password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500);

      cy.visit('http://localhost:4000/#/settings');

      cy.get('textarea[name="bio"]').clear().type(bio);
      cy.get('input[name="password"]').type('123');
      

      cy.get('button').contains('Update Settings').click();

      cy.contains(timestamp);
    });
  });