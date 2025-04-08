describe('test logout', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NDE3MzQzOTl9.vB4336urqqkbupvklyp_HmeYk_9wsyfI4XQiBeF4tSI'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can logout', () => {

      cy.visit('http://localhost:4000/#/settings');
      cy.wait(500);
        

      cy.get('button').contains('Or click here to logout.').click();

      

      cy.contains(' Settings').should("not.exist");

      
    });
  });