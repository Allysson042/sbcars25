describe('test logout', () => {
    before(() => {
        // Usar o comando customizado para simular autenticação
        const jwtToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE3NDEyMTc4OTN9.spHH1NhdyWyVzR3Ah_Ueaz0F2syrSiK1FAohyu4tQA4'; 
        window.localStorage.setItem('jwtToken', jwtToken);
      });
  
    it('User can logout', () => {

      cy.visit('http://localhost:4000/#/settings');
      cy.wait(500);
        

      cy.get('button').contains('Or click here to logout.').click();

      

      cy.contains(' Settings').should("not.exist");

      
    });
  });