import { v4 as uuid } from "uuid";

const testPizza = {
  id: uuid(),
  name: "BananasTestPizza",
  size: "small",
  sauce: "garlic",
  special: "THIS IS FAKE"
};

describe("Pizza Form", () => {
  it("can navigate to site", () => {
    cy.visit("/pizza");
    cy.url().should("include", "localhost");
  });
  it("can type a pizza name", () => {
    cy.get("[data-cy='name']")
      .type(testPizza.name)
      .should("have.value", testPizza.name);
  });
  it("can select pepperoni and olives as toppings", () => {
    cy.get("[data-cy='pep']").check().should("have.checked");
    cy.get("[data-cy='olv']").check().should("have.checked");
  });
  it("can complete and submit form", () => {
    cy.get("[data-cy='sauce']")
      .select(testPizza.sauce)
      .should("have.value", testPizza.sauce);
    cy.get("[data-cy='size']").select(testPizza.size).should("have.value", testPizza.size);
    cy.get("[data-cy='special']")
      .type(testPizza.special)
      .should("have.value", testPizza.special);
    cy.get("[data-cy='submit']").click();
  });
  it("can go back to the home page", () => {
    cy.get("[data-cy='home']").click();
  });
  it("successfully posted a new pizza", () => {
    cy.contains(testPizza.name)
      .next()
      .contains(testPizza.size)
      .next()
      .contains(testPizza.sauce)
      .next()
      .next()
      .contains(testPizza.special)
  });
});
