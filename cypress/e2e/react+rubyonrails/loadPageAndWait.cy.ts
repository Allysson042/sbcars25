describe('Carregar e permanecer na página por 1 minuto', () => {
    it('deve carregar a página e permanecer nela por 1 minuto', () => {
      const pageUrl = 'http://localhost:4000/#/';
      const duration = 60 * 1000; // 1 minuto em milissegundos
      const startTime = new Date().getTime();
  
      // Visita a página
      cy.visit(pageUrl);
  
      // Espera que o elemento específico da página esteja visível
      cy.get('p').contains('A place to share your knowledge.').should('be.visible');
  
      // Aguarda o tempo restante para completar 1 minuto
      cy.wait(duration - (new Date().getTime() - startTime)).then(() => {
        cy.log('Página permaneceu carregada por 1 minuto.');
      });
    });
  });