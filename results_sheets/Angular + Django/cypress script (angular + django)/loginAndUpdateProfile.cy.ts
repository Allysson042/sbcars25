describe('User Authentication and update profile', () => {
    it('User can log in and then update profile', () => {
      const timestamp = Date.now();

      const bio = ` - ${timestamp.toString()} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`
      


      cy.visit('http://localhost:4200/#/login'); 
      cy.get('input[placeholder="Email"]').type('teste@teste.com');
      cy.get('input[placeholder="Password"]').type('123');
      cy.get('button').contains('Sign in').click();
  
      cy.contains("teste");
      cy.wait(500);

      cy.visit('http://localhost:4200/#/settings');

      cy.get('textarea[placeholder="Short bio about you"]').clear().type(bio);
      cy.get('input[placeholder="New Password"]').type('123');
      

      cy.get('button').contains('Update Settings').click();

      cy.contains("Updated successfully!");
    });
  });