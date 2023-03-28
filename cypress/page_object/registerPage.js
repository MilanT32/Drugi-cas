class RegisterPage {
  get firstNameInputField() {
    return cy.get("#first-name");
  }
  get lastNameInputField() {
    return cy.get("#last-name");
  }
  get emailInputField() {
    return cy.get("#email");
  }
  get passwordInputField() {
    return cy.get("#password");
  }
  get conf_passwordInputField() {
    return cy.get("#password-confirmation");
  }
  get termsCheckbox() {
    return cy.get(".form-check-input");
  }
  get submittBtn() {
    return cy.get(".btn");
  }
}
export const registerpage = new RegisterPage();
