const locators = require("../fixtures/locators.json");

describe("Registration page", () => {
  it("Visit Registration page", () => {
    cy.visit("/register");
    cy.get(locators.registerPage.firstNameInputField).clear();
    cy.get(locators.registerPage.lastNameInputField).clear();
    cy.get(locators.registerPage.emailInputField).clear();
    cy.get(locators.registerPage.passwordInputField).clear();
    cy.get(locators.registerPage.passwordConfirmationField).clear();
  });
});
it("Positive case - successful registration", () => {
  cy.visit("/register");
  cy.get(locators.registerPage.firstNameInputField).type("Milan");
  cy.get(locators.registerPage.lastNameInputField).type("Aleksic");
  cy.get(locators.registerPage.emailInputField).type(
    "milannnnnnaleksic23@gmail.com"
  );
  cy.get(locators.registerPage.passwordInputField).type("milanaleksic123");
  cy.get(locators.registerPage.passwordConfirmationField).type(
    "milanaleksic123"
  );
  cy.get(locators.registerPage.formCheckInputField).click();
  cy.get(locators.navigationsButtons.registerBtn).click();
});

it("Negative case - try to register with leaving all fields empty", () => {
  cy.visit("/register");
  cy.get(locators.registerPage.firstNameInputField).clear();
  cy.get(locators.registerPage.lastNameInputField).clear();
  cy.get(locators.registerPage.emailInputField).clear();
  cy.get(locators.registerPage.passwordInputField).clear();
  cy.get(locators.registerPage.passwordConfirmationField).clear();
  cy.get(locators.navigationsButtons.registerBtn).click();
});

it("Negative case - try to register with leaving first-name field empty", () => {
  cy.visit("/register");
  cy.get(locators.registerPage.firstNameInputField).clear();
  cy.get(locators.registerPage.lastNameInputField).type("Aleksic");
  cy.get(locators.registerPage.emailInputField).type(
    "milannnnnnaleksic23@gmail.com"
  );
  cy.get(locators.registerPage.passwordInputField).type("milanaleksic123");
  cy.get(locators.registerPage.passwordConfirmationField).type(
    "milanaleksic123"
  );
  cy.get(locators.registerPage.formCheckInputField).click();
  cy.get(locators.navigationsButtons.registerBtn).click();
});

it("Negative case - try to register with leaving last-name field empty", () => {
  cy.visit("/register");
  cy.get(locators.registerPage.firstNameInputField).type("Milan");
  cy.get(locators.registerPage.lastNameInputField).clear();
  cy.get(locators.registerPage.emailInputField).type(
    "milannnnnnaleksic23@gmail.com"
  );
  cy.get(locators.registerPage.passwordInputField).type("milanaleksic123");
  cy.get(locators.registerPage.passwordConfirmationField).type(
    "milanaleksic123"
  );
  cy.get(locators.registerPage.formCheckInputField).click();
  cy.get(locators.navigationsButtons.registerBtn).click();
});
it("Negative case - try to register with leaving email field empty", () => {
  cy.visit("/register");
  cy.get(locators.registerPage.firstNameInputField).type("Milan");
  cy.get(locators.registerPage.lastNameInputField).type("Aleksic");
  cy.get(locators.registerPage.emailInputField).clear();
  cy.get(locators.registerPage.passwordInputField).type("milanaleksic123");
  cy.get(locators.registerPage.passwordConfirmationField).type(
    "milanaleksic123"
  );
  cy.get(locators.registerPage.formCheckInputField).click();
  cy.get(locators.navigationsButtons.registerBtn).click();
});

it("Negative case - try to register with leaving password field empty", () => {
  cy.visit("/register");
  cy.get(locators.registerPage.firstNameInputField).type("Milan");
  cy.get(locators.registerPage.lastNameInputField).type("Aleksic");
  cy.get(locators.registerPage.emailInputField).type("milanaaleksic@gmail.com");
  cy.get(locators.registerPage.passwordInputField).clear();
  cy.get(locators.registerPage.passwordConfirmationField).type(
    "milanaleksic123"
  );
  cy.get(locators.registerPage.formCheckInputField).click();
  cy.get(locators.navigationsButtons.registerBtn).click();
});
it("Negative case - try to register with leaving password-confirmation field empty", () => {
  cy.visit("/register");
  cy.get(locators.registerPage.firstNameInputField).type("Milan");
  cy.get(locators.registerPage.lastNameInputField).type("Aleksic");
  cy.get(locators.registerPage.emailInputField).type("milanaaleksic@gmail.com");
  cy.get(locators.registerPage.passwordInputField).type("milanaleksic123");
  cy.get(locators.registerPage.passwordConfirmationField).clear();
  cy.get(locators.registerPage.formCheckInputField).click();
  cy.get(locators.navigationsButtons.registerBtn).click();
});
it("Negative case - try to register without clicking form-check-input box", () => {
  cy.visit("/register");
  cy.get(locators.registerPage.firstNameInputField).type("Milan");
  cy.get(locators.registerPage.lastNameInputField).type("Aleksic");
  cy.get(locators.registerPage.emailInputField).type("milanaaleksic@gmail.com");
  cy.get(locators.registerPage.passwordInputField).type("milanaleksic123");
  cy.get(locators.registerPage.passwordConfirmationField).type(
    "milanaleksic123"
  );
  cy.get(locators.registerPage.formCheckInputField);
  cy.get(locators.navigationsButtons.registerBtn).click();
});
it("Negative case - try to register with entering invalid email (without @)", () => {
  cy.visit("/register");
  cy.get(locators.registerPage.firstNameInputField).type("Milan");
  cy.get(locators.registerPage.lastNameInputField).type("Aleksic");
  cy.get(locators.registerPage.emailInputField).type("milanaaleksicgmail.com");
  cy.get(locators.registerPage.passwordInputField).type("milanaleksic123");
  cy.get(locators.registerPage.passwordConfirmationField).type(
    "milanaleksic123"
  );
  cy.get(locators.registerPage.formCheckInputField);
  cy.get(locators.navigationsButtons.registerBtn).click();
});
it("Negative case - try to register with entering invalid password (only latters)", () => {
  cy.visit("/register");
  cy.get(locators.registerPage.firstNameInputField).type("Milan");
  cy.get(locators.registerPage.lastNameInputField).type("Aleksic");
  cy.get(locators.registerPage.emailInputField).type("milanaaleksic@gmail.com");
  cy.get(locators.registerPage.passwordInputField).type("milanaleksic");
  cy.get(locators.registerPage.passwordConfirmationField).type("milanaleksic");
  cy.get(locators.registerPage.formCheckInputField);
  cy.get(locators.navigationsButtons.registerBtn).click();
});
it("Negative case - try to register with entering short password (less then 8 characters)", () => {
  cy.visit("/register");
  cy.get(locators.registerPage.firstNameInputField).type("Milan");
  cy.get(locators.registerPage.lastNameInputField).type("Aleksic");
  cy.get(locators.registerPage.emailInputField).type("milanaaleksic@gmail.com");
  cy.get(locators.registerPage.passwordInputField).type("asdf123");
  cy.get(locators.registerPage.passwordConfirmationField).type("asdf123");
  cy.get(locators.registerPage.formCheckInputField);
  cy.get(locators.navigationsButtons.registerBtn).click();
});
