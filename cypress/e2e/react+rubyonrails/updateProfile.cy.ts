describe('test update profile', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3Mzk0MTA2NDV9.97GWZIyMBNDyKkMMvV1HlScZh0l3aaiLIF1gjKI7kPI'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can update profile', () => {
      const timestamp = Date.now();

      const bio = ` - ${timestamp.toString()} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`
      

      cy.visit('http://localhost:4000/#/settings');

      cy.get('textarea[name="bio"]').clear().type(bio);
      cy.get('input[name="password"]').type('123');
      

      cy.get('button').contains('Update Settings').click();

      cy.contains(timestamp);
      
    });
  });