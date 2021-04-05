// describe("My First Test", () => {
//   it("Does not do much!", () => {
//     expect(true).to.equal(true);
//   });
// });
describe("My First Test", () => {
  it("Visits the Real estate page", () => {
    cy.visit("https://green-mushroom-025b0ca00.azurestaticapps.net");
  });
});
