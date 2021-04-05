describe("Form test", () => {
  it("fill the request document form", () => {
    cy.visit("https://green-mushroom-025b0ca00.azurestaticapps.net");
    cy.get(".compare-btn").contains("Compare").click();
    cy.get("#compare-btn").click();
    cy.get(".modal-bodyCompare").contains("Finalize").click();
    cy.get(".modal-footer").contains("Close").click();
    cy.get(".cards-header").contains("Finalized Property").click();
    cy.contains("Request Property Documents").click();
    cy.get("form");

    cy.get('input[name="email"]')
      .type("atshaya@gmail.com")
      .should("have.value", "atshaya@gmail.com");

    cy.get('input[name="phoneno"]').type("9123456789");
    //cy.get('input[name = "phoneno"]').its("length").should("eq", 10);
    // cy.get("#phoneno").should(($p) => {
    //   expect($p).to.have.length(10);
    // });
    cy.get("form").submit();
  });
});
