describe('GhostOpen', () => {
  it('passes', () => {
    cy.visit('/')
    cy.contains('Resources').click();
    cy.contains('Start here').click();
    cy.get('[name= "search"]').type('create new blog');
    cy.get('li').eq(9).click();
    cy.scrollTo('top');
    cy.contains('Pricing').click();
    cy.get('[data-price="starter"]').invoke('text').then(starterPrice => {
    cy.get('[id="members"]').invoke('val', 8).trigger('input')
    cy.get('[data-price="starter"]').invoke('text').then(parseFloat).should('be.gt',parseFloat(starterPrice) )
    cy.get('[data-price="creator"]').invoke('text').then(parseFloat).should('be.gt', 25 )
    cy.get('[data-price="team"]').invoke('text').then(parseFloat).should('be.gt', 50 )
    cy.get('[data-price="business"]').invoke('text').then(parseFloat).should('be.gt', 199 )
    })
  })
  })
