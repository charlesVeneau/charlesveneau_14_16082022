describe('HR Net form', () => {
  it('visit the home page', () => {
    cy.visit('http://localhost:3001/#/');
  });
});

describe('HR Net form submit button', () => {
  it('should be disabled', () => {
    cy.get('.button').should('be.disabled');
  });
});

describe('Employee section', () => {
  it('fill the firstName input', () => {
    cy.get('#firstName').type('charles');
  });
  it('firstName input have green border', () => {
    cy.get('#firstName').should('have.class', 'border-green-600');
  });
  it('fill the lastName input', () => {
    cy.get('#lastName').type('veneau');
  });
  it('lastName input have green border', () => {
    cy.get('#lastName').should('have.class', 'border-green-600');
  });
  it('fill the date of birth input', () => {
    cy.get('#dateOfBirth').type('1985-12-10');
  });
  it('date of birth input have green border', () => {
    cy.get('#dateOfBirth').should('have.class', 'border-green-600');
  });
  it('fill the start date input', () => {
    cy.get('#startDate').type('2021-05-17');
  });
  it('start date input have green border', () => {
    cy.get('#startDate').should('have.class', 'border-green-600');
  });
});

describe('Adress section', () => {
  it('fill the street input', () => {
    cy.get('#street').type('15 rue Alfred Laurant');
  });
  it('street input have green border', () => {
    cy.get('#street').should('have.class', 'border-green-600');
  });

  it('fill the city input', () => {
    cy.get('#city').type('Boulogne Billancourt');
  });
  it('city input have green border', () => {
    cy.get('#city').should('have.class', 'border-green-600');
  });

  it('select the last state option', () => {
    cy.get('#state').select(58, { force: true });
  });
  it('state have green border', () => {
    cy.get('#state').should('have.value', 'WY');
    cy.get('#state').should('have.class', 'isValid');
  });

  it('fill the zipcode input', () => {
    cy.get('#zipCode').type('75000');
  });
  it('zipcode input have green border', () => {
    cy.get('#zipCode').should('have.class', 'border-green-600');
  });
});

describe('Department section', () => {
  it('select the last department option', () => {
    cy.get('#department').select(9, { force: true });
  });
  it('department have green border', () => {
    cy.get('#department').should('have.value', 'TR');
    cy.get('#department').should('have.class', 'isValid');
  });
});

describe('HR Net form submit button', () => {
  it('should be enabled', () => {
    cy.get('.button').should('be.enabled');
  });
  it('shoud display a modal if clicked', () => {
    cy.get('.button').click();
    cy.get('#modal-elt').should('be.visible');
  });
});

describe('HR Net form Modal', () => {
  it('should display a succes message', () => {
    cy.get('.modal-title').should('be.visible');
  });
  it('should redirect to the employees page', () => {
    cy.get('.modal-link').click();
    cy.url().should('contains', '/employees');
  });
});

describe('HR Net Table', () => {
  it('should contains last form entry', () => {
    cy.get('tbody tr td').first().should('have.text', 'charles');
  });
});
