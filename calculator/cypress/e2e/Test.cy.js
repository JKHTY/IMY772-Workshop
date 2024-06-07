describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  });


  it('Testing all button clickable', () => {
    cy.get('button')
    .click({multiple: true});
  })

  it('Each button and display correct input', () => {
    const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'A', 'B', 'C', 'D', 'E', 'F'];
    
    buttons.forEach((button) => {
        cy.get('button').contains(button).click();
        cy.get('input').should('have.value', button);
        cy.get('button').contains('Clear').click();
    });
  });

  it('Only display a maximum of 3 digits for each input', () => {
    const inputs = ['1', '2', '3', '4'];
    
    inputs.forEach((char) => {
        cy.get('button').contains(char).click();
    });

    cy.get('input').should('have.value', '123');
  });

  it('Addition1', () => {
    cy.get('button').contains('6').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('F').click();
    cy.get('button').contains('=').click();
    cy.get('input').should('have.value', "15");
  });

  it('Addition2', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('A').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('=').click();
    cy.get('input').should('have.value', "6B");
  });

  it('Addition3', () => {
    cy.get('button').contains('C').click();
    cy.get('button').contains('A').click();
    cy.get('button').contains('A').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('9').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('A').click();
    cy.get('button').contains('=').click();
    cy.get('input').should('have.value', "15B4");
  });

  it('Subtraction1', () => {
      cy.get('button').contains('F').click();
      cy.get('button').contains('-').click();
      cy.get('button').contains('1').click();
      cy.get('button').contains('=').click();
      cy.get('input').should('have.value', 'E');
  });

  it('Subtraction2', () => {
    cy.get('button').contains('F').click();
    cy.get('button').contains('F').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('=').click();
    cy.get('input').should('have.value', 'EF');
  });

  it('Subtraction3', () => {
    cy.get('button').contains('F').click();
    cy.get('button').contains('F').click();
    cy.get('button').contains('F').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('F').click();
    cy.get('button').contains('=').click();
    cy.get('input').should('have.value', 'EF0');
  });

  it('Multiplication1', () => {
      cy.get('button').contains('A').click();
      cy.get('button').contains('*').click();
      cy.get('button').contains('2').click();
      cy.get('button').contains('=').click();
      cy.get('input').should('have.value', '14');
  });

  it('Multiplication2', () => {
    cy.get('button').contains('A').click();
    cy.get('button').contains('7').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('A').click();
    cy.get('button').contains('=').click();
    cy.get('input').should('have.value', '1B66');
  });

  it('Multiplication3', () => {
    cy.get('button').contains('A').click();
    cy.get('button').contains('7').click();
    cy.get('button').contains('A').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('A').click();
    cy.get('button').contains('A').click();
    cy.get('button').contains('=').click();
    cy.get('input').should('have.value', '1BE904');
  });

  it('Division', () => {
      cy.get('button').contains('6').click();
      cy.get('button').contains('/').click();
      cy.get('button').contains('2').click();
      cy.get('button').contains('=').click();
      cy.get('input').should('have.value', '3');
  });

  it('Division', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('input').should('have.value', '8');
  });

  it('Division', () => {
    cy.get('button').contains('A').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('input').should('have.value', '361');
  });

  it('should display a maximum of 6 digits in the result', () => {
    //Largest multiplication
    cy.get('button').contains('F').click();
    cy.get('button').contains('F').click();
    cy.get('button').contains('F').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('F').click();
    cy.get('button').contains('F').click();
    cy.get('button').contains('F').click();
    cy.get('button').contains('=').click();
    
    
    cy.get('input').invoke('val').then((value) => {
      expect(value.length).to.be.at.most(6);
    });

    cy.get('h2').invoke('text').then((text) => {
        const result = text.replace('Result: ', '');
        expect(result.length).to.be.at.most(6);
    });
  });

  it('should not display negative numbers', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    
    cy.get('h2').invoke('text').then((text) => {
      const result = text.replace('Result: ', '');
      expect(result).to.be.equal('Can not display Negative numbers'.toUpperCase());
    });
  });

  it('should not display decimal points', () => {
    cy.get('button').contains('3').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('input').should('have.value', '1');
  });

})