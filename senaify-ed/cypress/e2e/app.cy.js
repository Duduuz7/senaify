describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  // it('Verificar está exibindo', () => {
  //   cy.get("[aria-label='title-head']")
  //   cy.get("[aria-label='title-head']").should("contain", "Good morning")
  // })

  // it('Verificar se tem uma lista com a playlist exibida', () => {
  //   cy.wait(2000)
  //   cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  // })

  // it('Clicar em uma opção de playlist e listar suas músicas', () => {
  //   cy.get("[aria-label='playlist-item']").first().click()
  //   cy.wait(1000)

  //   cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  // })

  // it('Clicar em uma opção de playlist e listar suas músicas', () => {
  //   cy.get("[aria-label='music-item']").eq(4).click()

  //   cy.scrollTo("top")
  // })

  it('Playlist escolhida', () => {
    cy.get("[aria-label='playlist-item']").contains('Top Brasil').click()
    
  })

  it('Música escolhida', () => {
    cy.get("[aria-label='music-item']").contains("Casca de Bala").click()
  })
})