/// <reference types="cypress" />

// This test goes through a user flow selecting a preset and making sure that the layers on it are selected

describe('Test sidebar', () => {
  it('selects appropriate layers when expandable-ice-charts preset is selected', () => {
    cy.visit('/antarctic');
    cy.get('#expandable-ice-charts').click();

    cy.get('#layers-number-ice-charts').contains('1');
    cy.get('#layers-number-sar-imagery').contains('1');

    cy.get('#check-marginal-ice-zone-miz').should('be.checked');
  });
});
