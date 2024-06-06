describe('template spec', () => {
  // beforeEach(()=>{
  //   cy.visit('http://localhost:3000/')
  // });

  //Testing clicking each button//
  it('Testing clicking button', () => {
    cy.visit('http://localhost:3000/')

    cy.get('button')
    .click({multiple: true});

  })

})