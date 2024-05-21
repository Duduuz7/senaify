describe('template spec', () => {

  let musicaItem;

  before('passes', () => {
    cy.visit('/')
  });

  it('Redirecionar para a tela de busca', () => {
    cy.get("[href='/Search']").click()
    cy.scrollTo("top")
  });

  it('Procurando uma música específica', () => {
    cy.get("[data-testid='campoBusca']").type("Where Dragons Dwell")

    cy.get("[aria-label='music-item']").should('have.length.greaterThan', 0)

    
  });

  it('Música escolhida', () => {
    // cy.get("[aria-label='music-item']").filter(":contains('Gojira')").click()
    // cy.get("[aria-label='music-item']").contains(/^(Gojira)/i)

    musicaItem = cy.get("[aria-label='music-item']").contains(/^(Gojira)/i)
    musicaItem.click()
  });

  it('Clicar na curtir da música', () => {
    // if (musicaItem) {
    //   get(musicaItem).then( (item) => {
    //     item.find("[data-testid='icon-button']").click()
    //   } )
    // }
    

    cy.get(musicaItem).get("[data-testid='icon-button']").first().click()

  });
})