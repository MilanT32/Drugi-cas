//omogucava pristupa lokatorima u .json fajlu
const locators = require("../fixtures/locators.json");
//importovanje POM-a
import { loginpage } from "../page_object/loginPage";
import { navigationBar } from "../page_object/navigationBar";
import { faker } from "@faker-js/faker";

describe("Login page", () => {
  it("Visit login page", () => {
    cy.visit("/login");
    cy.get('input[id="email"]').clear();
    cy.get('input[id="password"]').clear();
  });

  it("Check UI elements of login page", () => {
    loginpage.headingText.should("have.text", "Please login");
    navigationBar.loginBtn.should("exist");
    navigationBar.logoutBtn.should("not exist");
  });

  it.only("Positive case - Successful login", () => {
    cy.visit("/login");
    loginpage.emailInputField.type(faker.internet.email());
    cy.get('input[ id="password"]').type(faker.internet.password());
    cy.get('button[type="submit"]').click();
  });
  it("Logout", () => {
    cy.visit("/login");
    cy.get('input[id="email"]').type("markoqa13@gmail.com");
    cy.get('input[id="password"]').type("Marko123");
    cy.get('button[type="submit"]').click();
    cy.wait(3000);
    navigationBar.logoutBtn.click();
  });
});
