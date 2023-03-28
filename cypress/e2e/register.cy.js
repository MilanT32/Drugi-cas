const locators = require("../fixtures/locators.json");

import { faker } from "@faker-js/faker";
import { registerpage, RegisterPage } from "../page_object/registerPage";
import { navigationBar } from "../page_object/navigationBar";

describe("Registration page", () => {
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
  });

  it("check if visible", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register");
    registerpage.firstNameInputField.should("be.visible");
    registerpage.lastNameInputField.should("be.visible");
    registerpage.emailInputField.should("be.visible");
    registerpage.passwordInputField.should("be.visible");
    registerpage.conf_passwordInputField.should("be.visible");
    registerpage.termsCheckbox.should("be.visible");
    registerpage.submittBtn.should("be.visible");
  });
  it.only("register successfully", () => {
    cy.visit("https://gallery-app.vivifyideas.com/register");
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var email = faker.internet.email();
    var password = faker.internet.password();
    registerpage.firstNameInputField.type(firstName);
    registerpage.firstNameInputField.should("have.value", firstName);
    registerpage.lastNameInputField.type(lastName);
    registerpage.lastNameInputField.should("have.value", lastName);
    registerpage.emailInputField.type(email);
    registerpage.emailInputField.should("have.value", email);
    registerpage.passwordInputField.type(password);
    registerpage.passwordInputField.should("have.value", password);
    registerpage.conf_passwordInputField.type(password);
    registerpage.conf_passwordInputField.should("have.value", password);
    registerpage.termsCheckbox.click();
    registerpage.termsCheckbox.should("be.checked");
    registerpage.submittBtn.click();
  });
  it("Check if visile on register page", () => {});

  it("Visit Registration page", () => {
    cy.visit("/register");
    registerpage.firstNameInputField.clear();
    registerpage.lastNameInputField.clear();
    registerpage.emailInputField.clear();
    registerpage.passwordInputField.clear();
    registerpage.passwordConfirmationInputField.clear();
  });

  it("Positive case - successful registration", () => {
    var pass = faker.internet.password();
    cy.visit("/register");
    cy.get(locators.registerpage.firstNameInputField).type(
      faker.name.firstName()
    );
    cy.get(locators.registerpage.lastNameInputField).type(
      faker.name.lastName()
    );
    cy.get(locators.registerpage.emailInputField).type(faker.internet.email());
    cy.get(locators.registerpage.passwordInputField).type(pass);
    cy.get(locators.registerpage.passwordConfirmationField).type(pass);
    cy.get(locators.registerpage.formCheckInputField).click();
    cy.get(locators.navigationsButtons.registerBtn).click();
  });

  it("Negative case - try to register with leaving all fields empty", () => {
    cy.visit("/register");
    registerpage.firstNameInputField.clear();
    registerpage.lastNameInputField.clear();
    registerpage.emailInputField.clear();
    registerpage.passwordInputField.clear();
    registerpage.passwordConfirmationInputField.clear();
    navigationBar.registerBtn.click();
    registerpage.errorAlert.should("be.visible");
  });

  it("Negative case - try to register with leaving first-name field empty", () => {
    cy.visit("/register");
    registerpage.firstNameInputField.clear();
    registerpage.lastNameInputField.type("Aleksic");
    registerpage.emailInputField.type("milannnnnnaleksic23@gmail.com");
    registerpage.passwordInputField.type("milanaleksic123");
    registerpage.passwordConfirmationInputField.type("milanaleksic123");
    registerpage.formCheckInputField.click();
    navigationBar.registerBtn.click();
  });

  it("Negative case - try to register with leaving last-name field empty", () => {
    cy.visit("/register");
    registerpage.firstNameInputField.type("Milan");
    registerpage.lastNameInputField.clear();
    registerpage.emailInputField.type("milannnnnnaleksic23@gmail.com");
    registerpage.passwordInputField.type("milanaleksic123");
    registerpage.passwordConfirmationInputField.type("milanaleksic123");
    registerpage.formCheckInputField.click();
    navigationBar.registerBtn.click();
  });
  it("Negative case - try to register with leaving email field empty", () => {
    cy.visit("/register");
    registerpage.firstNameInputField.type("Milan");
    registerpage.lastNameInputField.type("Aleksic");
    registerpage.emailInputField.clear();
    registerpage.passwordInputField.type("milanaleksic123");
    registerpage.passwordConfirmationInputField.type("milanaleksic123");
    registerpage.formCheckInputField.click();
    navigationBar.registerBtn.click();
  });

  it("Negative case - try to register with leaving password field empty", () => {
    cy.visit("/register");
    registerpage.firstNameInputField.type("Milan");
    registerpage.lastNameInputField.type("Aleksic");
    registerpage.emailInputField.type("milanaaleksic@gmail.com");
    registerpage.passwordInputField.clear();
    registerpage.passwordConfirmationInputField.type("milanaleksic123");
    registerpage.formCheckInputField.click();
    navigationBar.registerBtn.click();
  });
  it("Negative case - try to register with leaving password-confirmation field empty", () => {
    cy.visit("/register");
    registerpage.firstNameInputField.type("Milan");
    registerpage.lastNameInputField.type("Aleksic");
    registerpage.emailInputField.type("milanaaleksic@gmail.com");
    registerpage.passwordInputField.type("milanaleksic123");
    registerpage.passwordConfirmationInputField.clear();
    registerpage.formCheckInputField.click();
    navigationBar.registerBtn.click();
  });
  it("Negative case - try to register without clicking form-check-input box", () => {
    cy.visit("/register");
    registerpage.firstNameInputField.type("Milan");
    registerpage.lastNameInputField.type("Aleksic");
    registerpage.emailInputField.type("milanaaleksic@gmail.com");
    registerpage.passwordInputField.type("milanaleksic123");
    registerpage.passwordConfirmationInputField.type("milanaleksic123");
    registerpage.formCheckInputField;
    navigationBar.registerBtn.click();
  });
  it("Negative case - try to register with entering invalid email (without @)", () => {
    cy.visit("/register");
    registerpage.firstNameInputField.type("Milan");
    registerpage.lastNameInputField.type("Aleksic");
    registerpage.emailInputField.type("milanaaleksicgmail.com");
    registerpage.passwordInputField.type("milanaleksic123");
    registerpage.passwordConfirmationInputField.type("milanaleksic123");
    registerpage.formCheckInputField.click();
    navigationBar.registerBtn.click();
  });
  it("Negative case - try to register with entering invalid password (only latters)", () => {
    cy.visit("/register");
    registerpage.firstNameInputField.type("Milan");
    registerpage.lastNameInputField.type("Aleksic");
    registerpage.emailInputField.type("milanaaleksic@gmail.com");
    registerpage.passwordInputField.type("milanaleksic");
    registerpage.passwordConfirmationInputField.type("milanaleksic");
    registerpage.formCheckInputField.click();
    navigationBar.registerBtn.click();
  });
  it("Negative case - try to register with entering short password (less then 8 characters)", () => {
    cy.visit("/register");
    registerpage.firstNameInputField.type("Milan");
    registerpage.lastNameInputField.type("Aleksic");
    registerpage.emailInputField.type("milanaaleksic@gmail.com");
    registerpage.passwordInputField.type("asdf123");
    registerpage.passwordConfirmationInputField.type("asdf123");
    registerpage.formCheckInputField.click();
    navigationBar.registerBtn.click();
  });
});
