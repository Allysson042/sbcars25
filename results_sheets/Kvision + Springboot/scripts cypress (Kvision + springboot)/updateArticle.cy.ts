describe('test update article', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const jwtToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTc0Mjg1NjA4MiwiaWF0IjoxNzQyNzY5NjgyfQ.8dD-fTtmvhZbjDNue6wxx1KUSo-01cm0EsTa150vVzw'; 
      window.localStorage.setItem('jwtToken', jwtToken);
    });
  
    it('User can update article', () => {
      const timestamp = Date.now();

      const body = ` - ${timestamp.toString()} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`
      
      cy.visit('http://localhost:3000/#/editor/article-test');


      cy.get('textarea[placeholder="Write your article (in markdown)"]')
      .should('exist') // Verifica se o elemento existe no DOM
      .should('be.visible') // Verifica se o elemento está visível
      .should('not.be.disabled'); // Verifica se o elemento não está desabilitado

      cy.wait(100);
      cy.get('textarea[placeholder="Write your article (in markdown)"]').type(body);
      
      cy.get('button').contains('Publish Article').click();

      cy.visit('http://localhost:3000/#/editor/article-test');
      cy.contains(timestamp);
      
    }); 
  });