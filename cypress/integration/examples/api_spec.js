describe("Request", () => {
  it("displays products from API", () => {
    cy.request("https://fakestoreapi.herokuapp.com/products/1").should(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response).to.have.property("headers");
      }
    );
  });
});
