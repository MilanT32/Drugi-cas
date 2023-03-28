class LoginPage {
  get emailInputField() {
    return cy.get("#email");
  }

  loginUser(userEmail, password) {
    this.emailInputField.type(userEmail);
    this.passwordInputField.type(password);
    this.
  }
}

export const loginpage = new LoginPage();
