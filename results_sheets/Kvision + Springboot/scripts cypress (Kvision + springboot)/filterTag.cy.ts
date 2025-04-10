describe('test filter article by tag', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZTIiLCJleHAiOjE3NDI4NTk0MjAsImlhdCI6MTc0Mjc3MzAyMH0.cAkk_nmpSsdkBUPqhttKQKI2OMHkg1rR85MbYUqFHxg'; 
      window.localStorage.setItem('jwtToken', jwtToken);
    });
  
    it('User can filter article by tag', () => {

      cy.visit('http://localhost:3000/#/');
      cy.wait(500);
        

      cy.get('.sidebar').contains('tagFilter').click();

      

      cy.get('.feed-toggle').contains('tagFilter');
      cy.contains("article test tag filter");

      
    });
  });