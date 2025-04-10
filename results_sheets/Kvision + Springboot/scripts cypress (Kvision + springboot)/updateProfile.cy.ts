describe('test update profile', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTc0Mjg1NjA4MiwiaWF0IjoxNzQyNzY5NjgyfQ.8dD-fTtmvhZbjDNue6wxx1KUSo-01cm0EsTa150vVzw'; 
      window.localStorage.setItem('jwtToken', jwtToken);
    });
  
    it('User can update profile', () => {
      const timestamp = Date.now();

      const bio = ` - ${timestamp.toString()} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`
      
      cy.visit('http://localhost:3000/#/settings');

      cy.get('textarea[placeholder="Short bio about you"]').clear().type(bio);
      cy.get('input[placeholder="Password"]').type('123');
      

      cy.get('button').contains('Update Settings').click();

      cy.get('p').contains(bio).should('exist');
      
    });
  });