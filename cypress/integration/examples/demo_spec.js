describe("Compare Property", () => {
  it("Comparing", () => {
    cy.visit("https://green-mushroom-025b0ca00.azurestaticapps.net");
    cy.get(".compare-btn").contains("Compare").click();
    cy.get("#compare-btn").click();
    cy.get(".modal-bodyCompare").contains("Finalize").click();
    cy.get(".modal-footer").contains("Close").click();
    cy.get(".cards-header").contains("Finalized Property").click();
  });
});
