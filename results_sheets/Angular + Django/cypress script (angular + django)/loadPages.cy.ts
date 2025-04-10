describe('Navegar entre páginas 5 vezes em ordem', () => {
    before(() => {
      // Usar o comando customizado para simular autenticação
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzczOTUxMzAwLCJpYXQiOjE3NDI0MTUzMDAsImp0aSI6IjI4OTk4MTFlMDQ5YjRiMDA5ODQ4Y2JlNDc2ZWI0YWMwIiwidXNlcl9pZCI6MX0.vadAnZNc_eqYVNn4ciIKfUX8EsTg0T2JWfVh10OgLfY'; 
      window.localStorage.setItem('token', token);
    });
    it('deve navegar entre as páginas 5 vezes', () => {
      const pages = [
        {
          url: 'http://localhost:4200/#/',
          selector: 'p', // Elemento que indica que a página está carregada
          text: 'A place to share your knowledge.', // Texto esperado no elemento
        },
        {
          url: 'http://localhost:4200/#/editor',
          selector: 'button', // Elemento que indica que a página está carregada
          text: 'Publish Article', // Texto esperado no elemento
        },
        {
          url: 'http://localhost:4200/#/settings',
          selector: 'button', // Elemento que indica que a página está carregada
          text: 'Update Settings', // Texto esperado no elemento
        },
        {
          url: 'http://localhost:4200/#/my-profile',
          selector: 'div', // Elemento que indica que a página está carregada
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', // Texto esperado no elemento
        },
      ];
  
      const totalLoops = 50; // Número de vezes que a lista será percorrida
      let totalPagesVisited = 0;
      let currentLoop = 0;
  
      function navigatePages(index) {
        if (index >= pages.length) {
          currentLoop++; // Incrementa o contador de loops
          index = 0; // Volta ao início da lista após percorrer todas as páginas
        }
  
        // Verifica se o número de loops foi atingido
        if (currentLoop >= totalLoops) {
          // Finaliza o teste e exibe o total de páginas visitadas
          cy.log(`Total de páginas visitadas em ${totalLoops} loops: ${totalPagesVisited}`);
          return;
        }
  
        const currentPage = pages[index];
        cy.visit(currentPage.url);
  
        // Espera que o elemento específico da página esteja visível e contenha o texto esperado
        cy.get(currentPage.selector).contains(currentPage.text).should('be.visible');
  
        totalPagesVisited++;
  
        // Navega para a próxima página
        cy.wrap(index + 1).then(navigatePages); // Usa cy.wrap e cy.then para evitar recursão direta
      }
  
      // Inicia o processo de navegação
      navigatePages(0);
    });
  });