/* eslint-disable no-undef */
describe("main page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  context("Home part", () => {
    it("the heading contains valid text", () => {
      cy.getByData("home").find("h5").contains("Choose your style..!!");
    });
  });
  context("Product part", () => {
    it("Electronics is navigating to correct url", () => {
      cy.getByData("Electronics").click();
      cy.location("pathname").should("equal", "/Electronics");
      cy.getByData("home").contains("Home").click();
      cy.location("pathname").should("equal", "/");
    });
    it("Women is navigating to correct url", () => {
      cy.getByData("Women").click();
      cy.location("pathname").should("equal", "/Women");
      cy.getByData("home").contains("Home").click();
      cy.location("pathname").should("equal", "/");
    });
    it("Men is navigating to correct url", () => {
      cy.getByData("Men").click();
      cy.location("pathname").should("equal", "/Men");
      cy.getByData("home").contains("Home").click();
      cy.location("pathname").should("equal", "/");
    });
  });
});
