describe('template spec', () => {
  before('passes', () => {
    cy.visit('/')
  })

  it("Redirecionar para a tela de favoritos", () => {
    cy.get("[href='/Favorites']").click()
    cy.scrollTo("top")
  })

  it("Verifica se há músicas favoritas", () => {
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  })

  let musicaEscolhida;

  it("Reproduzir uma música específica", () => {
    musicaEscolhida = cy.get("[aria-label='music-item']").contains("Where Dragons Dwell")
    musicaEscolhida.click()
  })
})