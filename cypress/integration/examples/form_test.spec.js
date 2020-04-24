import { v4 as uuid } from "uuid";

const testPizza = {
  id: uuid(),
  name: "Bananas",
  size: "small",
  sauce: "garlic",
  special: "THIS IS FAKE",
  toppings: ["bac", "pep", "bpr"]
};

describe("Pizza Form", () => {
  it("can navigate to site", () => {
    cy.visit("/pizza");
    cy.url().should("include", "localhost");
  });
  it("can type a pizza name", () => {
    cy.get("[data-cy='name']")
      .type("myPizzaName")
      .should("have.value", "myPizzaName");
  });
  it("can select pepperoni and olives as toppings", () => {
    cy.get("[data-cy='pep']").check().should("have.checked");
    cy.get("[data-cy='olv']").check().should("have.checked");
  });
  it("can complete and submit form", () => {
    cy.get("[data-cy='sauce']")
      .select("marinara")
      .should("have.value", "marinara");
    cy.get("[data-cy='size']").select("large").should("have.value", "large");
    cy.get("[data-cy='special']")
      .type("THIS IS A TEST")
      .should("have.value", "THIS IS A TEST");
    cy.get("[data-cy='submit']").click();
    cy.wait(3000);
  });
  it("shows new pizza on homepage", () => {
    cy.visit("/");
  });
});
