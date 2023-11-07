/* eslint-disable no-undef */
describe("Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("links on the navbar are working are not", () => {
    cy.getByData("home").contains("Home").click();
    cy.getByData("cart").click();
    cy.getByData("home").contains("Home").click();
  });
});
